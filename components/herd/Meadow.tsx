"use client";

/**
 * Golden-hour Alberta grassland: patchy ground, clumped curved grass blades
 * that catch the low sun at their tips, wind gusts that roll across the field,
 * and a sky that fades from the page's ink into a warm horizon haze.
 */
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { dryness, fenceZAt, groundHeight, rng } from "./terrain";

export const SKY = { top: "#14161A", horizon: "#8C6436", haze: "#2E2C22" };
const SUN_DIR = new THREE.Vector3(-0.75, 0.32, -0.58).normalize();

const GREEN = new THREE.Color("#55792A");
const STRAW = new THREE.Color("#B39A5A");
const SOIL = new THREE.Color("#2B2717");
const SWARD = new THREE.Color("#34481C");

/** Ground with green and straw patches, so gaps between clumps don't read as flat. */
export function Ground() {
  const geometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(110, 80, 180, 130);
    g.rotateX(-Math.PI / 2);
    const pos = g.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    const r = rng(3);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      pos.setY(i, groundHeight(x, z));
      c.copy(SWARD).lerp(STRAW, dryness(x, z) * 0.3).lerp(SOIL, r() * 0.25);
      colors.set([c.r, c.g, c.b], i * 3);
    }
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    g.computeVertexNormals();
    return g;
  }, []);
  const material = useMemo(() => {
    const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 });
    m.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nvarying vec3 vWPos;")
        .replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;");
      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
          varying vec3 vWPos;
          float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float vnoise(vec2 p){
            vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
            return mix(mix(h21(i), h21(i+vec2(1,0)), f.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y);
          }`
        )
        .replace(
          "#include <color_fragment>",
          `#include <color_fragment>
          vec2 q = vWPos.xz;
          float n = vnoise(q * 1.7) * 0.5 + vnoise(q * 5.3) * 0.3 + vnoise(q * 17.0) * 0.2;
          diffuseColor.rgb *= mix(0.72, 1.22, n);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55, 0.48, 0.3) * diffuseColor.rgb * 1.6, smoothstep(0.72, 0.9, vnoise(q * 0.9)) * 0.35);`
        );
    };
    return m;
  }, []);
  return <mesh geometry={geometry} material={material} receiveShadow />;
}

/** A scatter of prairie wildflowers riding just above the grass. */
export function Flowers({ count = 1400 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  useEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const r = rng(23);
    const m4 = new THREE.Matrix4();
    const c = new THREE.Color();
    // Buttercup yellow, yarrow white, a few prairie-crocus purples
    const palette = ["#F2CF4A", "#F2CF4A", "#EDEAD8", "#EDEAD8", "#9B86C9"];
    for (let i = 0; i < count; i++) {
      // Flowers grow in drifts
      const drift = Math.floor(r() * 60);
      const dx = Math.sin(drift * 12.9898) * 15 + 6;
      const dz = -Math.abs(Math.cos(drift * 78.233)) * 22 + 4;
      const x = dx + (r() - 0.5) * 3.2;
      const z = dz + (r() - 0.5) * 3.2;
      const sc = 0.022 + r() * 0.02;
      m4.makeScale(sc, sc * 0.6, sc);
      m4.setPosition(x, groundHeight(x, z) + 0.17 + r() * 0.12, z);
      mesh.setMatrixAt(i, m4);
      mesh.setColorAt(i, c.set(palette[Math.floor(r() * palette.length)]));
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [count]);
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial roughness={0.7} emissive="#3A2A10" emissiveIntensity={0.25} />
    </instancedMesh>
  );
}

/** A single blade: tapered, curving forward, one unit tall. Height lives in position.y. */
function bladeGeometry() {
  const segs = 4;
  const verts: number[] = [];
  const idx: number[] = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const w = 0.5 * Math.pow(1 - t, 0.9);
    const bend = 0.28 * t * t;
    verts.push(-w, t, bend, w, t, bend);
  }
  for (let i = 0; i < segs; i++) {
    const a = i * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/**
 * Tens of thousands of blades in one draw call. Clumps of similar height, dry
 * patches that follow the ground, and wind in the shader: a steady sway plus
 * gusts that travel across the field.
 */
export function Grass({ clumps = 5400, perClump = 20 }: { clumps?: number; perClump?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const count = clumps * perClump;
  const uniforms = useRef({
    uTime: { value: 0 },
    uTip: { value: new THREE.Color("#EBD58E") },
    uSun: { value: SUN_DIR.clone() },
  });

  const { geometry, material } = useMemo(() => {
    const m = new THREE.MeshStandardMaterial({ roughness: 0.85, side: THREE.DoubleSide });
    m.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, uniforms.current);
      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
          uniform float uTime;
          varying float vH;
          varying float vBack;`
        )
        // Light the blade as if its normal leaned skyward: no black backsides
        .replace(
          "#include <beginnormal_vertex>",
          `#include <beginnormal_vertex>
          objectNormal = normalize(mix(objectNormal, vec3(0.0, 1.0, 0.0), 0.55));`
        )
        .replace(
          "#include <project_vertex>",
          `vH = position.y;
          vec4 mvPosition = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            mvPosition = instanceMatrix * mvPosition;
          #endif
          vec3 base = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          // Gusts roll across the field; small flutter on top
          float gust = sin(dot(base.xz, vec2(0.21, 0.13)) - uTime * 1.35) * 0.5 + 0.5;
          gust = pow(gust, 3.0);
          float sway = sin(uTime * 1.9 + base.x * 0.8 + base.z * 0.6) * 0.05
                     + sin(uTime * 4.3 + base.x * 2.9 + base.z * 1.7) * 0.015;
          float k = vH * vH;
          mvPosition.x += (sway + gust * 0.16) * k;
          mvPosition.z += (sway * 0.4 + gust * 0.07) * k;
          mvPosition.y -= gust * 0.035 * k;
          vBack = gust;
          mvPosition = modelViewMatrix * mvPosition;
          gl_Position = projectionMatrix * mvPosition;`
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
          uniform vec3 uTip;
          varying float vH;
          varying float vBack;`
        )
        // Dark at the root, sun-bleached at the tip
        .replace(
          "#include <color_fragment>",
          `#include <color_fragment>
          diffuseColor.rgb *= mix(0.5, 1.1, smoothstep(0.0, 0.85, vH));
          diffuseColor.rgb = mix(diffuseColor.rgb, uTip * diffuseColor.rgb * 1.6, smoothstep(0.55, 1.0, vH) * 0.45);`
        )
        // Low sun shining through the tips (cheap translucency); gusts flash the field
        .replace(
          "#include <emissivemap_fragment>",
          `#include <emissivemap_fragment>
          totalEmissiveRadiance += uTip * pow(vH, 3.0) * (0.10 + vBack * 0.12) * diffuseColor.rgb * 2.2;`
        );
    };
    return { geometry: bladeGeometry(), material: m };
  }, []);

  useEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const r = rng(11);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const p = new THREE.Vector3();
    const s = new THREE.Vector3();
    const c = new THREE.Color();
    let i = 0;
    for (let k = 0; k < clumps; k++) {
      // A third of the clumps fill the foreground, where gaps show most;
      // the rest spread out toward the horizon
      const near = k < clumps / 3;
      const cx = near ? -7 + r() * 26 : -11 + r() * 36;
      const cz = near ? 5.5 - r() * 9 : 5.5 - Math.pow(r(), 0.75) * 30;
      // Past the virtual fence the paddock is resting: taller and greener
      const resting = cz < fenceZAt(cx) - 0.3;
      // Mostly green, cured patches here and there
      const dry = Math.max(0, dryness(cx, cz) - 0.3) * (resting ? 0.5 : 1.3);
      const clumpH = (0.16 + r() * 0.22 + (1 - dry) * 0.1) * (resting ? 1.45 : 1);
      const lean = r() * Math.PI * 2;
      for (let b = 0; b < perClump; b++, i++) {
        const a = r() * Math.PI * 2;
        const d = Math.pow(r(), 0.6) * 0.42;
        const x = cx + Math.cos(a) * d;
        const z = cz + Math.sin(a) * d;
        p.set(x, groundHeight(x, z) - 0.01, z);
        // Blades fan out from the clump centre and lean a shared way
        e.set((r() - 0.3) * 0.5, lean + (r() - 0.5) * 1.6, (r() - 0.5) * 0.45);
        q.setFromEuler(e);
        const h = clumpH * (0.55 + r() * 0.7);
        const w = 0.018 + r() * 0.016;
        s.set(w, h, h);
        m4.compose(p, q, s);
        mesh.setMatrixAt(i, m4);
        const blade = Math.min(1, Math.max(0, dry + (r() - 0.6) * 0.45));
        c.copy(GREEN).lerp(STRAW, blade);
        c.offsetHSL((r() - 0.5) * 0.02, (r() - 0.5) * 0.08, (r() - 0.5) * 0.06);
        mesh.setColorAt(i, c);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [clumps, perClump]);

  useFrame((state) => {
    uniforms.current.uTime.value = state.clock.elapsedTime;
  });

  return <instancedMesh ref={ref} args={[geometry, material, count]} receiveShadow frustumCulled={false} />;
}

/** Sky dome: ink overhead (so the hero meets the page seamlessly), warm haze at the horizon, a soft sun. */
export function Sky() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        uniforms: {
          uTop: { value: new THREE.Color(SKY.top) },
          uHorizon: { value: new THREE.Color(SKY.horizon) },
          uSun: { value: SUN_DIR.clone() },
        },
        vertexShader: `varying vec3 vDir;
          void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSun; varying vec3 vDir;
          void main(){
            float h = clamp(vDir.y, -0.2, 1.0);
            vec3 col = mix(uHorizon, uTop, smoothstep(-0.01, 0.13, h));
            float sun = max(dot(normalize(vDir), uSun), 0.0);
            col += vec3(1.0, 0.72, 0.38) * (pow(sun, 10.0) * 0.22 + pow(sun, 120.0) * 0.8) * smoothstep(0.35, 0.0, h);
            gl_FragColor = vec4(col, 1.0);
          }`,
      }),
    []
  );
  return (
    <mesh material={material} renderOrder={-1}>
      <sphereGeometry args={[90, 32, 16]} />
    </mesh>
  );
}

export { SUN_DIR };
