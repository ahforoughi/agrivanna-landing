"use client";

/**
 * The herd: Angus and Hereford cows and calves grazing golden-hour grassland,
 * with a virtual fence behind them that turns a walking cow back. The paddock
 * past it is resting. Cattle are Quaternius' CC0 "Cow" and "Bull" (poly.pizza),
 * coloured as Hereford and black Angus.
 *
 * No collar is ever shown here — the fence is told as an idea, not hardware.
 */
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Bloom, DepthOfField, EffectComposer, Noise, ToneMapping, Vignette } from "@react-three/postprocessing";
import { BlendFunction, ToneMappingMode } from "postprocessing";
import { Flowers, Grass, Ground, SKY, SUN_DIR, Sky } from "./Meadow";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { groundHeight, nearestOnFence } from "./terrain";
import { ScanCowMesh, useScanCow } from "./ScanCow";
import { Ripple, VirtualFence } from "./Fences";

const LIME = "#A6FF3D";

type Breed = "angus" | "hereford";
type Clip = "Eating" | "Idle" | "Idle_2" | "Idle_Headlow" | "Walk";

/**
 * What a cow does with her time. Each step plays a clip for a while; "Walk"
 * steps move her a few paces. Steps are picked by weight, so a grazer mostly
 * eats and a stander mostly watches.
 */
type Role = "grazer" | "stander" | "wanderer";
const ROUTINES: Record<Role, { clip: Clip; min: number; max: number; weight: number }[]> = {
  grazer: [
    { clip: "Eating", min: 8, max: 15, weight: 6 },
    { clip: "Idle", min: 2.5, max: 4.5, weight: 2 },
    { clip: "Idle_Headlow", min: 3, max: 6, weight: 2 },
  ],
  stander: [
    { clip: "Idle", min: 4, max: 8, weight: 4 },
    { clip: "Idle_2", min: 3, max: 5, weight: 3 },
    { clip: "Eating", min: 5, max: 9, weight: 2 },
  ],
  wanderer: [
    { clip: "Eating", min: 6, max: 11, weight: 4 },
    { clip: "Walk", min: 3, max: 6, weight: 3 },
    { clip: "Idle", min: 2, max: 4, weight: 2 },
  ],
};

function pickStep(role: Role, avoid?: Clip) {
  const steps = ROUTINES[role].filter((s) => s.clip !== avoid);
  let r = Math.random() * steps.reduce((n, s) => n + s.weight, 0);
  for (const s of steps) if ((r -= s.weight) <= 0) return s;
  return steps[0];
}

type AnimalProps = {
  breed: Breed;
  role: Role;
  /** 0–1: shifts the coat colour a touch */
  tone?: number;
  position: [number, number];
  heading: number;
  offset: number;
  scale?: number;
};

const MODEL = { angus: "/models/angus.glb", hereford: "/models/hereford.glb" };
const BASE_SCALE = 0.23;

/** Coat colours, by the model's material names. */
const COATS: Record<Breed, Record<string, string>> = {
  angus: { Main: "#090808", Main_Light: "#100E0D", Muzzle: "#151210", Horns: "#090808", Hooves: "#141110" },
  hereford: { Main: "#5E2510", Main_Light: "#EAE1CC", Muzzle: "#D9B8A2", Horns: "#DCCDA4", Hooves: "#3A2A1C" },
};

