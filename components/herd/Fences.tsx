"use client";

/**
 * The virtual fence: a wall of light, rows of glowing points on a faint grid.
 * It flares when a cow reaches it and a ripple runs out across the field.
 */
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FENCE_SAMPLES, groundHeight } from "./terrain";

const LIME = "#A6FF3D";

/** Spacing of the light wall: dots along the fence and rows up it. */
const WALL = { step: 0.14, rows: 7, rowGap: 0.16, base: 0.12 };

/** The fence path resampled at even spacing: [x, z, distance along]. */
function wallColumns() {
  const out: [number, number, number][] = [];
  let carried = 0;
  let run = 0;
  for (let i = 1; i < FENCE_SAMPLES.length; i++) {
    const [ax, az] = FENCE_SAMPLES[i - 1];
    const [bx, bz] = FENCE_SAMPLES[i];
    const seg = Math.hypot(bx - ax, bz - az);
    let d = carried;
    while (d <= seg) {
      const t = d / seg;
      out.push([ax + (bx - ax) * t, az + (bz - az) * t, run + d]);
      d += WALL.step;
    }
    carried = d - seg;
    run += seg;
  }
  return out;
}

/**
 * The virtual fence: a wall of light standing on the grass — rows of glowing
 * points on a faint grid, a wave of light running along it. It flares when the
 * walking cow reaches it.
 */
export function VirtualFence() {
  const { points, pointMat, wall, wallMat } = useMemo(() => {
    const cols = wallColumns();
    const total = cols[cols.length - 1][2];
    const uniforms = {
      uTime: { value: 0 },
      uPulse: { value: 0 },
      uColor: { value: new THREE.Color(LIME) },
      uTotal: { value: total },
    };

    // Dots: one per column per row
    const pos: number[] = [];
    const along: number[] = [];
    const row: number[] = [];
    for (const [x, z, d] of cols) {
      const y0 = groundHeight(x, z) + WALL.base;
      for (let r = 0; r < WALL.rows; r++) {
        pos.push(x, y0 + r * WALL.rowGap, z);
        along.push(d);
        row.push(r / (WALL.rows - 1));
      }
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    pg.setAttribute("aAlong", new THREE.Float32BufferAttribute(along, 1));
    pg.setAttribute("aRow", new THREE.Float32BufferAttribute(row, 1));
    const pointMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms,
      vertexShader: `
        attribute float aAlong; attribute float aRow;
        uniform float uTime; uniform float uTotal; uniform float uPulse;
        varying float vGlow;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float wave = 0.5 + 0.5 * sin(uTime * 2.0 - aAlong * 1.1);
          float ends = smoothstep(0.0, 0.8, aAlong) * smoothstep(uTotal, uTotal - 0.8, aAlong);
          vGlow = (0.28 + 0.62 * wave) * (1.0 - aRow * 0.35) * ends * (1.0 + uPulse * 1.6);
          gl_PointSize = (3.6 + wave * 2.2 + uPulse * 2.0) * (14.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vGlow;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          gl_FragColor = vec4(uColor, smoothstep(0.5, 0.0, d) * vGlow);
        }`,
    });

    // The grid the dots sit on: faint lines, rows and every few columns
    const wpos: number[] = [];
    const wuv: number[] = [];
    const idx: number[] = [];
    const height = WALL.rowGap * (WALL.rows - 1);
    cols.forEach(([x, z, d], i) => {
      const y0 = groundHeight(x, z) + WALL.base;
      wpos.push(x, y0, z, x, y0 + height, z);
      wuv.push(d, 0, d, 1);
      if (i < cols.length - 1) {
        const a = i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    });
    const wg = new THREE.BufferGeometry();
    wg.setAttribute("position", new THREE.Float32BufferAttribute(wpos, 3));
    wg.setAttribute("uv", new THREE.Float32BufferAttribute(wuv, 2));
    wg.setIndex(idx);
    const wallMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float uTime; uniform float uTotal; uniform float uPulse; uniform vec3 uColor;
        varying vec2 vUv;
        float gridLine(float x, float w) { float f = abs(fract(x) - 0.5); return smoothstep(w, 0.0, 0.5 - f); }
        void main() {
          float along = vUv.x;
          float rows = gridLine(vUv.y * ${(WALL.rows - 1).toFixed(1)}, 0.06);
          float cols = gridLine(along / ${(WALL.step * 4).toFixed(2)}, 0.05);
          float wave = 0.5 + 0.5 * sin(uTime * 2.0 - along * 1.1);
          float ends = smoothstep(0.0, 0.8, along) * smoothstep(uTotal, uTotal - 0.8, along);
          // A faint sheet of light behind the grid, brightest at the grass
          float sheet = (1.0 - vUv.y) * 0.05;
          float a = (max(rows, cols) * (0.1 + 0.12 * wave) + sheet) * ends * (1.0 + uPulse * 1.8);
          gl_FragColor = vec4(uColor, a);
        }`,
    });

    return { points: pg, pointMat, wall: wg, wallMat };
  }, []);

  useFrame((state) => {
    pointMat.uniforms.uTime.value = state.clock.elapsedTime;
    pointMat.uniforms.uPulse.value *= 0.95;
  });

  // The walking cow makes the whole wall flare when she reaches it
  useEffect(() => {
    const flare = () => (pointMat.uniforms.uPulse.value = 0.8);
    window.addEventListener("herd:fence-touch", flare);
    return () => window.removeEventListener("herd:fence-touch", flare);
  }, [pointMat]);

  return (
    <group>
      <mesh geometry={wall} material={wallMat} renderOrder={2} />
      <points geometry={points} material={pointMat} renderOrder={3} />
    </group>
  );
}

/** The ring that spreads across the grass where she meets the line. */
export function Ripple() {
  const ref = useRef<THREE.Mesh>(null);
  const state = useRef({ t: 1, x: 0, z: 0 });
  useEffect(() => {
    const on = (e: Event) => {
      const { x, z } = (e as CustomEvent<{ x: number; z: number }>).detail;
      state.current = { t: 0, x, z };
    };
    window.addEventListener("herd:fence-touch", on);
    return () => window.removeEventListener("herd:fence-touch", on);
  }, []);
  useFrame((_, dt) => {
    const mesh = ref.current;
    if (!mesh) return;
    const s = state.current;
    s.t = Math.min(1, s.t + dt * 0.7);
    mesh.position.set(s.x, groundHeight(s.x, s.z) + 0.05, s.z);
    mesh.scale.setScalar(0.2 + s.t * 2.6);
    (mesh.material as THREE.MeshBasicMaterial).opacity = Math.pow(1 - s.t, 1.5) * 0.7;
  });
  return (
    <mesh ref={ref} rotation-x={-Math.PI / 2}>
      <ringGeometry args={[0.92, 1, 64]} />
      <meshBasicMaterial color={LIME} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}
