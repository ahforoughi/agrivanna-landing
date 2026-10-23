/* Agrivanna booth demo: an attract video, then one window with five features
   (voice, pasture, herd, AI assistant, virtual fencing) picked from the dock.
   Works with no network: every file is cached by sw.js, all data is in data.js,
   and nothing calls any live service. */
(() => {
  const D = window.DEMO_DATA;
  const $ = (id) => document.getElementById(id);
  const IDLE_MS = 30000;
  const ORDER = ["voice", "pasture", "herd", "ai", "fence"];
  const STATUS_CLASS = { Ready: "ready", Watch: "watch", Rest: "rest" };
  const SVGNS = "http://www.w3.org/2000/svg";
  let feat = null;

  // ================================================================ screens
  function toAttract() {
    clearAll();
    $("hub").hidden = true; $("qr-sheet").hidden = true;
    $("attract").classList.add("is-on");
    const v = $("attract-video"); v.currentTime = 0; v.play().catch(() => {});
    feat = null;
  }
  function toHub(first = "voice") {
    $("attract").classList.remove("is-on"); $("attract-video").pause();
    $("hub").hidden = false;
    go(first);
  }
  function go(name) {
    if (!ORDER.includes(name)) return;
    if (feat === name) return;
    leave(feat);
    feat = name;
    document.querySelectorAll(".feat").forEach((f) => f.classList.toggle("is-on", f.dataset.feat === name));
    document.querySelectorAll(".dock button").forEach((b) => b.setAttribute("aria-current", String(b.dataset.go === name)));
    $("stage").scrollTop = 0;
    enter(name);
    armIdle();
  }
  function enter(name) {
    if (name === "voice") playVoice();
    if (name === "pasture" && !picked) setTimeout(() => feat === "pasture" && !picked && pick(D.herd.paddock), 1600);
    if (name === "ai") resetChat();
    if (name === "fence") startSteps();
  }
  function leave(name) {
    if (name === "voice") stopVoice();
    if (name === "pasture") resetMap();
    if (name === "fence") stopSteps();
    if (name === "ai") stopSpeech();
  }
  function clearAll() { ORDER.forEach(leave); stopSpeech(); }

  let idle;
  function armIdle() { clearTimeout(idle); if (!$("hub").hidden) idle = setTimeout(toAttract, IDLE_MS); }
  ["pointerdown", "keydown", "wheel"].forEach((e) => window.addEventListener(e, armIdle, { passive: true }));

  $("attract").addEventListener("click", () => { primeSpeech(); toHub("voice"); });
  $("home").addEventListener("click", toAttract);
  document.querySelectorAll(".dock button").forEach((b) => b.addEventListener("click", () => { primeSpeech(); go(b.dataset.go); }));

  // swipe left / right between features (tablets), arrow keys (laptops)
  let sx = null, sy = null;
  $("stage").addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  $("stage").addEventListener("touchend", (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
    if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 1.6 && !e.target.closest(".map-wrap")) step(dx < 0 ? 1 : -1);
  }, { passive: true });
  window.addEventListener("keydown", (e) => {
    if ($("hub").hidden) { if (e.key === "Enter" || e.key === " ") toHub(); return; }
    if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); if (e.key === "Escape") $("qr-sheet").hidden = true;
  });
  function step(d) { const i = ORDER.indexOf(feat); go(ORDER[(i + d + ORDER.length) % ORDER.length]); }

  // early access sheet
  $("open-qr").addEventListener("click", () => ($("qr-sheet").hidden = false));
  $("close-qr").addEventListener("click", () => ($("qr-sheet").hidden = true));
  $("qr-sheet").addEventListener("click", (e) => { if (e.target.id === "qr-sheet") $("qr-sheet").hidden = true; });

  // ================================================================ 1. voice
  const DICTATION = "Cow 418, the black baldy heifer. Calved around five this morning in the north pasture. Bull calf, no help needed. Gave him yellow tag 418 and a shot of vitamin E and selenium. Guessing he's about 85 pounds.";
  const RECORDS = [
    ["Calving", "Cow 418", "Bull calf, no help needed"],
    ["Tag", "Calf 418", "Yellow tag 418"],
    ["Treatment", "Calf 418", "Vitamin E and selenium"],
    ["Weight", "Calf 418", "About 85 lb"],
  ];
  let vTimers = [];
  function stopVoice() { vTimers.forEach(clearTimeout); vTimers = []; }
  function playVoice() {
    stopVoice();
    const out = $("dictation"), listen = $("listen"), conf = $("confirm");
    out.textContent = ""; listen.classList.remove("done"); conf.hidden = true; conf.classList.remove("saved");
    $("save-records").textContent = `Save ${RECORDS.length} records`;
    const words = DICTATION.split(" "); let i = 0;
    const tick = () => {
      out.textContent = words.slice(0, ++i).join(" ");
      if (i < words.length) vTimers.push(setTimeout(tick, 115 + (words[i - 1].endsWith(".") ? 220 : 0)));
      else vTimers.push(setTimeout(showRecords, 700));
    };
    vTimers.push(setTimeout(tick, 500));
  }
  function showRecords() {
    $("listen").classList.add("done");
    const ul = $("records");
    ul.innerHTML = RECORDS.map(([k, who, what], n) =>
      `<li style="animation-delay:${n * 110}ms"><span class="k">${k}</span><div><b>${who}</b><small>${what}</small></div><span class="ok"><svg class="ic" style="width:13px;height:13px"><use href="#i-check"/></svg></span></li>`).join("");
    $("rec-count").textContent = RECORDS.length;
    $("confirm").hidden = false;
  }
  $("save-records").addEventListener("click", () => {
    $("confirm").classList.add("saved");
    $("save-records").innerHTML = `<svg class="ic"><use href="#i-check"/></svg> Saved to Cow 418's record`;
  });
  $("voice-replay").addEventListener("click", playVoice);

  // ================================================================ 2. pasture
  const { w, h } = D.map;
  document.documentElement.style.setProperty("--map-ar", (w / h).toFixed(4));
  $("map-img").src = D.map.src;
  const svg = $("map-svg");
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`); svg.setAttribute("preserveAspectRatio", "none");
  const path = (rings) => rings.map((r) => "M" + r.map((p) => p.join(",")).join("L") + "Z").join("");
  const dim = document.createElementNS(SVGNS, "path"); dim.setAttribute("class", "dim"); dim.setAttribute("fill-rule", "evenodd"); dim.style.opacity = 0;
  const sel = document.createElementNS(SVGNS, "path"); sel.setAttribute("class", "sel");
  for (const [L, p] of Object.entries(D.paddocks)) {
    const hit = document.createElementNS(SVGNS, "path");
    hit.setAttribute("d", path(p.rings)); hit.setAttribute("class", "hit");
    hit.addEventListener("click", () => pick(L));
    svg.appendChild(hit);
  }
  svg.appendChild(dim); svg.appendChild(sel);
  const NUDGE = { C: [-70, 40], A: [40, -20] };
  const pills = {};
  for (const [L, p] of Object.entries(D.paddocks)) {
    const b = document.createElement("button");
    b.className = "pill " + STATUS_CLASS[p.status];
    b.innerHTML = `<i></i><b>${L}</b><em>·</em>${p.prs}`;
    const [nx, ny] = NUDGE[L] || [0, 0];
    b.style.left = ((p.label[0] + nx) / w * 100) + "%"; b.style.top = ((p.label[1] + ny) / h * 100) + "%";
    b.setAttribute("aria-label", `Paddock ${L}, ${p.status}, score ${p.prs}`);
    b.addEventListener("click", () => pick(L));
    $("map-pills").appendChild(b); pills[L] = b;
  }
  const hp = D.paddocks[D.herd.paddock];
  const tag = document.createElement("div");
  tag.className = "herd-tag"; tag.textContent = `${D.herd.head} head · ${D.herd.days} days`;
  tag.style.left = (hp.label[0] / w * 100) + "%"; tag.style.top = `calc(${hp.label[1] / h * 100}% + 4%)`;
  $("map-pills").appendChild(tag);

  let picked = null;
  function pick(L) {
    picked = L;
    const p = D.paddocks[L];
    Object.entries(pills).forEach(([k, b]) => b.classList.toggle("on", k === L));
    dim.setAttribute("d", `M0,0H${w}V${h}H0Z` + path(p.rings)); dim.style.opacity = 1; sel.setAttribute("d", path(p.rings));
    $("pasture-intro").hidden = true;
    const card = $("pasture-card"); card.hidden = false; card.style.animation = "none"; card.offsetWidth; card.style.animation = "";
    $("card-eyebrow").textContent = `Paddock ${L}`;
    $("card-chip").className = "chip chip-" + STATUS_CLASS[p.status]; $("card-chip").textContent = p.status;
    $("card-acres").textContent = p.acres;
    $("card-reasons").innerHTML = p.reasons.map((r) => `<li>${r}</li>`).join("");
    countUp($("card-score"), p.prs);
    drawSpark(p.history);
  }
  function resetMap() {
    picked = null;
    Object.values(pills).forEach((b) => b.classList.remove("on"));
    dim.style.opacity = 0; sel.setAttribute("d", "");
    $("pasture-intro").hidden = false; $("pasture-card").hidden = true;
  }
  function countUp(el, to) {
    const t0 = performance.now();
    const f = (t) => { const k = Math.min(1, (t - t0) / 700); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }
  function drawSpark(pts) {
    const s = $("spark"); s.innerHTML = "";
    const past = pts.filter(([y]) => y < 2026).map(([, v]) => v);
    const normal = past.reduce((a, b) => a + b, 0) / past.length;
    const now = pts[pts.length - 1][1];
    const diff = Math.round((now / normal - 1) * 100);
    $("spark-diff").textContent = diff >= 0 ? `2026: ${diff}% above normal` : `2026: ${-diff}% below normal`;
    const vals = pts.map(([, v]) => v).concat(normal);
    const lo = Math.min(...vals) - 0.02, hi = Math.max(...vals) + 0.02;
    const X = (y) => 4 + (y - 2016) / 10 * 304, Y = (v) => 74 - (v - lo) / (hi - lo) * 66;
    const el = (t, a) => { const e = document.createElementNS(SVGNS, t); for (const k in a) e.setAttribute(k, a[k]); s.appendChild(e); return e; };
    el("line", { x1: 0, x2: 320, y1: Y(normal), y2: Y(normal), stroke: "#8C8C85", "stroke-width": 1.2, "stroke-dasharray": "4 4", "vector-effect": "non-scaling-stroke" });
    const d = pts.map(([y, v], i) => (i ? "L" : "M") + X(y).toFixed(1) + "," + Y(v).toFixed(1)).join("");
    el("path", { d: d + `L${X(2026)},80L${X(2016)},80Z`, fill: "rgba(166,255,61,0.1)" });
    const line = el("path", { d, fill: "none", stroke: "#A6FF3D", "stroke-width": 2.5, "stroke-linejoin": "round", "vector-effect": "non-scaling-stroke" });
    const len = 400; line.style.strokeDasharray = len; line.style.strokeDashoffset = len; line.getBoundingClientRect();
    line.style.transition = "stroke-dashoffset 1.2s cubic-bezier(.22,1,.36,1)"; line.style.strokeDashoffset = 0;
    el("circle", { cx: X(2026), cy: Y(now), r: 4.5, fill: "#A6FF3D", stroke: "#14161A", "stroke-width": 2 });
  }

  // ================================================================ 4. AI assistant
  const A = D.paddocks;
  const QA = [
    { q: "Should I move my cows this week?",
      a: `Yes. Paddock E is grazed down, <strong>PRS ${A.E.prs}</strong>. Move the herd next door to Paddock A. It scores <strong>${A.A.prs}</strong> and has rested.`,
      keys: /move|cow|herd|week|shift/i },
    { q: "Which paddock is ready next?",
      a: `Paddock A, ready at <strong>${A.A.prs}</strong>. It's had the most rest. Paddock B is next at <strong>${A.B.prs}</strong>.`,
      keys: /ready|next|best|which|graze/i },
    { q: "How is Paddock E doing?",
      a: `${D.herd.head} head have been on Paddock E for <strong>${D.herd.days} days</strong>. It's grazed down to ${A.E.prs}, so it needs rest. The grass had a good year though, greener than normal.`,
      keys: /paddock e|\be\b|doing|how is|status/i },
  ];
  const plain = (html) => html.replace(/<[^>]+>/g, "");
  function resetChat() {
    stopSpeech();
    const c = $("chat");
    c.innerHTML = `<div class="msg agv"><img src="assets/icon-192.png" alt=""><p>Hi. I know your paddocks, herds and records. What do you want to know?</p></div>`;
    $("asks").innerHTML = QA.map((x, i) => `<button class="ask-chip" data-i="${i}">${x.q}<svg class="ic"><use href="#i-arrow"/></svg></button>`).join("");
    $("asks").querySelectorAll(".ask-chip").forEach((b) => b.addEventListener("click", () => ask(QA[+b.dataset.i], b)));
  }
  let busy = false;
  function ask(item, chip, said) {
    if (busy) return; busy = true;
    if (chip) chip.classList.add("used");
    const c = $("chat");
    c.insertAdjacentHTML("beforeend", `<div class="msg you"><p>${said || item.q}</p></div>`);
    c.insertAdjacentHTML("beforeend", `<div class="msg agv" id="typing"><img src="assets/icon-192.png" alt=""><p class="typing"><i></i><i></i><i></i></p></div>`);
    c.scrollTop = c.scrollHeight;
    setTimeout(() => {
      $("typing").remove();
      c.insertAdjacentHTML("beforeend", `<div class="msg agv"><img src="assets/icon-192.png" alt=""><p>${item.a}</p></div>`);
      c.scrollTop = c.scrollHeight;
      speak(plain(item.a));
      busy = false;
    }, 900);
  }
  document.querySelectorAll(".device-toggle button").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll(".device-toggle button").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
    $("chat-frame").className = "chat-frame " + (b.dataset.device === "web" ? "web-mode" : "phone-mode");
  }));
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (Rec) { $("mic").hidden = false; $("mic-hint").hidden = false; }
  let rec = null;
  $("mic").addEventListener("click", () => {
    primeSpeech();
    if (rec) { try { rec.abort(); } catch {} rec = null; }
    let done = false;
    const finish = (text) => {
      if (done) return; done = true; $("mic").classList.remove("listening");
      const item = (text && QA.find((x) => x.keys.test(text))) || QA[0];
      ask(item, null, text ? text.charAt(0).toUpperCase() + text.slice(1) : null);
    };
    try {
      rec = new Rec(); rec.lang = "en-CA"; rec.interimResults = false; rec.maxAlternatives = 1;
      rec.onresult = (e) => finish(e.results[0][0].transcript);
      rec.onerror = () => finish(null);          // no network, no permission, nothing heard: still answer
      rec.onend = () => finish(null);
      $("mic").classList.add("listening"); rec.start();
      setTimeout(() => { if (!done) { try { rec.stop(); } catch {} } }, 7000);
    } catch { finish(null); }
  });

  // ================================================================ 5. virtual fencing
  let stepTimer;
  function startSteps() {
    stopSteps(); let i = 0;
    const lis = [...document.querySelectorAll("#fence-steps li")];
    const show = () => lis.forEach((li, n) => li.classList.toggle("on", n === i));
    show(); stepTimer = setInterval(() => { i = (i + 1) % lis.length; show(); }, 2600);
    lis.forEach((li, n) => (li.onclick = () => { i = n; show(); }));
  }
  function stopSteps() { clearInterval(stepTimer); }

  // ================================================================ speech out
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
    stopSpeech(); const u = new SpeechSynthesisUtterance(text); if (voice) u.voice = voice; speechSynthesis.speak(u);
  }
  function stopSpeech() { if ("speechSynthesis" in window) speechSynthesis.cancel(); }

  // ================================================================ offline + awake
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/demo/sw.js", { scope: "/demo" }).then(() => navigator.serviceWorker.ready).then(() => ($("offline-badge").hidden = false)).catch(() => {});
  }
  async function wake() { try { await navigator.wakeLock?.request("screen"); } catch {} }
  wake(); document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && wake());
})();