/** One animal, with its own copy of the skeleton so it animates on its own. */
function useAnimal(breed: Breed, tone = 0.5) {
  const { scene, animations } = useGLTF(MODEL[breed]);
  const object = useMemo(() => {
    const o = cloneSkinned(scene);
    o.traverse((child) => {
      const mesh = child as THREE.SkinnedMesh;
      if (!mesh.isMesh) return;
      mesh.castShadow = true;
      mesh.frustumCulled = false;
      const fix = (mat: THREE.Material) => {
        const m = (mat as THREE.MeshStandardMaterial).clone();
        m.flatShading = true;
        m.roughness = 0.86;
        m.metalness = 0;
        const coat = COATS[breed][m.name];
        if (coat) m.color.set(coat);
        // No two coats quite alike: a little lighter or redder, cow to cow
        if (m.name === "Main") m.color.offsetHSL((tone - 0.5) * 0.02, (tone - 0.5) * 0.15, (tone - 0.5) * 0.05);
        // A soft golden rim where the low sun catches the silhouette
        m.onBeforeCompile = (shader) => {
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
            float rim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 2.6);
            totalEmissiveRadiance += vec3(1.0, 0.78, 0.48) * rim * ${breed === "angus" ? "0.12" : "0.14"};`
          );
        };
        return m;
      };
      mesh.material = Array.isArray(mesh.material) ? mesh.material.map(fix) : fix(mesh.material);
    });
    return o;
  }, [scene, breed, tone]);
  return { object, animations };
}

/** Soft darkening under an animal, so it sits in the grass instead of on it. */
const groundShade = (() => {
  if (typeof document === "undefined") return null;
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, "rgba(0,0,0,0.75)");
  grd.addColorStop(0.55, "rgba(0,0,0,0.35)");
  grd.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
})();

function GroundShade() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, 0.25, 0.2]} scale={[3.6, 8.6, 1]} renderOrder={1}>
      <planeGeometry />
      <meshBasicMaterial map={groundShade} transparent depthWrite={false} opacity={0.6} />
    </mesh>
  );
}

/** Plays one clip at a time, cross-fading between them. */
function useClips(actions: ReturnType<typeof useAnimations>["actions"]) {
  const current = useRef<string | null>(null);
  return (name: string, fade = 0.6) => {
    if (current.current === name) return;
    const next = actions[name];
    if (!next) return;
    next.reset().setEffectiveTimeScale(0.85 + Math.random() * 0.25).fadeIn(fade).play();
    if (current.current) actions[current.current]?.fadeOut(fade);
    current.current = name;
  };
}

/**
 * Which cattle the scene uses. "scan": the photo-scanned Hereford by the Center
 * for Digital Humanities, University of Arizona (used with their written
 * permission, 13 Oct 2026), posed in the shader. "lowpoly": Quaternius' CC0
 * animated cow and bull.
 */
const CATTLE = "scan" as "scan" | "lowpoly";

/** How the scan holds itself for each clip the herd logic asks for. */
const SCAN_POSES: Record<string, { head: number; walk: number }> = {
  Eating: { head: 1.25, walk: 0 },
  Idle: { head: 0.02, walk: 0 },
  Idle_2: { head: 0.35, walk: 0 },
  Idle_Headlow: { head: 0.8, walk: 0 },
  Walk: { head: 0.3, walk: 1 },
  Idle_HitReact_Left: { head: -0.15, walk: 0 },
  Idle_HitReact_Right: { head: -0.15, walk: 0 },
};

type Body = { node: React.ReactNode; play: (clip: string, fade?: number) => void; scale: number };

function useLowPolyBody(breed: Breed, tone: number, group: React.RefObject<THREE.Group | null>, offset: number): Body {
  const { object, animations } = useAnimal(breed, tone);
  const { actions } = useAnimations(animations, group);
  const clips = useClips(actions);
  const started = useRef(false);
  const play = (clip: string, fade = 0.6) => {
    clips(clip, fade);
    // Start each cow at a different point in her first clip
    if (!started.current) {
      started.current = true;
      const a = actions[clip];
      if (a) a.time = offset * a.getClip().duration;
    }
  };
  return { node: <primitive object={object} />, play, scale: BASE_SCALE };
}

function useScanBody(breed: Breed, _tone: number, _group: React.RefObject<THREE.Group | null>, offset: number): Body {
  const cow = useScanCow(breed === "angus");
  const pose = useRef({ ...SCAN_POSES.Eating, rate: 1.4 });
  useEffect(() => {
    cow.uniforms.uPhase.value = offset * 20;
  }, [cow, offset]);
  useFrame((state, dt) => {
    const u = cow.uniforms;
    dt = Math.min(dt, 0.05);
    u.uHead.value = approach(u.uHead.value, pose.current.head, pose.current.rate, dt);
    u.uWalk.value = approach(u.uWalk.value, pose.current.walk, 3, dt);
    u.uTime.value = state.clock.elapsedTime;
  });
  const play = (clip: string, fade = 0.6) => {
    const p = SCAN_POSES[clip] ?? SCAN_POSES.Idle;
    // A startle is quick; everything else eases over about the clip fade
    pose.current = { ...p, rate: clip.startsWith("Idle_HitReact") ? 6 : fade === 0 ? 50 : 1.4 };
  };
  return { node: <ScanCowMesh cow={cow} />, play, scale: 1 };
}

const useBody = CATTLE === "scan" ? useScanBody : useLowPolyBody;

// Where the herd lives: wanderers turn back toward the middle near the edges
const PASTURE = { minX: 5.2, maxX: 11, minZ: -5.6, maxZ: 5, cx: 7.5, cz: 0 };

function Cow({ breed, role, tone = 0.5, position, heading, offset, scale = 1 }: AnimalProps) {
  const group = useRef<THREE.Group>(null);
  const body = useBody(breed, tone, group, offset);
  const play = body.play;
  const mind = useRef({
    pos: new THREE.Vector2(position[0], position[1]),
    heading,
    turn: 0,
    clip: "Eating" as Clip,
    timer: 0,
    walk: 0,
  });

  useEffect(() => {
    const m = mind.current;
    const first = pickStep(role);
    m.clip = first.clip === "Walk" ? "Eating" : first.clip;
    m.timer = first.min + offset * (first.max - first.min);
    play(m.clip, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((_, dt) => {
    const m = mind.current;
    const g = group.current;
    if (!g) return;
    dt = Math.min(dt, 0.05);
    m.timer -= dt;
    if (m.timer <= 0) {
      const step = pickStep(role, m.clip);
      m.clip = step.clip;
      m.timer = step.min + Math.random() * (step.max - step.min);
      m.turn = (Math.random() - 0.5) * 0.5;
      play(m.clip);
    }

    // Walking: a slow amble, drifting, steering home near the edges
    m.walk = approach(m.walk, m.clip === "Walk" ? 1 : 0, 2.5, dt);
    if (m.walk > 0.01) {
      const { minX, maxX, minZ, maxZ, cx, cz } = PASTURE;
      const out = m.pos.x < minX || m.pos.x > maxX || m.pos.y < minZ || m.pos.y > maxZ;
      const nearFence = nearestOnFence(m.pos.x, m.pos.y).dist < 2.2;
      if (out || nearFence) {
        const home = Math.atan2(cx - m.pos.x, cz - m.pos.y);
        m.heading += Math.atan2(Math.sin(home - m.heading), Math.cos(home - m.heading)) * dt * 0.9;
      } else {
        m.heading += m.turn * dt;
      }
      const speed = 0.32 * m.walk * scale;
      m.pos.x += Math.sin(m.heading) * speed * dt;
      m.pos.y += Math.cos(m.heading) * speed * dt;
    }

    g.position.set(m.pos.x, groundHeight(m.pos.x, m.pos.y), m.pos.y);
    g.rotation.y = m.heading;
  });

  return (
    <group ref={group} scale={scale}>
      <group scale={body.scale}>{body.node}</group>
      <group scale={BASE_SCALE}>
        <GroundShade />
      </group>
    </group>
  );
}

/** Eases a value toward its target at a rate that doesn't depend on frame rate. */
function approach(v: number, target: number, rate: number, dt: number) {
  return v + (target - v) * (1 - Math.exp(-rate * dt));
}

/**
 * The cow that tests the fence: walks toward the line, it flares, a ripple
 * spreads, she startles, turns and walks back to graze — then again.
 */
function FenceTester() {
  const group = useRef<THREE.Group>(null);
  const body = useBody("hereford", 0.5, group, 0);
  const play = body.play;
  const brain = useRef({
    phase: "walk" as "walk" | "startle" | "turn" | "graze",
    pos: new THREE.Vector2(3.6, -3.6),
    heading: 0,
    target: 0,
    timer: 0,
  });

  // Head for the closest point on the fence
  const aimAtFence = () => {
    const b = brain.current;
    const f = nearestOnFence(b.pos.x, b.pos.y);
    return Math.atan2(f.x - b.pos.x, f.z - b.pos.y);
  };

  useEffect(() => {
    brain.current.heading = aimAtFence();
    play("Walk", 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((_, dt) => {
    const b = brain.current;
    const g = group.current;
    if (!g) return;
    dt = Math.min(dt, 0.05);
    b.timer += dt;
    const stepForward = (speed: number) => {
      b.pos.x += Math.sin(b.heading) * speed * dt;
      b.pos.y += Math.cos(b.heading) * speed * dt;
    };

    if (b.phase === "walk") {
      stepForward(0.42);
      if (nearestOnFence(b.pos.x, b.pos.y).dist < 1.15) {
        // She reached the line: cue, flare, ripple
        const nose = new THREE.Vector2(b.pos.x + Math.sin(b.heading) * 0.7, b.pos.y + Math.cos(b.heading) * 0.7);
        window.dispatchEvent(new CustomEvent("herd:fence-touch", { detail: { x: nose.x, z: nose.y } }));
        b.phase = "startle";
        b.timer = 0;
        b.target = b.heading + Math.PI * (0.85 + Math.random() * 0.25);
        play(Math.random() < 0.5 ? "Idle_HitReact_Left" : "Idle_HitReact_Right", 0.2);
      }
    } else if (b.phase === "startle") {
      if (b.timer > 0.6) {
        b.phase = "turn";
        b.timer = 0;
        play("Walk", 0.4);
      }
    } else if (b.phase === "turn") {
      b.heading = approach(b.heading, b.target, 1.5, dt);
      stepForward(0.36);
      if (b.timer > 3.6) {
        b.phase = "graze";
        b.timer = 0;
        play("Eating");
      }
    } else if (b.timer > 7.5) {
      b.heading = aimAtFence();
      b.phase = "walk";
      b.timer = 0;
      play("Walk");
    }

    g.position.set(b.pos.x, groundHeight(b.pos.x, b.pos.y), b.pos.y);
    g.rotation.y = b.heading;
  });

  return (
    <group ref={group}>
      <group scale={body.scale}>{body.node}</group>
      <group scale={BASE_SCALE}>
        <GroundShade />
      </group>
    </group>
  );
}

// Loose rows across the middle and right of the frame, front to back. The
// left side stays open grass so the headline reads cleanly. Everyone stays on
// the near side of the virtual fence.
const HERD: AnimalProps[] = [
  // Front
  { breed: "hereford", role: "grazer", tone: 0.4, position: [2.6, 4.4], heading: -0.4, offset: 0.3, scale: 1.03 },
  { breed: "hereford", role: "stander", tone: 0.7, position: [3.4, 5.0], heading: 1.2, offset: 0.62, scale: 0.55 },
  { breed: "angus", role: "stander", tone: 0.3, position: [5.4, 3.6], heading: 2.5, offset: 0.45 },
  // Middle
  { breed: "angus", role: "grazer", tone: 0.5, position: [4.6, 1.0], heading: 0.3, offset: 0.7 },
  { breed: "hereford", role: "grazer", tone: 0.25, position: [7.4, 1.2], heading: -1.6, offset: 0.38 },
  { breed: "angus", role: "wanderer", tone: 0.8, position: [7.0, -2.0], heading: 2.0, offset: 0.6 },
  // Back, in front of the fence; the lane from the camera to the fence cow stays clear
  { breed: "hereford", role: "stander", tone: 0.35, position: [7.2, -5.0], heading: -2.2, offset: 0.27 },
  { breed: "hereford", role: "grazer", tone: 0.6, position: [8.2, -4.3], heading: 2.6, offset: 0.5, scale: 0.55 },
  { breed: "angus", role: "grazer", tone: 0.6, position: [10.0, -3.2], heading: 2.4, offset: 0.85, scale: 0.95 },
];





/**
 * Slow drift, a touch of mouse parallax, and a push-in as the page scrolls.
 * Phones (tall screens) get their own framing: pulled back, looking down, so
 * the herd sits in the top half above the headline.
 */
function CameraRig() {
  const { camera, pointer, size } = useThree();
  const look = useMemo(() => new THREE.Vector3(), []);
  useFrame((state, dt) => {
    const cam = camera as THREE.PerspectiveCamera;
    const portrait = size.width / size.height < 0.9;
    const fov = portrait ? 46 : 34;
    if (cam.fov !== fov) {
      cam.fov = fov;
      cam.updateProjectionMatrix();
    }
    const t = state.clock.elapsedTime;
    const scroll = Math.min(1, window.scrollY / window.innerHeight);
    const k = 1 - Math.pow(0.001, dt);
    const px = portrait ? 0 : pointer.x;
    const py = portrait ? 0 : pointer.y;
    const tx = (portrait ? 5.2 : 1.5) + Math.sin(t * 0.07) * (portrait ? 0.5 : 1.0) + px * 0.6;
    const ty = (portrait ? 5.4 : 3.1) + py * 0.25 - scroll * 0.9;
    const tz = (portrait ? 18.5 : 12.5) - scroll * 3.5;
    cam.position.x += (tx - cam.position.x) * k;
    cam.position.y += (ty - cam.position.y) * k;
    cam.position.z += (tz - cam.position.z) * k;
    if (portrait) look.set(cam.position.x, -3.1, -1.5);
    else look.set(1.2 + cam.position.x * 0.5, 0.7, -3);
    cam.lookAt(look);
  });
  return null;
}

export default function HerdScene({ animate = true, lite = false }: { animate?: boolean; lite?: boolean }) {
  return (
    <Canvas
      shadows={lite ? true : "soft"}
      dpr={lite ? [1, 1.5] : [1, 1.75]}
      frameloop={animate ? "always" : "demand"}
      camera={{ position: [2.4, 3.1, 12.5], fov: 34, near: 0.1, far: 120 }}
      gl={{ antialias: false, powerPreference: "high-performance", toneMapping: THREE.NoToneMapping }}
    >
      <fog attach="fog" args={[SKY.haze, 18, 60]} />

      {/* Low sun behind and left of the herd: backlights the grass tips and rims the coats */}
      <hemisphereLight args={["#E9DCC2", "#2A3018", 0.75]} />
      <directionalLight
        position={SUN_DIR.clone().multiplyScalar(30).toArray()}
        intensity={3.4}
        color="#FFD7A3"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-18}
        shadow-camera-right={18}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
        shadow-camera-far={80}
        shadow-bias={-0.0004}
      />
      {/* Soft warm fill from the front so faces don't go to silhouette */}
      <directionalLight position={[-6, 5, 12]} intensity={1.8} color="#FFE6C4" />
      <directionalLight position={[12, 2, -6]} intensity={0.35} color={LIME} />
      <Sky />

      <Suspense fallback={null}>
        <Ground />
        <Grass clumps={lite ? 3000 : 5400} perClump={lite ? 14 : 20} />
        <Flowers count={lite ? 700 : 1400} />
        <VirtualFence />
        <Ripple />
        {HERD.map((a, i) => (
          <Cow key={i} {...a} />
        ))}
        <FenceTester />
      </Suspense>

      {animate && <CameraRig />}

      {/* Camera finish: a little bloom on the sun and fence, darker edges, fine film grain */}
      <EffectComposer multisampling={0}>
        {/* Focus on the herd: near grass and the far hills fall gently soft */}
        {/* (skipped on phones: the most expensive effect, least visible on a small screen) */}
        {lite ? <></> : <DepthOfField target={[3, 0.6, -2]} worldFocusRange={17} bokehScale={1.5} height={540} />}
        <Bloom mipmapBlur intensity={0.55} luminanceThreshold={0.62} luminanceSmoothing={0.2} />
        <Vignette offset={0.28} darkness={0.62} />
        <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} opacity={0.22} />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </Canvas>
  );
}

if (CATTLE === "lowpoly") {
  useGLTF.preload(MODEL.angus);
  useGLTF.preload(MODEL.hereford);
}
