"use client";

/**
 * A photo-scanned Hereford, brought to life without a skeleton: the vertex
 * shader bends the neck down to graze, swishes the tail, breathes, and swings
 * the legs when she walks. The same scan, darkened, plays a black Angus.
 *
 * Scan space (metres, Y up): head toward +x, tail at x ≈ -1, back at y ≈ 1.3,
 * legs centred at the HOOVES points below.
 */
import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export type CowUniforms = {
  uTime: { value: number };
  uHead: { value: number }; // neck bend, radians; ~1.25 puts the muzzle in the grass
  uWalk: { value: number }; // 0 standing, 1 full stride
  uPhase: { value: number }; // per-cow offset so nobody moves in lockstep
  uBlack: { value: number }; // 0 Hereford, 1 Angus
};

/** Shared by the colour and shadow passes so the shadow moves with the cow. */
const DEFORM = /* glsl */ `
  uniform float uTime;
  uniform float uHead;
  uniform float uWalk;
  uniform float uPhase;

  vec2 rot(vec2 p, float a) { float c = cos(a), s = sin(a); return vec2(c*p.x - s*p.y, s*p.x + c*p.y); }

  // Legs: [x, z] of each hoof column and its stride phase (diagonal pairs move together)
  const vec3 LEG0 = vec3( 0.32, -0.05, 0.0);
  const vec3 LEG1 = vec3( 0.37, -0.34, 3.14159);
  const vec3 LEG2 = vec3(-0.74, -0.08, 3.14159);
  const vec3 LEG3 = vec3(-0.94, -0.33, 0.0);

  vec3 swingLeg(vec3 p, vec3 leg, float t) {
    float d = length(p.xz - leg.xy);
    float w = (1.0 - smoothstep(0.1, 0.17, d)) * (1.0 - smoothstep(0.28, 0.66, p.y));
    float a = sin(t + leg.z) * 0.32 * uWalk * w;
    vec2 hip = vec2(leg.x, 0.68);
    vec2 q = rot(p.xy - hip, a) + hip;
    return vec3(q.x, q.y, p.z);
  }

  vec3 deform(vec3 p, inout vec3 n) {
    float t = uTime + uPhase;

    // Breathing: the barrel swells a touch
    float barrel = smoothstep(0.45, 0.75, p.y) * (1.0 - smoothstep(1.2, 1.4, p.y)) * step(-0.8, p.x) * step(p.x, 0.5);
    p.z += (p.z + 0.2) * 0.012 * sin(t * 1.25) * barrel;

    // Neck and head: bend down from the withers, more toward the muzzle
    float neck = smoothstep(0.42, 0.95, p.x) * smoothstep(0.78, 1.02, p.y + (p.x - 0.42) * 0.6);
    float chew = sin(t * 9.0) * 0.025 * smoothstep(0.9, 1.2, uHead);
    float bend = (uHead + chew + sin(t * 2.2 * 6.2832 * 0.5) * 0.02 * uWalk) * neck;
    vec2 pivot = vec2(0.45, 1.25);
    p.xy = rot(p.xy - pivot, -bend) + pivot;
    n.xy = rot(n.xy, -bend);

    // Tail swish, strongest at the switch
    float tail = smoothstep(-0.9, -0.99, p.x) * smoothstep(1.35, 0.5, p.y);
    p.z += sin(t * 1.7) * 0.09 * tail * (1.3 - p.y);

    // Walking: legs swing in diagonal pairs, the body rides a little
    if (uWalk > 0.001) {
      float stride = t * 5.4;
      p = swingLeg(p, LEG0, stride);
      p = swingLeg(p, LEG1, stride);
      p = swingLeg(p, LEG2, stride);
      p = swingLeg(p, LEG3, stride);
      p.y += abs(sin(stride)) * 0.018 * uWalk * smoothstep(0.5, 0.8, p.y);
    }
    return p;
  }
`;

function injectDeform(shader: THREE.WebGLProgramParametersWithUniforms, u: CowUniforms, withNormals: boolean) {
  Object.assign(shader.uniforms, u);
  shader.vertexShader = shader.vertexShader.replace("#include <common>", `#include <common>\n${DEFORM}`);
  if (withNormals) {
    // Normals are turned into view space before begin_vertex, so bend them (and
    // work out the moved position) at beginnormal_vertex, then use it below.
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <beginnormal_vertex>",
        "#include <beginnormal_vertex>\nvec3 deformedPos = deform(position, objectNormal);"
      )
      .replace("#include <begin_vertex>", "#include <begin_vertex>\ntransformed = deformedPos;");
  } else {
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      "#include <begin_vertex>\nvec3 deformN = vec3(0.0, 1.0, 0.0);\ntransformed = deform(transformed, deformN);"
    );
  }
}

/** One cow's look: scanned geometry and texture shared, uniforms its own. */
export function useScanCow(black: boolean) {
  const obj = useLoader(OBJLoader, "/models/scan/cow.obj");
  const map = useLoader(THREE.TextureLoader, "/models/scan/cow.jpg");

  return useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = 8;
    const geometry = (obj.children[0] as THREE.Mesh).geometry;

    const uniforms: CowUniforms = {
      uTime: { value: 0 },
      uHead: { value: 0 },
      uWalk: { value: 0 },
      uPhase: { value: Math.random() * 20 },
      uBlack: { value: black ? 1 : 0 },
    };

    const material = new THREE.MeshStandardMaterial({ map, roughness: 0.92 });
    material.onBeforeCompile = (shader) => {
      injectDeform(shader, uniforms, true);
      shader.uniforms.uBlack = uniforms.uBlack;
      shader.fragmentShader = shader.fragmentShader
        .replace("#include <common>", "#include <common>\nuniform float uBlack;")
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
          // Angus: the same coat detail, in black with a faint warm sheen
          float lum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 angus = vec3(0.016, 0.014, 0.013) + vec3(0.07, 0.058, 0.05) * lum;
          diffuseColor.rgb = mix(diffuseColor.rgb, angus, uBlack);`
        );
    };

    const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
    depth.onBeforeCompile = (shader) => injectDeform(shader, uniforms, false);

    return { geometry, material, depth, uniforms };
  }, [obj, map, black]);
}

/** Scan metres → scene units, and turn the head from +x to the group's +z. */
export const SCAN_SCALE = 0.8;

export function ScanCowMesh({ cow }: { cow: ReturnType<typeof useScanCow> }) {
  return (
    <group rotation-y={-Math.PI / 2} scale={SCAN_SCALE}>
      <mesh
        geometry={cow.geometry}
        material={cow.material}
        customDepthMaterial={cow.depth}
        castShadow
        receiveShadow
        // centre the animal on the group origin
        position={[-0.2, -0.1, 0.2]}
        frustumCulled={false}
      />
    </group>
  );
}
