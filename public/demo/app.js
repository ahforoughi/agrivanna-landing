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
  bars.innerHTML = "<i></i>".repeat(28);
  let barTimer = null, typeTimers = [];
  function setLive(on, status) {
    $("recorder").classList.toggle("live", on);
    if (status) $("mic-status").innerHTML = status;
    clearInterval(barTimer);
    const is = [...bars.children];
    if (on) barTimer = setInterval(() => is.forEach((b) => (b.style.height = 18 + Math.random() * 82 + "%")), 110);
    else is.forEach((b) => (b.style.height = "18%"));
  }
  function resetVoice() {
    typeTimers.forEach(clearTimeout); typeTimers = [];
    setLive(false, "");
    $("transcript").className = "transcript";
    $("transcript").innerHTML = `<span class="placeholder">Your words show up here as you speak.</span>`;
    $("extract").hidden = true;
  }
  // types a note word by word as if it were being said
  function playText(text, title) {
    return new Promise((done) => {
      $("extract").hidden = true;
      const t = $("transcript"); t.className = "transcript";
      setLive(true, `<b>Listening</b><br>${title}`);
      const words = text.split(" "); let i = 0;
      const tick = () => {
        t.innerHTML = esc(words.slice(0, ++i).join(" ")) + '<span class="caret"></span>';
        if (i < words.length) typeTimers.push(setTimeout(tick, 150 + (/[.,]$/.test(words[i - 1]) ? 260 : 0)));
        else typeTimers.push(setTimeout(() => { finish(text); done(); }, 500));
      };
      typeTimers.push(setTimeout(tick, 400));
    });
  }
  function finish(text) {
    setLive(false, "<b>Done.</b> Check the records,<br>then save");
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
    $("mic-status").innerHTML = "<b>Saved.</b> Next note coming up";
  }
  async function voiceLoop(id) {
    resetVoice();
    for (let k = 0; ; k = (k + 1) % NOTES.length) {
      await wait(900, id);
      tap($("big-mic"));
      await playText(NOTES[k].text, NOTES[k].title);
      if (id !== run) return;
      await wait(3200, id);
      save();
      await wait(3200, id);
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
    resetMap();
    await wait(700, id);
    for (;;) for (const L of ["E", "A", "B", "D", "C", "F"]) { tap(pills[L]); pick(L); await wait(5500, id); }
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

  // ================================================================ 3. herd (the web app's herd screen)
  const A = (tag, vis, cls, breed, hist) => ({ tag: "124 000 1000" + tag, vis, cls, breed, hist });
  const HERDS = [
    { name: "Cow calf pairs", meta: "Cows · 1,349 lb · on Paddock E", head: D.herd.head, tagged: 11, avg: "1,349 lb", animals: [
      A("00418", "418", "Cow", "Black Baldy", [["Sep 11", "Calved a bull calf, no help needed"], ["Sep 11", "Calf tagged yellow 418, about 85 lb"], ["Jun 02", "Preg checked, bred"], ["Aug 07", "Moved to Paddock E"]]),
      A("00405", "R05", "Cow", "Angus", [["Sep 14", "Calved a heifer calf"], ["Jul 20", "Pinkeye, 8 cc LA 200, withdrawal logged"], ["Aug 07", "Moved to Paddock E"]]),
      A("00411", "R11", "Cow", "Angus", [["Sep 09", "Calved a bull calf"], ["Jun 02", "Preg checked, bred"]]),
      A("00434", "P34", "Cow", "Hereford", [["Sep 18", "Calved a bull calf, pulled"], ["Sep 18", "Calf about 92 lb"], ["Jun 02", "Preg checked, bred"]]),
      A("00441", "P41", "Cow", "Red Angus", [["Aug 30", "Body condition 6"], ["Jun 02", "Preg checked, open"], ["Jun 02", "Flagged to cull"]]),
      A("00508", "N08", "Cow", "Angus", [["Sep 12", "Calved a heifer calf"], ["Aug 07", "Moved to Paddock E"]]),
    ] },
    { name: "Backgrounding steers", meta: "Steers · 760 lb · 88 head", head: 88, tagged: 88, avg: "760 lb", animals: [
      A("00061", "61", "Steer", "Angus cross", [["Oct 12", "Weighed 768 lb"], ["Oct 03", "Pinkeye, 8 cc LA 200, in hospital pen"], ["Sep 01", "Weighed 712 lb"]]),
      A("00072", "72", "Steer", "Angus", [["Oct 12", "Weighed 802 lb"], ["Sep 01", "Weighed 745 lb"]]),
      A("00083", "83", "Steer", "Hereford cross", [["Oct 12", "Weighed 741 lb"], ["Sep 01", "Weighed 690 lb"]]),
      A("00094", "94", "Steer", "Angus", [["Oct 12", "Weighed 779 lb"], ["Sep 15", "Moved to South pasture"]]),
    ] },
    { name: "Replacement heifers", meta: "Heifers · 890 lb · 24 head", head: 24, tagged: 24, avg: "890 lb", animals: [
      A("00201", "H01", "Heifer", "Black Baldy", [["Oct 01", "Weighed 902 lb"], ["Jul 10", "Bred, AI"]]),
      A("00202", "H02", "Heifer", "Angus", [["Oct 01", "Weighed 874 lb"], ["Jul 10", "Bred, AI"]]),
      A("00203", "H03", "Heifer", "Angus", [["Oct 01", "Weighed 895 lb"], ["Jul 11", "Bred, AI"]]),
    ] },
  ];
  $("aw-stats").innerHTML = `<div><small>Herds</small><b>3</b></div><div><small>Linked IDs</small><b>123</b></div><div><small>Total animals</small><b>${HERDS.reduce((n, x) => n + x.head, 0)}</b></div>`;
  $("herd-list").innerHTML = HERDS.map((hd, i) => `<button class="herd-row" data-i="${i}"><span class="hr-top"><b>${hd.name}</b><span>${hd.head} head</span></span><small>${hd.meta}</small><span class="bar"><i style="width:${Math.round(hd.tagged / hd.head * 100)}%"></i></span></button>`).join("");
  document.querySelectorAll(".herd-row").forEach((b) => b.addEventListener("click", () => selectHerd(+b.dataset.i)));
  function selectHerd(i) {
    const hd = HERDS[i];
    document.querySelectorAll(".herd-row").forEach((b) => b.classList.toggle("on", +b.dataset.i === i));
    const pct = hd.tagged / hd.head, C = 2 * Math.PI * 18;
    $("herd-head").innerHTML = `<svg class="ring-stat" viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="#ecece8" stroke-width="5"/><circle cx="22" cy="22" r="18" fill="none" stroke="#6FD40C" stroke-width="5" stroke-linecap="round" stroke-dasharray="${C * pct} ${C}" transform="rotate(-90 22 22)"/><text x="22" y="25.5" text-anchor="middle" font-size="10" font-weight="700" fill="#14161A" font-family="Geist">${hd.tagged}</text></svg><div><b>${hd.name}</b><small>${hd.head} head · ${hd.avg} avg · ${hd.tagged} tagged</small></div><span class="aw-add" id="aw-add">+ Add animal</span>`;
    $("animal-rows").innerHTML = hd.animals.map((a, j) => `<tr data-j="${j}" style="animation-delay:${j * 50}ms"><td>${a.tag}</td><td><span class="vis">${a.vis}</span></td><td>${a.cls}</td><td>${a.breed}</td></tr>`).join("");
    $("animal-rows").querySelectorAll("tr").forEach((tr) => tr.addEventListener("click", () => openAnimal(hd, +tr.dataset.j, tr)));
    $("drawer").hidden = true;
  }
  function openAnimal(hd, j, tr) {
    const a = hd.animals[j];
    $("animal-rows").querySelectorAll("tr").forEach((r) => r.classList.toggle("on", r === tr));
    $("dr-visual").textContent = a.vis;
    $("dr-title").textContent = `${a.cls} ${a.vis}`;
    $("dr-sub").textContent = `${a.breed} · ${hd.name}`;
    $("dr-timeline").innerHTML = a.hist.map(([d, t]) => `<li><time>${d}</time><span>${t}</span></li>`).join("");
    const dr = $("drawer"); dr.hidden = false; dr.style.animation = "none"; dr.offsetWidth; dr.style.animation = "";
  }
  $("drawer-x").addEventListener("click", closeAnimal);
  function closeAnimal() { $("drawer").hidden = true; $("animal-rows").querySelectorAll("tr").forEach((r) => r.classList.remove("on")); }

  // What the loop adds to and takes out of each herd
  const CHANGES = [
    { open: 0, add: A("00512", "512", "Calf", "Black Baldy", []), addNote: "Calf 512 added, out of Cow 418", drop: 4, dropNote: "Cow P41 culled. Count updated" },
    { open: 0, add: A("00095", "95", "Steer", "Angus", []), addNote: "Steer 95 added, bought at Medicine Hat", drop: 1, dropNote: "Steer 72 sold. Count updated" },
    { open: 0, add: A("00204", "H04", "Heifer", "Hereford", []), addNote: "Heifer H04 added from the calf crop", drop: 2, dropNote: "Heifer H03 moved to the cow herd" },
  ];
  const baseHead = HERDS.map((x) => x.head);
  function toast(text) { const t = $("aw-toast"); t.innerHTML = `<svg class="ic"><use href="#i-check"/></svg> ${esc(text)}`; t.hidden = false; t.style.animation = "none"; t.offsetWidth; t.style.animation = ""; }
  function setCount(i, n) {
    HERDS[i].head = n;
    document.querySelector(`.herd-row[data-i="${i}"] .hr-top span`).textContent = `${n} head`;
    $("aw-stats").querySelector(":scope > div:last-child b").textContent = HERDS.reduce((m, x) => m + x.head, 0);
    const small = $("herd-head").querySelector("small");
    if (small) small.textContent = small.textContent.replace(/^\d+ head/, `${n} head`);
  }
  function resetHerd() {
    $("aw-toast").hidden = true; closeAnimal();
    baseHead.forEach((n, i) => setCount(i, n));
    selectHerd(0);
  }
  async function herdLoop(id) {
    resetHerd();
    for (;;) for (let i = 0; i < HERDS.length; i++) {
      const hd = HERDS[i], c = CHANGES[i];
      await wait(900, id);
      tap(document.querySelector(`.herd-row[data-i="${i}"]`)); selectHerd(i);
      await wait(1800, id);
      // open an animal's history
      const tr = $("animal-rows").querySelectorAll("tr")[c.open];
      tap(tr); openAnimal(hd, c.open, tr);
      await wait(4200, id);
      closeAnimal();
      await wait(700, id);
      // add one
      tap($("aw-add"));
      await wait(500, id);
      $("animal-rows").insertAdjacentHTML("afterbegin", `<tr class="added"><td>${c.add.tag}</td><td><span class="vis">${c.add.vis}</span></td><td>${c.add.cls}</td><td>${c.add.breed}</td></tr>`);
      setCount(i, hd.head + 1); toast(c.addNote);
      await wait(3000, id);
      // take one out
      const out = $("animal-rows").querySelectorAll("tr")[c.drop + 1];
      tap(out); out.classList.add("leaving");
      await wait(900, id);
      out.remove(); setCount(i, hd.head - 1); toast(c.dropNote);
      await wait(3000, id);
      $("aw-toast").hidden = true;
      setCount(i, baseHead[i]);
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
  const total = HERDS.reduce((n, x) => n + x.head, 0);
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
    await wait(1600, id);
    // the question appears as it is said
    const words = item.q.split(" ");
    for (let i = 1; i <= words.length; i++) {
      $("ios-body").innerHTML = `<p class="ios-said">“${esc(words.slice(0, i).join(" "))}”</p>${ORB(true, "Listening")}`;
      await wait(170, id);
    }
    await wait(500, id);
    const heard = `<p class="ios-said">“${esc(item.q)}”</p>`;
    if (item.kind === "ask") {
      iosStatus("Asking the ranch");
      $("ios-body").innerHTML = `${heard}<p class="ios-display">Asking the ranch…</p><div class="ios-think"><i></i><i></i><i></i></div>`;
      await wait(1200, id);
      iosStatus("Answered");
      $("ios-body").innerHTML = `${heard}<p class="ios-display answer">${item.ios}</p>`;
      speak(plain(item.ios));
      return wait(6000, id);
    }
    iosStatus("Say yes or no", true);
    $("ios-body").innerHTML = `${heard}<p class="ios-kicker">${item.kicker}</p><p class="ios-display">${esc(item.title)}</p><p class="ios-lead">${esc(item.lead)}</p>
      <div class="ios-btns"><button class="ios-btn primary" data-act="yes"><svg class="ic"><use href="#i-check"/></svg> Yes, record</button><button class="ios-btn" data-act="no">No</button></div>
      <p class="ios-small" style="text-align:center">Nothing is written until you say yes.</p>`;
    speak(`${item.title.replace("→", "to").replace(" · ", ", ")}. Yes or no?`);
    await wait(4200, id);
    tap($("ios-body").querySelector('[data-act="yes"]'));
    await wait(500, id);
    iosStatus("Recorded");
    $("ios-body").innerHTML = `<div class="ios-done"><span class="tick"><svg class="ic"><use href="#i-check"/></svg></span><p class="ios-display">${item.done}</p></div>
      <p class="ios-lead">${esc(item.doneLine)}</p><p class="ios-small">Saved on the phone. Uploads when there is signal.</p>`;
    return wait(4000, id);
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
    for (let i = 1; i <= text.length; i++) { waBox(text.slice(0, i)); await wait(32, id); }
    await wait(400, id);
    tap(document.querySelector(".wa-send"));
    waBox("");
    waAdd(`<p class="wa-q">${esc(text)}</p>`);
    const spin = waAdd(`<span class="wa-spin">Working it out</span>`);
    await wait(1100, id);
    spin.remove();
    if (item.kind === "ask") {
      const [line, t] = item.web;
      waAdd(`<div class="wa-a"><p>${md(line)}</p><div class="wa-table"><table><thead><tr>${t.cols.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(String(c))}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`);
      speak(plain(md(line)));
      return wait(6000, id);
    }
    const card = waAdd(`<div class="wa-a"><p style="color:#565A61">Here it is. Check it, then save.</p><div class="wa-card"><span class="wa-kick">${item.kicker}</span><span class="wa-title">${esc(item.title.split(" → ")[0])}</span>
      <dl>${item.rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      <div class="wa-acts"><button class="wa-btn primary" data-act="save">Save</button><button class="wa-btn" data-act="cancel">Cancel</button></div></div></div>`);
    $("wa-scroll").scrollTop = $("wa-scroll").scrollHeight;
    await wait(3800, id);
    tap(card.querySelector('[data-act="save"]'));
    await wait(500, id);
    card.innerHTML = `<p class="wa-ok"><svg class="ic"><use href="#i-check"/></svg> ${esc(item.saved)}</p>`;
    $("wa-scroll").scrollTop = $("wa-scroll").scrollHeight;
    return wait(3500, id);
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
