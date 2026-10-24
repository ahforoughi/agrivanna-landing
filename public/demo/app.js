/* Agrivanna booth demo: a home page about Agrivanna with a dock of five features
   (voice, pasture, herd, the AI assistant, virtual fencing), opened in any order.
   Each feature plays itself on a loop; nobody has to tap anything but the dock.
   Works with no network: every file is cached by sw.js, all data is in data.js,
   and nothing calls any live service. */
(() => {
  const D = window.DEMO_DATA;
  const $ = (id) => document.getElementById(id);
  const IDLE_MS = 180000; // back to the home page after 3 minutes untouched
  const ORDER = ["voice", "pasture", "herd", "ai", "fence"];
  const STATUS_CLASS = { Ready: "ready", Watch: "watch", Rest: "rest" };
  const SVGNS = "http://www.w3.org/2000/svg";
    let feat = null;

  // ================================================================ navigation
  function go(name) {
    if (feat === name) return;
    leave(feat);
    feat = name;
    document.querySelectorAll(".feat").forEach((f) => f.classList.toggle("is-on", f.dataset.feat === name));
    document.querySelectorAll(".dock button").forEach((b) => b.setAttribute("aria-current", String(b.dataset.go === name)));
    document.querySelector(".dock").classList.toggle("home-hint", name === "home");
    $("stage").scrollTop = 0;
    enter(name);
    armIdle();
  }
  function enter(name) {
    if (name === "home") { const v = $("home-video"); v.play().catch(() => {}); }
    const loop = { voice: voiceLoop, pasture: pastureLoop, herd: herdLoop, ai: aiLoop }[name];
    if (loop) loop(run).catch(() => {});
  }
  function leave(name) {
    run++; // stops whichever loop was playing
    if (name === "home") $("home-video").pause();
    if (name === "voice") resetVoice();
    if (name === "pasture") resetMap();
    if (name === "herd") resetHerd();
    if (name === "ai") resetAssistant();
  }
  // The loops: each waits with wait(ms, id) and stops as soon as the page changes.
  let run = 0;
  const wait = (ms, id) => new Promise((ok, stop) => setTimeout(() => (id === run ? ok() : stop("left")), ms));
  // a tap shown on screen, so people see what a rancher would press
  const tap = (el) => { if (!el) return; el.classList.remove("tapped"); el.offsetWidth; el.classList.add("tapped"); };
  let idle;
  function armIdle() { clearTimeout(idle); idle = setTimeout(() => { $("qr-sheet").hidden = true; go("home"); }, IDLE_MS); }
  ["pointerdown", "keydown", "wheel"].forEach((e) => window.addEventListener(e, armIdle, { passive: true }));

  $("home").addEventListener("click", () => go("home"));
  document.querySelectorAll(".dock button").forEach((b) => b.addEventListener("click", () => { primeSpeech(); go(b.dataset.go); }));
  let sx = null, sy = null;
  $("stage").addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  $("stage").addEventListener("touchend", (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
    if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 1.6 && !e.target.closest(".map-wrap, .appwin, .ios, .wa")) step(dx < 0 ? 1 : -1);
  }, { passive: true });
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); if (e.key === "Escape") $("qr-sheet").hidden = true;
  });
  function step(d) { const i = ORDER.indexOf(feat); go(ORDER[(i + d + ORDER.length) % ORDER.length] ); }
  $("open-qr").addEventListener("click", () => ($("qr-sheet").hidden = false));
  $("close-qr").addEventListener("click", () => ($("qr-sheet").hidden = true));
  $("qr-sheet").addEventListener("click", (e) => { if (e.target.id === "qr-sheet") $("qr-sheet").hidden = true; });

  // ================================================================ 1. voice
  // Plays a calving note and a herd move, over and over: words appear as they are
  // said, the records are pulled out, then saved.
  const NOTES = [
    { title: "Calving at the chute", text: "Cow 418 calved this morning in the north pasture. Bull calf, no help needed. Tagged him yellow 418, about 85 pounds." },
    { title: "Moving a herd", text: "Moved the 88 yearling steers from North Meadow to the south pasture. Set out two salt blocks by the dugout." },
  ];
  const bars = $("bars");
  // a calm wave: each bar rises and falls on its own slow beat (CSS), no jitter
  bars.innerHTML = Array.from({ length: 36 }, (_, i) => `<i style="--i:${i};--a:${(0.45 + 0.55 * Math.abs(Math.sin(i * 0.55))).toFixed(2)}"></i>`).join("");
  let clock = null, typeTimers = [];
  function setLive(on, status) {
    $("recorder").classList.toggle("live", on);
    if (status != null) $("mic-status").innerHTML = status;
    clearInterval(clock);
    if (on) { const t0 = Date.now(); const tick = () => { const s = Math.floor((Date.now() - t0) / 1000); $("rec-time").textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; }; tick(); clock = setInterval(tick, 500); }
  }
  function resetVoice() {
    typeTimers.forEach(clearTimeout); typeTimers = [];
    setLive(false, "");
    $("rec-time").textContent = "0:00"; $("note-chip").hidden = true;
    $("transcript").className = "transcript";
    $("transcript").innerHTML = `<span class="placeholder">Your words show up here as you speak.</span>`;
    $("extract").hidden = true;
  }
  // types a note word by word as if it were being said
  function playText(text, title) {
    return new Promise((done) => {
      $("extract").hidden = true;
      const t = $("transcript"); t.className = "transcript";
      setLive(true, "<b>Listening</b>");
      $("note-chip").textContent = title; $("note-chip").hidden = false;
      const words = text.split(" "); let i = 0;
      const tick = () => {
        t.innerHTML = esc(words.slice(0, ++i).join(" ")) + '<span class="caret"></span>';
        if (i < words.length) typeTimers.push(setTimeout(tick, 270 + (/[.,]$/.test(words[i - 1]) ? 420 : 0)));
        else typeTimers.push(setTimeout(() => { finish(text); done(); }, 500));
      };
      typeTimers.push(setTimeout(tick, 400));
    });
  }
  function finish(text) {
    setLive(false, "<b>Got it.</b> Check the records, then save");
    const { recs, marks } = extract(text);
    const t = $("transcript");
    t.innerHTML = markUp(text, marks);
    requestAnimationFrame(() => t.classList.add("marked"));
    $("ex-count").textContent = `${recs.length} record${recs.length === 1 ? "" : "s"}`;
    $("ex-list").innerHTML = recs.map((r, i) => `<li style="animation-delay:${200 + i * 120}ms"><span class="k k-${r.k}">${r.label}</span><div><b>${esc(r.who)}</b><small>${esc(r.what)}</small></div><span class="ok"><svg class="ic"><use href="#i-check"/></svg></span></li>`).join("");
    $("ex-save").textContent = `Save ${recs.length} record${recs.length === 1 ? "" : "s"}`;
    $("extract").classList.remove("saved"); $("extract").hidden = false;
  }
  function save() {
    const n = $("ex-list").children.length;
    tap($("ex-save"));
    $("extract").classList.add("saved");
    $("ex-save").innerHTML = `<svg class="ic"><use href="#i-check"/></svg> ${n} saved on the phone. Syncs with signal`;
    $("mic-status").innerHTML = "<b>Saved.</b> Syncs when there's signal";
  }
  async function voiceLoop(id) {
    resetVoice();
    for (let k = 0; ; k = (k + 1) % NOTES.length) {
      await wait(1800, id);
      tap($("big-mic"));
      await playText(NOTES[k].text, NOTES[k].title);
      if (id !== run) return;
      await wait(6000, id);
      save();
      await wait(6000, id);
      resetVoice();
    }
  }

  // A small rule based reader for ranch notes: finds the animal, calving, tags,
  // weights, treatments, herd moves and salt, and marks where each came from.
  function extract(text) {
    const recs = [], marks = [];
    const find = (re, cls) => { const m = re.exec(text); if (m) marks.push([m.index, m.index + m[0].length, cls]); return m; };
    const NUM = { a: 1, one: 1, two: 2, three: 3, four: 4, five: 5 };
    const animal = find(/\b(cow|calf|heifer|steer|bull)\s+(?:number\s+)?(\d{1,5})\b/i, "m-animal");
    const who = animal ? `${cap(animal[1].toLowerCase())} ${animal[2]}` : "";
    const calving = find(/\bcalv(?:ed|ing)\b/i, "m-event");
    const sex = find(/\b(bull|heifer)\s+calf\b/i, "m-event");
    const assist = find(/\b(no help needed|unassisted|had to pull|pulled)\b/i, "m-event");
    if (calving) recs.push({ k: "event", label: "Calving", who: who || "Cow", what: [sex ? cap(sex[0].toLowerCase()) : "Calf", assist ? assist[0].toLowerCase() : ""].filter(Boolean).join(", ") });
    const calfOf = calving && who ? `Calf of ${who}` : who;
    const tag = find(/\btag(?:ged)?\b(?:\s+(?:him|her|it|them))?(?:\s+(yellow|green|red|blue|white|orange|pink))?\s+(\d{1,5})\b/i, "m-tag");
    if (tag) recs.push({ k: "tag", label: "Tag", who: calfOf || "Animal", what: `${tag[1] ? cap(tag[1].toLowerCase()) + " tag" : "Tag"} ${tag[2]}` });
    const wt = find(/\b(\d{2,4})\s*(pounds|lbs?|lb)\b/i, "m-weight");
    if (wt) recs.push({ k: "weight", label: "Weight", who: calfOf || "Animal", what: `${wt[1]} lb` });
    const cond = find(/\b(pinkeye|foot rot|scours|pneumonia|lameness|lame|bloat)\b/i, "m-treat");
    const dose = find(/\b(\d+(?:\.\d+)?)\s*(cc|ml)\s+of\s+([a-z0-9 ]+?)(?=\s+and\b|[.,;]|$)/i, "m-treat");
    const pen = find(/\b(hospital|sick) pen\b/i, "m-move");
    if (cond || dose) recs.push({ k: "treat", label: "Treatment", who: who || "Animal", what: [cond ? cap(cond[1].toLowerCase()) : "", dose ? `${dose[1]} ${dose[2].toLowerCase()} ${dose[3].trim()}` : ""].filter(Boolean).join(", ") + (dose ? ". Withdrawal logged" : "") });
    if (pen) recs.push({ k: "move", label: "Moved", who: who || "Animal", what: `To the ${pen[0].toLowerCase()}` });
    const mv = find(/\bmoved?\s+(?:the\s+)?(?:(\d+)\s+)?([a-z ]+?)\s+from\s+(?:the\s+)?([a-z ]+?)\s+to\s+(?:the\s+)?([a-z ]+?)(?=[.,;]|$)/i, "m-move");
    if (mv) recs.push({ k: "move", label: "Herd move", who: `${mv[1] ? mv[1] + " " : ""}${mv[2].trim()}`, what: `${cap(mv[3].trim())} to ${mv[4].trim()}` });
    const salt = find(/\b(?:(\d+|a|one|two|three|four|five)\s+)?(salt|mineral)(?:\s+(blocks?|tubs?|licks?))?(?:\s+by\s+the\s+([a-z]+))?/i, "m-event");
    if (salt) { const n = salt[1] ? (NUM[salt[1].toLowerCase()] || salt[1]) : ""; recs.push({ k: "event", label: "Salt and mineral", who: `${n ? n + " " : ""}${salt[2].toLowerCase()} ${salt[3] || "set out"}`.trim(), what: salt[4] ? `By the ${salt[4]}` : "Set out today" }); }
    if (!recs.length) recs.push({ k: "note", label: "Note", who: "Ranch note", what: text.length > 70 ? text.slice(0, 68) + "…" : text });
    return { recs, marks };
  }
  function markUp(text, marks) {
    marks = marks.sort((a, b) => a[0] - b[0]).filter((m, i, arr) => !i || m[0] >= arr[i - 1][1]);
    let out = "", pos = 0;
    for (const [s, e, c] of marks) { out += esc(text.slice(pos, s)) + `<mark class="${c}">${esc(text.slice(s, e))}</mark>`; pos = e; }
    return out + esc(text.slice(pos));
  }
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  // ================================================================ 2. pasture
  const { w, h } = D.map;
  document.documentElement.style.setProperty("--map-ar", (w / h).toFixed(4));
  $("map-img").src = D.map.src;
  const svg = $("map-svg");
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`); svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
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
  const htag = document.createElement("div");
  htag.className = "herd-tag"; htag.textContent = `${D.herd.head} head · ${D.herd.days} days`;
  htag.style.left = (hp.label[0] / w * 100) + "%"; htag.style.top = `calc(${hp.label[1] / h * 100}% + 4%)`;
  $("map-pills").appendChild(htag);
  let picked = null;
  function pick(L) {
    picked = L;
    const p = D.paddocks[L];
    Object.entries(pills).forEach(([k, b]) => b.classList.toggle("on", k === L));
    dim.setAttribute("d", `M0,0H${w}V${h}H0Z` + path(p.rings)); dim.style.opacity = 1; sel.setAttribute("d", path(p.rings));
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
    $("pasture-card").hidden = true;
  }
  // every paddock in turn, starting with E where the herd is
  async function pastureLoop(id) {
    for (;;) {
      resetMap();
      await wait(5000, id);
      for (const L of ["E", "A", "B", "D", "C", "F"]) { tap(pills[L]); pick(L); await wait(10000, id); }
    }
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
    line.style.strokeDasharray = 400; line.style.strokeDashoffset = 400; line.getBoundingClientRect();
    line.style.transition = "stroke-dashoffset 1.2s cubic-bezier(.22,1,.36,1)"; line.style.strokeDashoffset = 0;
    el("circle", { cx: X(2026), cy: Y(now), r: 4.5, fill: "#A6FF3D", stroke: "#14161A", "stroke-width": 2 });
  }

  // ================================================================ 3. herd management: the web app, played by a finger
  // A copy of the web app's Herds and Animals screens (agrivanna-software apps/web:
  // HerdsPage, AnimalsPage, QuickAddAnimal, AnimalPanel, TreatmentForm,
  // AnimalProfilePage). The loop walks the real flows: look at the herds, add an
  // animal, record a treatment, open its record.
  const HERDS = [
    { name: "Cow calf pairs", cls: "Cow", head: D.herd.head, avg: "1,349 lb", gain: "0.9 lb/d", weighed: 12, tagged: 11, where: `On Paddock E for ${D.herd.days} days.` },
    { name: "Backgrounding steers", cls: "Steer", head: 88, avg: "760 lb", gain: "2.1 lb/d", weighed: 88, tagged: 88, where: null },
    { name: "Replacement heifers", cls: "Heifer", head: 24, avg: "890 lb", gain: "1.6 lb/d", weighed: 24, tagged: 24, where: null },
  ];
  const total = HERDS.reduce((n, x) => n + x.head, 0);
  const linked = HERDS.reduce((n, x) => n + x.tagged, 0);
  const tagFmt = (t) => `124 000 ${t}`;
  const ANIMALS = [
    { tag: "100000418", vis: "418", cls: "Cow", age: "6 yr", breed: "Black Baldy", herd: 0, status: "Active" },
    { tag: "100000405", vis: "R05", cls: "Cow", age: "5 yr", breed: "Angus", herd: 0, status: "Active" },
    { tag: "100000061", vis: "61", cls: "Yearling steer", age: "19 mo", breed: "Angus cross", herd: 1, status: "Active", star: true },
    { tag: "100000072", vis: "72", cls: "Yearling steer", age: "19 mo", breed: "Angus", herd: 1, status: "Active" },
    { tag: "100000201", vis: "H01", cls: "Yearling heifer", age: "17 mo", breed: "Black Baldy", herd: 2, status: "Active" },
    { tag: "100000441", vis: "P41", cls: "Cow", age: "8 yr", breed: "Red Angus", herd: 0, status: "Withdrawal" },
    { tag: "100000202", vis: "H02", cls: "Yearling heifer", age: "18 mo", breed: "Angus", herd: 2, status: "Active" },
  ];
  const PRODUCTS = [["Draxxin Injectable Solution", 44], ["Micotil 300", 28], ["Baytril 100", 36], ["Liquamycin LA-200", 48]];
  const NEW = { tag: "100000512", vis: "Y52", cls: "Heifer calf", age: "6 mo", breed: "Black Angus", herd: 0 };
  const day = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d; };
  const fmtDay = (d, y) => d.toLocaleDateString("en-CA", { day: "numeric", month: "short", ...(y ? { year: "numeric" } : {}) });
  const g = (n, c = "") => `<svg class="gi ${c}"><use href="#g-${n}"/></svg>`;
  const hc = (k) => $("happ").querySelector(k);

  function shell() {
    const nav = [["dashboard", "Dashboard"], ["cow", "Animals"], ["layers", "Herds"], ["map", "Pasture"], ["file-up", "Exports"], ["settings", "Settings"]];
    $("happ").innerHTML = `
      <aside class="h-side">
        <div class="h-brand"><img src="assets/logo.png" alt=""><span>${g("panel-close")}</span></div>
        <span class="h-rec">${g("plus")} Record</span>
        <nav>${nav.map(([i, l]) => `<span class="h-nav" data-nav="${l}">${g(i)} ${l}</span>`).join("")}</nav>
        <div class="h-foot"><span>${g("moon")} Dark mode</span><i class="h-toggle"></i></div>
      </aside>
      <main class="h-main">
        <section class="h-view" data-view="herds"></section>
        <section class="h-view" data-view="animals"></section>
        <section class="h-view" data-view="profile"></section>
      </main>
      <div class="h-scrim" hidden></div>
      <div class="h-modal" hidden></div>
      <div class="h-toast" hidden></div>
      <div class="h-finger"></div>`;
  }
  const head = (eyebrow, title, btns) => `<header class="h-head"><div><p class="h-eye">${eyebrow}</p><h3>${title}</h3></div><div class="h-btns">${btns.map(([i, l, id]) => `<span class="h-btn" ${id ? `id="${id}"` : ""}>${g(i)} ${l}</span>`).join("")}</div></header>`;

  // ---- Herds
  function herdsView(sel) {
    const h = HERDS[sel];
    hc('[data-view="herds"]').innerHTML = head(`3 herds · ${total} head`, "Herds", [["download", "Export CSV"], ["plus", "New herd"]]) + `
      <div class="h-stats four">
        <div><small>Herds</small><b>3</b></div><div><small>Linked IDs</small><b>${linked}</b></div>
        <div><small>Total head</small><b>${total}</b><em>${total - linked} untagged</em></div><div><small>Weighed</small><b>${Math.round(HERDS.reduce((n, x) => n + x.weighed, 0) / total * 100)}<i>%</i></b><em>Rest carry an entered estimate</em></div>
      </div>
      <div class="h-cols">
        <div class="h-card h-list">
          <div class="h-search">${g("search")} Search herds</div>
          <div class="h-listmeta"><span><i class="h-box"></i> Show archived</span><span>3 herds</span></div>
          ${HERDS.map((x, i) => `<div class="h-herd ${i === sel ? "on" : ""}" data-h="${i}"><div><b>${x.name}</b> <small>${x.cls} · ${x.avg} · ${x.weighed === x.head ? "all weighed" : `${x.weighed} of ${x.head} weighed`}</small><span class="h-bar"><i style="width:${Math.round(x.tagged / x.head * 100)}%"></i></span></div><span class="h-hd"><b>${x.head}</b> head</span></div>`).join("")}
        </div>
        <div class="h-card h-detail">
          <h4>${h.name}</h4>
          <p class="h-sub">${h.cls} · ${h.tagged} linked IDs${h.head > h.tagged ? `, ${h.head - h.tagged} entered as a count` : ""}</p>
          <div class="h-btnrow"><span class="h-btn">${g("pencil")} Edit</span><span class="h-btn">${g("plus")} Allocate animals</span><span class="h-btn sq">${g("note")}</span></div>
          <div class="h-tiles"><div><small>Head</small><b>${h.head}</b></div><div><small>Average weight</small><b>${h.avg}</b><em>${h.weighed} of ${h.head} weighed</em></div><div><small>Daily gain</small><b>${h.gain}</b></div></div>
          <div class="h-tagging"><span>Tagging</span><span>${h.tagged} of ${h.head} tagged</span></div>
          <span class="h-bar big"><i style="width:${Math.round(h.tagged / h.head * 100)}%"></i></span>
          <div class="h-where ${h.where ? "on" : ""}">${g(h.where ? "pin" : "map")}<span>${h.where || "Not on a pasture. Move it from the pasture map when it goes out."}</span><b>Open map</b></div>
        </div>
      </div>`;
  }

  // ---- Animals
  let rows, chosen, counts;
  function chip(st) { return st === "Withdrawal" ? `<span class="h-chip rest">◆ Withdrawal</span>` : `<span class="h-chip ready"><i></i>Active</span>`; }
  function animalsView() {
    hc('[data-view="animals"]').innerHTML = head(`${counts.all} head on record`, "Animals", [["file-up", "Import CSV"], ["plus", "Add animal", "h-add"]]) + `
      <div class="h-stats four filt">
        <div class="on"><small>All animals</small><b data-c="all">${counts.all}</b></div><div><small><i class="dot g"></i>Active</small><b class="gn" data-c="active">${counts.active}</b></div>
        <div><small class="rd">◆ Withdrawal</small><b class="rd" data-c="wd">${counts.wd}</b></div><div><small>Archived</small><b>0</b></div>
      </div>
      <div class="h-cols wide">
        <div class="h-card h-tablecard">
          <div class="h-filters"><div class="h-search">${g("search")} Search by tag</div><span class="h-sel">All statuses ${g("chevron-down")}</span><span class="h-sel">Newest added ${g("chevron-down")}</span></div>
          <p class="h-note">${counts.all} animals on record. Archived animals are counted separately.</p>
          <table class="h-table"><thead><tr><th>CCIA tag</th><th>Class · age</th><th>Herd</th><th>Status</th></tr></thead><tbody></tbody></table>
        </div>
        <div class="h-card h-panel"></div>
      </div>`;
    drawRows(); drawPanel();
  }
  function drawRows() {
    hc(".h-table tbody").innerHTML = rows.map((a, i) => `<tr data-r="${i}" class="${a === chosen ? "on" : ""} ${a.fresh ? "fresh" : ""}"><td><b>${tagFmt(a.tag)}</b><small>Visual ${a.vis}</small></td><td>${a.cls} · ${a.age}</td><td>${HERDS[a.herd].name}</td><td>${chip(a.status)}</td></tr>`).join("");
  }
  function drawPanel(form) {
    const p = hc(".h-panel");
    if (!chosen) { p.innerHTML = `<b class="h-empty-t">No animal selected</b><p class="h-empty">Pick a row to see its withdrawal, last weight and notes, and to record a treatment or a weight.</p>`; p.classList.remove("live"); return; }
    const a = chosen;
    p.classList.add("live");
    p.innerHTML = `<div class="h-ptop"><b>${tagFmt(a.tag)}</b><span class="h-btn sq">${g("note")}</span></div>
      <p class="h-sub">${a.cls} · ${a.age} · ${a.breed} · visual ${a.vis}</p>
      ${a.until ? `<div class="h-ship">${g("ban")} Not safe to ship until ${fmtDay(a.until)}</div>` : ""}
      <dl class="h-dl">${form ? "" : `<dt>Last weight</dt><dd>${a.weight || "Not weighed yet"}</dd><dt>Daily gain</dt><dd>${a.gainv || "—"}</dd>`}<dt>Herd</dt><dd><b>${HERDS[a.herd].name}</b></dd></dl>
      ${form || `<div class="h-acts"><span class="h-btn" id="h-treat">${g("pill")} Record treatment</span><span class="h-btn">${g("weigh")} Record weight</span></div>`}
      <div class="h-open" id="h-open">Open full record ${g("arrow-right")}</div>`;
  }
  function treatForm(st) {
    return `<div class="h-form">
      <b>Record treatment</b>
      <label>Product</label><div class="h-in ${st.focus === "p" ? "focus" : ""}" id="h-prod">${st.prod || `<span class="ph">Search products, active ingredient, or DIN</span>`}</div>
      ${st.list ? `<div class="h-drop">${PRODUCTS.map(([n, d]) => `<div data-p="${n}" class="${n === st.pick ? "hi" : ""}"><span>${n}</span><small>${d}d withdrawal</small></div>`).join("")}</div>` : ""}
      <div class="h-two"><div><label>Dose</label><div class="h-in ${st.focus === "d" ? "focus" : ""}" id="h-dose">${st.dose || `<span class="ph">e.g. 6 mL</span>`}</div></div>
      <div><label>Withdrawal</label><div class="h-in soft">${st.wd || `<span class="ph">From product</span>`}</div></div></div>
      <label>Given</label><div class="h-in soft">${fmtDay(day(0), true)}</div>
      <p class="h-hint">The withdrawal comes from the product you pick.</p>
      <div class="h-formbtns"><span class="h-link">Cancel</span><span class="h-btn solid ${st.ready ? "" : "off"}" id="h-save">Record treatment</span></div>
    </div>`;
  }

  // ---- Add animal (QuickAddAnimal)
  function addModal(st) {
    const m = hc(".h-modal");
    m.innerHTML = `<span class="h-x">${g("close")}</span><h4>Add animal</h4><p class="h-sub">Type or paste the CCIA/RFID tag, then add the identifying details available now.</p>
      <label>CCIA / RFID tag</label><div class="h-in big ${st.focus === "t" ? "focus" : ""}" id="h-tag">${st.tag || `<span class="ph">Type or paste CCIA tag</span>`}</div>
      <div class="h-two"><div><label>Sex</label><div class="h-in" id="h-sex">${st.sex || "cow"} ${g("chevron-down")}</div></div><div><label>Visual tag <em>(optional)</em></label><div class="h-in ${st.focus === "v" ? "focus" : ""}" id="h-vis">${st.vis || `<span class="ph">e.g. Y17</span>`}</div></div></div>
      <div class="h-two"><div><label>Breed <em>(optional)</em></label><div class="h-in ${st.focus === "b" ? "focus" : ""}" id="h-breed">${st.breed || `<span class="ph">Start typing, e.g. Angus</span>`}</div>
      ${st.blist ? `<div class="h-drop small">${["Black Angus", "Black Baldy", "Angus"].map((n) => `<div data-b="${n}" class="${n === st.bpick ? "hi" : ""}"><span>${n}</span></div>`).join("")}</div>` : ""}</div>
      <div><label>Birth date <em>(optional)</em></label><div class="h-in">${st.born || `<span class="ph">yyyy-mm-dd</span>`}</div></div></div>
      <div class="h-formbtns left"><span class="h-btn solid" id="h-addgo">Add animal</span><span class="h-btn">Cancel</span></div>`;
  }

  // ---- Full record (AnimalProfilePage + EventTimeline)
  function profileView(a) {
    const ev = [
      ["pill", "Treated", "Liquamycin LA-200 · 8 mL", fmtDay(day(0), true), true],
      ["weigh", "Weighed", "768 lb", "12 Oct 2026"],
      ["pin", "Moved", "To Backgrounding steers", "15 Sep 2026"],
      ["weigh", "Weighed", "712 lb", "1 Sep 2026"],
      ["tag", "Tagged", `CCIA ${tagFmt(a.tag)}`, "20 May 2026"],
    ];
    hc('[data-view="profile"]').innerHTML = `<p class="h-back" id="h-back">${g("arrow-left")} Back to animals</p>
      <div class="h-ptopbar"><span class="h-btn solid">Record treatment or vaccination</span></div>
      <div class="h-prof">
        <div class="h-pcol">
          <div class="h-card"><div class="h-ptop"><b class="big">${tagFmt(a.tag)}</b><span class="h-btn pill">${g("pencil")} Edit</span></div>
            <p class="h-sub">Steer · Visual ${a.vis} · ${a.age} · ${a.breed}</p>
            <span class="h-chip rest wide">◆ Not safe to ship until ${fmtDay(a.until, true)}</span></div>
          <div class="h-card"><b>Family</b><p class="h-sub">Dam: Cow R05 · Calved 2 Apr 2025</p></div>
          <div class="h-card"><b>Weights</b><div class="h-spark"><i style="height:38%"></i><i style="height:58%"></i><i style="height:80%"></i><i style="height:100%"></i></div><p class="h-sub">768 lb · up 56 lb since 1 Sep · 2.1 lb/d</p></div>
        </div>
        <div class="h-pcol"><b class="h-tl-t">Timeline</b>
          <ol class="h-tl">${ev.map(([i, t, d, w, f]) => `<li class="${f ? "new" : ""}"><span class="h-ti">${g(i)}</span><div><b>${t}</b><small>${d}</small></div><time>${w}</time></li>`).join("")}</ol>
        </div>
      </div>`;
  }

  // ---- the finger
  let k = 1;
  function show(view, nav) {
    $("happ").querySelectorAll(".h-view").forEach((v) => v.classList.toggle("on", v.dataset.view === view));
    $("happ").querySelectorAll(".h-nav").forEach((n) => n.classList.toggle("on", n.dataset.nav === nav));
  }
  async function point(el, id, ms = 900) {
    if (!el) return;
    const f = hc(".h-finger"), a = $("happ").getBoundingClientRect(), r = el.getBoundingClientRect();
    f.style.transitionDuration = ms + "ms";
    f.style.transform = `translate(${(r.left - a.left + r.width / 2) / k}px, ${(r.top - a.top + r.height / 2) / k}px)`;
    f.classList.add("show");
    await wait(ms + 150, id);
  }
  async function press(el, id) {
    await point(el, id);
    const f = hc(".h-finger"); f.classList.remove("press"); f.offsetWidth; f.classList.add("press");
    el.classList.add("h-pressed"); await wait(260, id); el.classList.remove("h-pressed");
    await wait(200, id);
  }
  async function type(target, st, key, text, render, id, speed = 85) {
    for (let i = 1; i <= text.length; i++) { st[key] = text.slice(0, i) + '<span class="h-caret"></span>'; render(); await wait(speed, id); }
    st[key] = text; render();
  }
  function toast(t) { const el = hc(".h-toast"); el.innerHTML = `${g("check")} ${t}`; el.hidden = false; el.style.animation = "none"; el.offsetWidth; el.style.animation = ""; }
  function fit() {
    const w = $("hw"), narrow = w.clientWidth < 640;
    const happ = $("happ"); happ.classList.toggle("narrow", narrow);
    const dw = narrow ? 560 : 1000, dh = narrow ? 860 : 660;
    happ.style.width = dw + "px"; happ.style.height = dh + "px";
    if (!w.clientWidth) return;
    k = PHONE.matches ? w.clientWidth / dw : Math.min(w.clientWidth / dw, (w.clientHeight || dh) / dh);
    happ.style.transform = `scale(${k})`;
    w.style.setProperty("--hh", dh * k + "px");
  }
  const PHONE = matchMedia("(max-aspect-ratio: 1/1), (max-width: 760px), (max-height: 560px)");
  new ResizeObserver(fit).observe($("hw"));

  function resetHerd() {
    rows = ANIMALS.map((a) => ({ ...a })); chosen = null;
    counts = { all: linked, active: linked - 1, wd: 1 };
    shell(); fit(); herdsView(0); animalsView(); show("herds", "Herds");
  }
  async function herdLoop(id) {
    for (;;) {
      resetHerd();
      await wait(2500, id);
      // 1. herds: look at another herd, then back to the cow calf pairs on Paddock E
      await press(hc('.h-herd[data-h="1"]'), id); herdsView(1); await wait(3500, id);
      await press(hc('.h-herd[data-h="2"]'), id); herdsView(2); await wait(3000, id);
      await press(hc('.h-herd[data-h="0"]'), id); herdsView(0); await wait(3500, id);
      // 2. animals: add a calf
      await press(hc('.h-nav[data-nav="Animals"]'), id); show("animals", "Animals"); await wait(2500, id);
      await press(hc("#h-add"), id);
      const st = {}; const render = () => addModal(st);
      render(); hc(".h-modal").hidden = false; hc(".h-scrim").hidden = false; await wait(1400, id);
      await press(hc("#h-tag"), id); st.focus = "t"; await type(null, st, "tag", NEW.tag.replace(/^/, "124000"), render, id, 70); await wait(500, id);
      await press(hc("#h-sex"), id); st.focus = ""; st.sex = "heifer"; render(); await wait(700, id);
      await press(hc("#h-vis"), id); st.focus = "v"; await type(null, st, "vis", NEW.vis, render, id, 140); await wait(400, id);
      await press(hc("#h-breed"), id); st.focus = "b"; await type(null, st, "breed", "Bla", render, id, 160); st.blist = true; render(); await wait(1000, id);
      st.bpick = NEW.breed; render(); await press(hc('[data-b="Black Angus"]'), id); st.breed = NEW.breed; st.blist = false; st.focus = ""; render(); await wait(900, id);
      await press(hc("#h-addgo"), id);
      hc(".h-modal").hidden = true; hc(".h-scrim").hidden = true;
      rows.unshift({ ...NEW, status: "Active", fresh: true }); rows.pop(); counts.all++; counts.active++;
      animalsView(); toast(`Animal added · ${tagFmt(NEW.tag)}`); await wait(3500, id);
      hc(".h-toast").hidden = true;
      // 3. a treatment on Steer 61: product, dose, the withdrawal fills itself in
      const steer = rows.find((a) => a.star);
      await press(hc(`tr[data-r="${rows.indexOf(steer)}"]`), id);
      chosen = steer; steer.weight = "768 lb"; steer.gainv = "2.1 lb/d"; drawRows(); drawPanel(); await wait(2800, id);
      await press(hc("#h-treat"), id);
      const t = {}; const tr = () => drawPanel(treatForm(t));
      tr(); await wait(1200, id);
      await press(hc("#h-prod"), id); t.focus = "p"; await type(null, t, "prod", "LA", tr, id, 220); t.list = true; tr(); await wait(1600, id);
      t.pick = "Liquamycin LA-200"; tr(); await press(hc('[data-p="Liquamycin LA-200"]'), id);
      t.prod = "Liquamycin LA-200"; t.list = false; t.wd = `48 days · until ${fmtDay(day(48))}`; t.focus = ""; tr(); await wait(1300, id);
      await press(hc("#h-dose"), id); t.focus = "d"; await type(null, t, "dose", "8 mL", tr, id, 180); t.focus = ""; t.ready = true; tr(); await wait(900, id);
      await press(hc("#h-save"), id);
      steer.status = "Withdrawal"; steer.until = day(48); counts.wd++; counts.active--;
      hc('[data-c="wd"]').textContent = counts.wd; hc('[data-c="active"]').textContent = counts.active;
      drawRows(); drawPanel(); toast("Treatment recorded · withdrawal set"); await wait(3800, id);
      hc(".h-toast").hidden = true;
      // 4. the animal's full record
      await press(hc("#h-open"), id);
      profileView(steer); show("profile", "Animals"); await wait(6500, id);
      await press(hc("#h-back"), id); await wait(400, id);
    }
  }

  // ================================================================ 4. AI assistant
  // The same five play on a loop in two faithful copies: the iOS app's command
  // sheet and the web app's "Ask the assistant" panel (asked a little differently
  // there, and in another order). Answers come from data.js.
  const P = D.paddocks;
  const COW = HERDS[0];
  const byScore = Object.entries(P).sort((x, y) => y[1].prs - x[1].prs);
  const [best, second] = byScore;
  const daysOn = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toLocaleDateString("en-CA", { month: "short", day: "numeric" }); };
  const past = P.A.history.filter(([y]) => y < 2026).map(([, v]) => v);
  const aGreener = P.A.history[P.A.history.length - 1][1] > past.reduce((x, y) => x + y, 0) / past.length;
  const AI = [
    { kind: "ask", q: "How many cattle do I have?", qw: "How many head are on the ranch?",
      ios: `<b>${total} head</b>, in ${HERDS.length} herds: ${HERDS.map((x) => `${x.name.toLowerCase()} ${x.head}`).join(", ")}.`,
      web: [`You have **${total} head** across ${HERDS.length} herds.`, { cols: ["Herd", "Head", "Avg weight"], rows: HERDS.map((x) => [x.name, x.head, x.avg]) }] },
    { kind: "ask", q: "Which pasture is ready to graze?", qw: "Which paddock should I graze next?",
      ios: `<b>Paddock ${best[0]}</b> is ready, at ${best[1].prs}. Paddock ${second[0]} is next at ${second[1].prs}. The rest need more time.`,
      web: [`**Paddock ${best[0]}** is the most ready, at ${best[1].prs} out of 100. Paddock ${second[0]} is next.`, { cols: ["Paddock", "Score", "Status", "Acres"], rows: byScore.slice(0, 4).map(([L, x]) => [`Paddock ${L}`, x.prs, x.status, x.acres]) }] },
    { kind: "ask", q: "How is Paddock A doing?", qw: "How's Paddock A looking?",
      ios: `Paddock A scores <b>${P.A.prs}</b>, the best on the ranch. It's rested and ready to graze.${aGreener ? " The grass is ahead of a normal year." : ""}`,
      web: [`**Paddock A** scores **${P.A.prs}** out of 100, the best of the six. It's rested and ready.`, { cols: ["Paddock", "Score", "Status", "Acres"], rows: [["Paddock A", P.A.prs, P.A.status, P.A.acres]] }] },
    { kind: "log", q: "Move the cow calf pairs to Paddock A", qw: "Put the pairs on Paddock A",
      kicker: "Move herd", title: `${COW.name} · ${COW.head} head → Paddock A`,
      lead: `Off Paddock E after ${D.herd.days} days. Paddock E gets its rest.`,
      rows: [["Now on", "Paddock E"], ["To", "Paddock A"], ["Moved", "Today"]],
      done: "Move recorded", doneLine: `${COW.name} are moving onto Paddock A.`, saved: `Moved ${COW.name} to Paddock A` },
    { kind: "log", q: "Note: water trough on Paddock C is low", qw: "Water trough on Paddock C is low",
      kicker: "Note", title: "Paddock C",
      lead: "“Water trough is low.”",
      rows: [["About", "Paddock C"], ["Note", "Water trough is low"]],
      done: "Note saved", doneLine: "On Paddock C: water trough is low.", saved: "Noted on Paddock C" },
  ];
  let device = "phone";
  function resetAssistant() { stopSpeech(); iosIdle(); waEmpty(); }
  document.querySelectorAll(".device-toggle button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.device === device) return;
    document.querySelectorAll(".device-toggle button").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
    device = b.dataset.device;
    $("ios").hidden = device !== "phone"; $("wa").hidden = device !== "web";
    run++; resetAssistant(); aiLoop(run).catch(() => {});
  }));
  const WEB_ORDER = [1, 3, 0, 4, 2];
  async function aiLoop(id) {
    resetAssistant();
    for (;;) {
      const order = device === "phone" ? [0, 1, 2, 3, 4] : WEB_ORDER;
      for (const i of order) await (device === "phone" ? iosRun(AI[i], id) : waRun(AI[i], id));
      if (device === "web") { await wait(1500, id); tap($("wa-new")); waEmpty(); }
    }
  }

  // ---- iPhone: the command sheet
  const ORB = (live, label) => `<div class="ios-orb ${live ? "live" : ""}"><div class="core"><div class="bars5"><i></i><i></i><i></i><i></i><i></i></div></div><span>${label}</span></div>`;
  function iosStatus(text, live) { $("ios-status").textContent = text; $("ios-dot").classList.toggle("live", !!live); }
  function iosIdle() {
    iosStatus("Listening", true);
    $("ios-body").innerHTML = `<p class="ios-display">Ask, or say what happened.</p>${ORB(true, "Listening")}`;
  }
  async function iosRun(item, id) {
    iosIdle();
    await wait(2500, id);
    // the question appears as it is said: only the words change, the orb keeps its rhythm
    $("ios-body").innerHTML = `<p class="ios-said"></p>${ORB(true, "Listening")}`;
    const said = $("ios-body").querySelector(".ios-said"), words = item.q.split(" ");
    for (let i = 1; i <= words.length; i++) { said.textContent = `“${words.slice(0, i).join(" ")}”`; await wait(330, id); }
    await wait(1200, id);
    const heard = `<p class="ios-said">“${esc(item.q)}”</p>`;
    if (item.kind === "ask") {
      iosStatus("Asking the ranch");
      $("ios-body").innerHTML = `${heard}<p class="ios-display">Asking the ranch…</p><div class="ios-think"><i></i><i></i><i></i></div>`;
      await wait(1800, id);
      iosStatus("Answered");
      $("ios-body").innerHTML = `${heard}<p class="ios-display answer">${item.ios}</p>`;
      return wait(9000, id);
    }
    iosStatus("Say yes or no", true);
    $("ios-body").innerHTML = `${heard}<p class="ios-kicker">${item.kicker}</p><p class="ios-display">${esc(item.title)}</p><p class="ios-lead">${esc(item.lead)}</p>
      <div class="ios-btns"><button class="ios-btn primary" data-act="yes"><svg class="ic"><use href="#i-check"/></svg> Yes, record</button><button class="ios-btn" data-act="no">No</button></div>
      <p class="ios-small" style="text-align:center">Nothing is written until you say yes.</p>`;
    await wait(6500, id);
    tap($("ios-body").querySelector('[data-act="yes"]'));
    await wait(500, id);
    iosStatus("Recorded");
    $("ios-body").innerHTML = `<div class="ios-done"><span class="tick"><svg class="ic"><use href="#i-check"/></svg></span><p class="ios-display">${item.done}</p></div>
      <p class="ios-lead">${esc(item.doneLine)}</p><p class="ios-small">Saved on the phone. Uploads when there is signal.</p>`;
    return wait(6000, id);
  }

  // ---- Web: the side panel
  const md = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  function waEmpty() {
    $("wa-scroll").innerHTML = `<div class="wa-empty"><b>Ask, or say what happened</b><p>Try “how many cattle do I have?” or “put a note on the bulls: fence is down”</p></div>`;
    waBox("");
  }
  function waBox(text) {
    $("wa-text").textContent = text || "Ask a question, or say what happened";
    $("wa-text").parentElement.classList.toggle("typed", !!text);
  }
  const waAdd = (html) => { const sc = $("wa-scroll"); sc.querySelector(".wa-empty")?.remove(); sc.insertAdjacentHTML("beforeend", html); sc.scrollTop = sc.scrollHeight; return sc.lastElementChild; };
  async function waRun(item, id) {
    const text = item.qw;
    await wait(1500, id);
    for (let i = 1; i <= text.length; i++) { waBox(text.slice(0, i)); await wait(60, id); }
    await wait(900, id);
    tap(document.querySelector(".wa-send"));
    waBox("");
    waAdd(`<p class="wa-q">${esc(text)}</p>`);
    const spin = waAdd(`<span class="wa-spin">Working it out</span>`);
    await wait(1800, id);
    spin.remove();
    if (item.kind === "ask") {
      const [line, t] = item.web;
      waAdd(`<div class="wa-a"><p>${md(line)}</p><div class="wa-table"><table><thead><tr>${t.cols.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(String(c))}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`);
      return wait(9000, id);
    }
    const card = waAdd(`<div class="wa-a"><p style="color:#565A61">Here it is. Check it, then save.</p><div class="wa-card"><span class="wa-kick">${item.kicker}</span><span class="wa-title">${esc(item.title.split(" → ")[0])}</span>
      <dl>${item.rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      <div class="wa-acts"><button class="wa-btn primary" data-act="save">Save</button><button class="wa-btn" data-act="cancel">Cancel</button></div></div></div>`);
    $("wa-scroll").scrollTop = $("wa-scroll").scrollHeight;
    await wait(6000, id);
    tap(card.querySelector('[data-act="save"]'));
    await wait(500, id);
    card.innerHTML = `<p class="wa-ok"><svg class="ic"><use href="#i-check"/></svg> ${esc(item.saved)}</p>`;
    $("wa-scroll").scrollTop = $("wa-scroll").scrollHeight;
    return wait(5500, id);
  }

  const plain = (html) => html.replace(/<[^>]+>/g, "");

  // ================================================================ speech out
  let voice = null;
  function pickVoice() {
    const vs = speechSynthesis.getVoices();
    voice = vs.find((v) => /en[-_]CA/i.test(v.lang)) || vs.find((v) => /Samantha|Google US English|Karen|Daniel/i.test(v.name)) || vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function primeSpeech() {
    if (!("speechSynthesis" in window) || primeSpeech.done) return;
    const u = new SpeechSynthesisUtterance(" "); u.volume = 0; speechSynthesis.speak(u); primeSpeech.done = true;
  }
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    stopSpeech(); const u = new SpeechSynthesisUtterance(text); if (voice) u.voice = voice; speechSynthesis.speak(u);
  }
  function stopSpeech() { if ("speechSynthesis" in window) speechSynthesis.cancel(); }

  // ================================================================ start
  go("home");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/demo/sw.js", { scope: "/demo" }).then(() => navigator.serviceWorker.ready).then(() => ($("offline-badge").hidden = false)).catch(() => {});
  }
  async function wake() { try { await navigator.wakeLock?.request("screen"); } catch {} }
  wake(); document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && wake());
})();
