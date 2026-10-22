/* Agrivanna booth demo. Works with no network: every file is cached by sw.js,
   all data is in data.js, and nothing calls any live service. */
(() => {
  const D = window.DEMO_DATA;
  const $ = (id) => document.getElementById(id);
  const IDLE_MS = 20000;
  const ANSWER = "Yes. Paddock E is grazed down, PRS 38. Move the herd next door to Paddock A. It scores 85 and has rested.";
  const STATUS_CLASS = { Ready: "ready", Watch: "watch", Rest: "rest" };
  const SVGNS = "http://www.w3.org/2000/svg";
  let current = "attract";
  let picked = null;

  // ---------------------------------------------------------------- screens + idle
  function show(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("is-on", s.id === id));
    current = id;
    const v = $("attract-video");
    if (id === "attract") { v.currentTime = 0; v.play().catch(() => {}); resetMap(); stopSpeech(); }
    else v.pause();
    armIdle();
  }
  let idle;
  function armIdle() {
    clearTimeout(idle);
    if (current !== "attract") idle = setTimeout(() => show("attract"), IDLE_MS);
  }
  ["pointerdown", "keydown"].forEach((e) => window.addEventListener(e, armIdle, { passive: true }));

  // ---------------------------------------------------------------- attract
  $("attract").addEventListener("click", () => { primeSpeech(); show("map"); });

  // ---------------------------------------------------------------- map
  const { w, h } = D.map;
  document.documentElement.style.setProperty("--map-ar", (w / h).toFixed(4));
  $("map-img").src = D.map.src;
  const svg = $("map-svg");
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svg.setAttribute("preserveAspectRatio", "none");
  const path = (rings) => rings.map((r) => "M" + r.map((p) => p.join(",")).join("L") + "Z").join("");

  const dim = document.createElementNS(SVGNS, "path");
  dim.setAttribute("class", "dim"); dim.setAttribute("fill-rule", "evenodd"); dim.style.opacity = 0;
  const sel = document.createElementNS(SVGNS, "path"); sel.setAttribute("class", "sel");
  for (const [L, p] of Object.entries(D.paddocks)) {
    const hit = document.createElementNS(SVGNS, "path");
    hit.setAttribute("d", path(p.rings)); hit.setAttribute("class", "hit");
    hit.addEventListener("click", () => pick(L));
    svg.appendChild(hit);
  }
  svg.appendChild(dim); svg.appendChild(sel);

  // Small moves in map pixels so labels never sit on top of each other
  const NUDGE = { C: [-70, 40], A: [40, -20] };
  const pills = {};
  for (const [L, p] of Object.entries(D.paddocks)) {
    const b = document.createElement("button");
    b.className = "pill " + STATUS_CLASS[p.status];
    b.innerHTML = `<i></i><b>${L}</b><em>·</em>${p.prs}`;
    const [nx, ny] = NUDGE[L] || [0, 0];
    b.style.left = ((p.label[0] + nx) / w * 100) + "%";
    b.style.top = ((p.label[1] + ny) / h * 100) + "%";
    b.setAttribute("aria-label", `Paddock ${L}, ${p.status}, score ${p.prs}`);
    b.addEventListener("click", () => pick(L));
    $("map-pills").appendChild(b); pills[L] = b;
  }
  const herdP = D.paddocks[D.herd.paddock];
  const tag = document.createElement("div");
  tag.className = "herd-tag";
  tag.textContent = `${D.herd.head} head · ${D.herd.days} days`;
  tag.style.left = (herdP.label[0] / w * 100) + "%";
  tag.style.top = `calc(${herdP.label[1] / h * 100}% + 40px)`;
  $("map-pills").appendChild(tag);

  function pick(L) {
    picked = L;
    const p = D.paddocks[L];
    Object.entries(pills).forEach(([k, b]) => b.classList.toggle("on", k === L));
    dim.setAttribute("d", `M0,0H${w}V${h}H0Z` + path(p.rings)); dim.style.opacity = 1;
    sel.setAttribute("d", path(p.rings));
    $("panel-intro").hidden = true; $("panel-card").hidden = false;
    $("card-eyebrow").textContent = `Paddock ${L}`;
    const chip = $("card-chip");
    chip.className = "chip chip-" + STATUS_CLASS[p.status]; chip.textContent = p.status;
    $("card-acres").textContent = `${p.acres} acres`;
    $("card-reasons").innerHTML = p.reasons.map((r) => `<li>${r}</li>`).join("");
    countUp($("card-score"), p.prs);
  }
  function resetMap() {
    picked = null;
    Object.values(pills).forEach((b) => b.classList.remove("on"));
    dim.style.opacity = 0; sel.setAttribute("d", "");
    $("panel-intro").hidden = false; $("panel-card").hidden = true;
  }
  function countUp(el, to) {
    const t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / 700); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  $("pick-another").addEventListener("click", resetMap);
  $("to-history").addEventListener("click", () => { drawHistory(picked); show("history"); });

  // ---------------------------------------------------------------- history
  function drawHistory(L) {
    const p = D.paddocks[L];
    const pts = p.history;
    const past = pts.filter(([y]) => y < 2026).map(([, v]) => v);
    const normal = past.reduce((a, b) => a + b, 0) / past.length;
    const now = pts[pts.length - 1][1];
    const diff = Math.round((now / normal - 1) * 100);
    $("hist-eyebrow").textContent = `Paddock ${L}`;
    $("hist-title").innerHTML = diff >= 0
      ? `This summer was <span class="lime">${diff}% greener</span> than normal.`
      : `This summer was <span class="lime">${-diff}% less green</span> than normal.`;
    $("hist-lead").textContent = L === D.herd.paddock
      ? "A good year for grass. It scores 38 now because the herd has been on it 71 days, not because the year was dry."
      : `Ten summers of satellite history for this paddock, and how 2026 compares.`;

    const c = $("chart"); c.innerHTML = "";
    const box = c.getBoundingClientRect();
    const W = Math.max(600, box.width || 720), H = Math.max(360, box.height || 520);
    c.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const pad = { l: 64, r: 40, t: 30, b: 56 };
    const vals = pts.map(([, v]) => v).concat(normal);
    const lo = Math.min(...vals) - 0.04, hi = Math.max(...vals) + 0.04;
    const X = (y) => pad.l + (y - 2016) / 10 * (W - pad.l - pad.r);
    const Y = (v) => H - pad.b - (v - lo) / (hi - lo) * (H - pad.t - pad.b);
    const el = (tag, attrs, text) => { const e = document.createElementNS(SVGNS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (text != null) e.textContent = text; c.appendChild(e); return e; };
    for (const y of [2016, 2018, 2020, 2022, 2024, 2026])
      el("text", { x: X(y), y: H - 18, "text-anchor": "middle", fill: "#8C8C85", "font-size": 18, "font-family": "GeistMono" }, y);
    el("line", { x1: pad.l, x2: W - pad.r, y1: Y(normal), y2: Y(normal), stroke: "#B6B6AE", "stroke-width": 2.5, "stroke-dasharray": "8 8" });
    el("text", { x: pad.l, y: Y(normal) - 12, fill: "#B6B6AE", "font-size": 17, "font-family": "Geist" }, "10 year normal");
    const d = pts.map(([y, v], i) => (i ? "L" : "M") + X(y).toFixed(1) + "," + Y(v).toFixed(1)).join("");
    const area = el("path", { d: d + `L${X(2026)},${H - pad.b}L${X(2016)},${H - pad.b}Z`, fill: "rgba(166,255,61,0.08)" });
    const line = el("path", { d, fill: "none", stroke: "#A6FF3D", "stroke-width": 4.5, "stroke-linejoin": "round", "stroke-linecap": "round" });
    const len = line.getTotalLength ? line.getTotalLength() : 2000;
    line.style.strokeDasharray = len; line.style.strokeDashoffset = len;
    line.getBoundingClientRect();
    line.style.transition = "stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)"; line.style.strokeDashoffset = 0;
    area.style.opacity = 0; area.style.transition = "opacity 1s .6s"; requestAnimationFrame(() => (area.style.opacity = 1));
    el("circle", { cx: X(2026), cy: Y(now), r: 20, fill: "rgba(166,255,61,0.25)" });
    el("circle", { cx: X(2026), cy: Y(now), r: 9, fill: "#A6FF3D", stroke: "#14161A", "stroke-width": 3 });
    el("text", { x: X(2026) - 16, y: Y(now) - 26, "text-anchor": "end", fill: "#F6F6F4", "font-size": 22, "font-weight": 600, "font-family": "Geist" }, "2026");
  }
  $("hist-back").addEventListener("click", () => show("map"));
  $("to-ask").addEventListener("click", () => { resetAsk(); show("ask"); });

  // ---------------------------------------------------------------- ask
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (Rec) $("mic").hidden = false; else $("hint-mic").hidden = true;
  function resetAsk() {
    $("convo").hidden = true; $("to-close").hidden = true; $("answer").textContent = "";
    $("ask-btn").hidden = false; $("mic").hidden = !Rec; $("ask-hint").hidden = false; stopSpeech();
    $("mic").classList.remove("listening");
  }
  function answer(said) {
    $("ask-btn").hidden = true; $("mic").hidden = true; $("mic").classList.remove("listening"); $("ask-hint").hidden = true;
    $("you-said").textContent = said || "Should I move my cows this week?";
    $("convo").hidden = false;
    const out = $("answer"); out.textContent = "";
    const words = ANSWER.split(" "); let i = 0;
    const tick = () => { out.textContent = words.slice(0, ++i).join(" "); if (i < words.length) setTimeout(tick, 120); else setTimeout(() => ($("to-close").hidden = false), 600); };
    tick();
    speak(ANSWER);
  }
  $("ask-btn").addEventListener("click", () => answer());
  let rec = null;
  $("mic").addEventListener("click", () => {
    primeSpeech();
    if (rec) { try { rec.abort(); } catch {} rec = null; }
    let heard = false;
    try {
      rec = new Rec(); rec.lang = "en-CA"; rec.interimResults = false; rec.maxAlternatives = 1;
      rec.onresult = (e) => { heard = true; const t = e.results[0][0].transcript; answer(t ? t.charAt(0).toUpperCase() + t.slice(1) : null); };
      // Any problem (no network, no permission, nothing heard): answer anyway; the demo never gets stuck
      rec.onerror = () => { if (!heard) answer(); heard = true; };
      rec.onend = () => { $("mic").classList.remove("listening"); if (!heard) answer(); };
      $("mic").classList.add("listening");
      rec.start();
      setTimeout(() => { if (!heard) { try { rec.stop(); } catch {} } }, 7000);
    } catch { answer(); }
  });
  $("to-close").addEventListener("click", () => { show("close"); armClose(); });

  // ---------------------------------------------------------------- speech out
  let voice = null;
  function pickVoice() {
    const vs = speechSynthesis.getVoices();
    voice = vs.find((v) => /en[-_]CA/i.test(v.lang)) || vs.find((v) => /Samantha|Google US English|Karen|Daniel/i.test(v.name)) || vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function primeSpeech() { // iPad only lets speech start from a tap; a silent line on the first tap unlocks it
    if (!("speechSynthesis" in window) || primeSpeech.done) return;
    const u = new SpeechSynthesisUtterance(" "); u.volume = 0; speechSynthesis.speak(u); primeSpeech.done = true;
  }
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    stopSpeech();
    const u = new SpeechSynthesisUtterance(text); if (voice) u.voice = voice; u.rate = 1; u.pitch = 1;
    speechSynthesis.speak(u);
  }
  function stopSpeech() { if ("speechSynthesis" in window) speechSynthesis.cancel(); }

  // ---------------------------------------------------------------- close
  let closeTimer;
  function armClose() { clearTimeout(closeTimer); closeTimer = setTimeout(() => current === "close" && show("attract"), 15000); }
  $("restart").addEventListener("click", () => show("attract"));

  // ---------------------------------------------------------------- offline
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/demo/sw.js", { scope: "/demo" }).then(() => navigator.serviceWorker.ready).then(() => { $("offline-badge").hidden = false; }).catch(() => {});
  }
  // keep the screen awake where the browser allows it
  async function wake() { try { await navigator.wakeLock?.request("screen"); } catch {} }
  wake(); document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && wake());
})();
