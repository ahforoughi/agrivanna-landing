import { beforeEach, describe, expect, it, vi } from "vitest";

// BotID: a person, unless a test says otherwise
const bot = { isBot: false };
vi.mock("botid/server", () => ({ checkBotId: async () => bot }));
// after(): run the work straight away and keep it so tests can wait for it
const pending: Promise<unknown>[] = [];
vi.mock("next/server", async (orig) => ({
  ...(await orig<typeof import("next/server")>()),
  after: (fn: () => unknown) => void pending.push(Promise.resolve().then(fn)),
}));

const { POST } = await import("@/app/api/trial/route");
const { resetRateLimit } = await import("@/lib/signup-guard");

type Call = { url: string; method: string; body: any };
let calls: Call[] = [];
let attioFails = false;

beforeEach(() => {
  calls = [];
  pending.length = 0;
  attioFails = false;
  bot.isBot = false;
  resetRateLimit();
  process.env.RESEND_API_KEY = "re_test";
  process.env.ATTIO_TOKEN = "attio_test";
  process.env.ATTIO_LIST = "website_signups";
  vi.stubGlobal("fetch", async (url: string, init: RequestInit) => {
    calls.push({ url, method: init.method ?? "GET", body: init.body ? JSON.parse(String(init.body)) : null });
    if (url.includes("api.attio.com")) {
      if (attioFails) return new Response(JSON.stringify({ code: "server_error" }), { status: 500 });
      if (url.includes("/objects/people/records")) return Response.json({ data: { id: { record_id: "rec_123" } } });
      return Response.json({ data: { id: { entry_id: "ent_1" } } });
    }
    return Response.json({ id: "email_1" }); // Resend
  });
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

const good = {
  name: "Test Rancher",
  email: "test.rancher@example.com",
  phone: "403 555 0100",
  ranch: "Test Ranch",
  records: "Spreadsheets",
  notes: "Calving in March.",
  source: "contact-page",
  lang: "en",
  agv_hp_extra: "",
  elapsedMs: 20000,
  page: "/en/contact",
  utm: { utm_source: "linktree", utm_medium: "qr" },
};

function req(body: unknown, { origin = "https://agrivanna.com", ip = "203.0.113.7" } = {}) {
  return new Request("https://agrivanna.com/api/trial", {
    method: "POST",
    headers: { "Content-Type": "application/json", origin, "x-forwarded-for": ip },
    body: JSON.stringify(body),
  });
}
async function send(body: unknown, opts?: { origin?: string; ip?: string }) {
  const res = await POST(req(body, opts));
  await Promise.all(pending);
  return { status: res.status, body: await res.json() };
}
const attio = () => calls.filter((c) => c.url.includes("api.attio.com"));
const emails = () => calls.filter((c) => c.url.includes("api.resend.com"));

describe("/api/trial", () => {
  it("happy path: both emails go out, the person is upserted on email, then added to the list", async () => {
    const r = await send(good);
    expect(r).toEqual({ status: 200, body: { ok: true } });
    expect(emails()).toHaveLength(2);
    const [person, entry] = attio();
    expect(person.method).toBe("PUT");
    expect(person.url).toBe("https://api.attio.com/v2/objects/people/records?matching_attribute=email_addresses");
    expect(person.body.data.values.email_addresses).toEqual(["test.rancher@example.com"]);
    expect(person.body.data.values.name).toEqual([{ first_name: "Test", last_name: "Rancher", full_name: "Test Rancher" }]);
    expect(person.body.data.values.phone_numbers).toEqual([{ original_phone_number: "+14035550100" }]);
    expect(entry.method).toBe("POST");
    expect(entry.url).toBe("https://api.attio.com/v2/lists/website_signups/entries");
    expect(entry.body.data.parent_record_id).toBe("rec_123");
    expect(entry.body.data.parent_object).toBe("people");
    expect(entry.body.data.entry_values.source).toBe("contact-page");
    expect(entry.body.data.entry_values.details).toBe(
      ["Phone: 403 555 0100", "Ranch: Test Ranch", "Records kept in: Spreadsheets", "Notes: Calving in March.", "Language: English",
       "Page: /en/contact", "utm_source: linktree", "utm_medium: qr"].join("\n"));
  });

  it("honeypot filled: fake success, nothing sent", async () => {
    expect(await send({ ...good, agv_hp_extra: "http://spam" })).toEqual({ status: 200, body: { ok: true } });
    expect(calls).toHaveLength(0);
  });

  it("sent too fast: fake success, nothing sent", async () => {
    expect(await send({ ...good, elapsedMs: 300 })).toEqual({ status: 200, body: { ok: true } });
    expect(calls).toHaveLength(0);
  });

  it("BotID says bot: blocked, nothing sent", async () => {
    bot.isBot = true;
    expect((await send(good)).status).toBe(403);
    expect(calls).toHaveLength(0);
  });

  it("another site's origin, or none: blocked, nothing sent", async () => {
    expect((await send(good, { origin: "https://evil.example" })).status).toBe(403);
    const res = await POST(new Request("https://agrivanna.com/api/trial", { method: "POST", body: JSON.stringify(good) }));
    expect(res.status).toBe(403);
    expect(calls).toHaveLength(0);
  });

  it("www and the deploy's own preview address are allowed", async () => {
    process.env.VERCEL_URL = "landing-agrivanna-abc123-agrivanna.vercel.app";
    expect((await send(good, { origin: "https://www.agrivanna.com" })).status).toBe(200);
    expect((await send(good, { origin: "https://landing-agrivanna-abc123-agrivanna.vercel.app", ip: "198.51.100.1" })).status).toBe(200);
    delete process.env.VERCEL_URL;
  });

  it("throwaway email: told to use a real one, nothing sent", async () => {
    const r = await send({ ...good, email: "someone@mailinator.com" });
    expect(r.status).toBe(400);
    expect(r.body.error).toBe("Please use your regular email address.");
    expect(calls).toHaveLength(0);
  });

  it("everyday providers are not throwaway", async () => {
    const { isDisposable } = await import("@/lib/signup-guard");
    for (const d of ["gmail.com", "outlook.com", "yahoo.ca", "shaw.ca", "telus.net", "icloud.com", "agrivanna.com"]) expect(isDisposable(`a@${d}`)).toBe(false);
  });

  it("rate limit: the 6th send in 10 minutes from one address is refused", async () => {
    for (let i = 0; i < 5; i++) expect((await send(good)).status).toBe(200);
    const r = await send(good);
    expect(r.status).toBe(429);
    expect(r.body.error).toMatch(/try again/);
    expect((await send(good, { ip: "198.51.100.2" })).status).toBe(200); // someone else is fine
  });

  it("bad email: refused with the usual message", async () => {
    const r = await send({ ...good, email: "not-an-email" });
    expect(r.status).toBe(400);
    expect(calls).toHaveLength(0);
  });

  it("long fields are cut and control characters removed", async () => {
    await send({ ...good, name: "Test\u0000 " + "R".repeat(200), ranch: "A\u200Branch", notes: "x".repeat(5000) });
    const [person, entry] = attio();
    expect(person.body.data.values.name[0].full_name.length).toBeLessThanOrEqual(80);
    expect(person.body.data.values.name[0].first_name).toBe("Test");
    expect(entry.body.data.entry_values.details).toContain("Ranch: Aranch");
    expect(entry.body.data.entry_values.details).toContain("Notes: " + "x".repeat(2000) + "\n");
  });

  it("Attio down: the visitor still sees success, the emails still go out, one retry, nothing personal logged", async () => {
    attioFails = true;
    const r = await send(good);
    expect(r).toEqual({ status: 200, body: { ok: true } });
    expect(emails()).toHaveLength(2);
    expect(attio()).toHaveLength(2); // the first call and its one retry
    const logged = JSON.stringify((console.error as any).mock.calls);
    expect(logged).toContain("Attio sync failed");
    for (const secret of ["test.rancher", "Test Rancher", "Test Ranch", "attio_test", "403"]) expect(logged).not.toContain(secret);
  });

  it("no Attio token: emails still go out, Attio skipped", async () => {
    delete process.env.ATTIO_TOKEN;
    expect((await send(good)).status).toBe(200);
    expect(emails()).toHaveLength(2);
    expect(attio()).toHaveLength(0);
  });

  it("a phone Attio rejects is dropped and the person saved without it", async () => {
    let first = true;
    vi.stubGlobal("fetch", async (url: string, init: RequestInit) => {
      calls.push({ url, method: init.method!, body: JSON.parse(String(init.body)) });
      if (url.includes("/objects/people/records") && first) { first = false; return new Response(JSON.stringify({ code: "validation_type" }), { status: 400 }); }
      if (url.includes("/objects/people/records")) return Response.json({ data: { id: { record_id: "rec_9" } } });
      return Response.json({ data: {} });
    });
    await send(good);
    const people = attio().filter((c) => c.url.includes("/records"));
    expect(people).toHaveLength(2);
    expect(people[1].body.data.values.phone_numbers).toBeUndefined();
    expect(attio().some((c) => c.url.includes("/entries"))).toBe(true);
  });
});
