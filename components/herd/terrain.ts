/** Rolling hills. Everything that sits on the ground asks this for its height. */
export function groundHeight(x: number, z: number) {
  return (
    Math.sin(x * 0.12) * 0.45 +
    Math.cos(z * 0.16 + x * 0.05) * 0.35 +
    Math.sin((x + z) * 0.31) * 0.08
  );
}

/**
 * How sun-cured the grass is at a spot, 0 (green) to 1 (straw). Low-frequency,
 * so dry and green ground come in natural-looking patches, not speckles.
 */
export function dryness(x: number, z: number) {
  const n =
    Math.sin(x * 0.19 + 1.3) * Math.cos(z * 0.23 - 0.4) * 0.55 +
    Math.sin((x - z) * 0.07 + 2.1) * 0.35 +
    Math.sin(x * 0.53 + z * 0.41) * 0.1;
  return Math.min(1, Math.max(0, n * 0.9 + 0.45));
}

// Seeded random, so the herd and grass land in the same place on every load.
export function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * The virtual fence: a gentle cross-fence behind the herd, from the left
 * boundary fence to the right one. The paddock beyond it is resting, so its grass
 * grows taller. Points are [x, z]; the curve through them is sampled once.
 */
const FENCE_CONTROL: [number, number][] = [
  [-7.5, -9.6],
  [-2, -8.4],
  [3.5, -7.9],
  [8, -7.8],
  [12, -8.6],
];

function catmull(p0: number, p1: number, p2: number, p3: number, t: number) {
  const t2 = t * t;
  const t3 = t2 * t;
  return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}

export const FENCE_SAMPLES: [number, number][] = (() => {
  const out: [number, number][] = [];
  const c = FENCE_CONTROL;
  for (let i = 0; i < c.length - 1; i++) {
    const p0 = c[Math.max(0, i - 1)];
    const p1 = c[i];
    const p2 = c[i + 1];
    const p3 = c[Math.min(c.length - 1, i + 2)];
    for (let k = 0; k < 50; k++) {
      const t = k / 50;
      out.push([catmull(p0[0], p1[0], p2[0], p3[0], t), catmull(p0[1], p1[1], p2[1], p3[1], t)]);
    }
  }
  out.push(c[c.length - 1]);
  return out;
})();

/** Where the fence crosses a given x (the fence runs left to right). */
export function fenceZAt(x: number) {
  const s = FENCE_SAMPLES;
  if (x <= s[0][0]) return s[0][1];
  for (let i = 1; i < s.length; i++) {
    if (x <= s[i][0]) {
      const t = (x - s[i - 1][0]) / (s[i][0] - s[i - 1][0]);
      return s[i - 1][1] + (s[i][1] - s[i - 1][1]) * t;
    }
  }
  return s[s.length - 1][1];
}

/** The closest point on the fence to (x, z), and how far away it is. */
export function nearestOnFence(x: number, z: number) {
  let best = { x: 0, z: 0, dist: Infinity };
  for (const [fx, fz] of FENCE_SAMPLES) {
    const d = Math.hypot(fx - x, fz - z);
    if (d < best.dist) best = { x: fx, z: fz, dist: d };
  }
  return best;
}
