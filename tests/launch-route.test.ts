import { beforeEach, describe, expect, it, vi } from "vitest";

const bot = { isBot: false };
vi.mock("botid/server", () => ({ checkBotId: async () => bot }));

const { POST } = await import("@/app/api/launch/route");
const { resetRateLimit } = await import("@/lib/signup-guard");

let sent: any[] = [];
let resendFails = false;

beforeEach(() => {
  sent = [];
  resendFails = false;
  bot.isBot = false;
  resetRateLimit();
  process.env.RESEND_API_KEY = "re_test";
  vi.stubGlobal("fetch", async (url: string, init: RequestInit) => {
    if (resendFails) return new Response("to: test.guest@example.com is invalid", { status: 422 });
    sent.push({ url, body: JSON.parse(String(init.body)) });
    return Response.json({ id: "email_1" });
  });
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

const good = { email: "test.guest@example.com", role: "rancher", website: "", elapsedMs: 15000 };
const send = async (body: unknown, { origin = "https://agrivanna.com", ip = "203.0.113.9" } = {}) => {
  const res = await POST(new Request("https://agrivanna.com/api/launch", {
    method: "POST",
    headers: { "Content-Type": "application/json", origin, "x-forwarded-for": ip },
    body: JSON.stringify(body),
  }));
  return { status: res.status, body: await res.json() };
};

describe("/api/launch", () => {
  it("sends the confirmation from the trial form's address, in its style", async () => {
    expect(await send(good)).toEqual({ status: 200, body: { ok: true } });
    expect(sent).toHaveLength(1);
    const e = sent[0].body;
    expect(sent[0].url).toBe("https://api.resend.com/emails");
    expect(e.from).toBe("Agrivanna Website <noreply@notify.agrivanna.com>");
    expect(e.to).toEqual(["test.guest@example.com"]);
    expect(e.reply_to).toBe("info@agrivanna.com");
    expect(e.subject).toBe("You're on the Agrivanna early access list");
    expect(e.text).toMatch(/^Hello,\n\nThanks for signing up for early access to Agrivanna\. Your sign up reached us on \d{1,2} \w+ \d{4}\.\n\nOur team will be in touch soon to set up Agrivanna on your ranch\.\n\nIf you have questions in the meantime, reply to this email or write to info@agrivanna\.com\.\n\nAgrivanna Inc\.\n1315 Northmount Dr NW, Calgary, AB T2L 0C9\ninfo@agrivanna\.com$/);
  });

  it("says the right next step for each role", async () => {
    const lines: Record<string, string> = {
      investor: "share where Agrivanna is headed", partner: "talk about working together", team: "about joining Agrivanna",
    };
    for (const [role, line] of Object.entries(lines)) {
      sent = [];
      await send({ ...good, role });
      expect(sent[0].body.text).toContain(line);
    }
  });

  it("repeats nothing the visitor typed except their address", async () => {
    await send({ ...good, name: "Visit http://spam.example", role: "<b>x</b>" });
    expect(sent[0].body.text).not.toMatch(/spam|<b>/);
    expect(sent[0].body.text).toContain("Our team will be in touch soon.");
  });

  it("drops bots without telling them: hidden field, too fast, BotID", async () => {
    expect((await send({ ...good, website: "x" })).body).toEqual({ ok: true });
    expect((await send({ ...good, elapsedMs: 200 })).body).toEqual({ ok: true });
    bot.isBot = true;
    expect((await send(good)).body).toEqual({ ok: true });
    expect(sent).toHaveLength(0);
  });

  it("no email to a bad or throwaway address", async () => {
    await send({ ...good, email: "nope" });
    await send({ ...good, email: "x@mailinator.com" });
    expect(sent).toHaveLength(0);
  });

  it("refuses other sites", async () => {
    expect((await send(good, { origin: "https://evil.example" })).status).toBe(403);
    expect(sent).toHaveLength(0);
  });

  it("a whole party on one Wi-Fi still gets their emails; a flood is capped at 60 per 10 minutes", async () => {
    for (let i = 0; i < 60; i++) await send({ ...good, email: `guest${i}@example.com` });
    expect(sent).toHaveLength(60);
    await send({ ...good, email: "guest61@example.com" });
    expect(sent).toHaveLength(60);
  });

  it("does not use up the trial form's limit", async () => {
    const { rateLimited } = await import("@/lib/signup-guard");
    for (let i = 0; i < 10; i++) await send(good);
    expect(rateLimited("203.0.113.9")).toBe(false);
  });

  it("Resend refusing: still ok to the page, address not logged", async () => {
    resendFails = true;
    expect((await send(good)).body).toEqual({ ok: true });
    const logged = JSON.stringify((console.error as any).mock.calls);
    expect(logged).toContain("422");
    expect(logged).not.toContain("test.guest");
  });
});
