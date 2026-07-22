"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Nodes() {
  const group = useRef<THREE.Group>(null);
  const count = 22;

  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.4;
      arr.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      );
    }
    return arr;
  }, []);

  const lines = useMemo(() => {
    const segs: [THREE.Vector3, THREE.Vector3][] = [];
    points.forEach((p, i) => {
      const dists = points
        .map((q, j) => ({ j, d: p.distanceTo(q) }))
        .filter((x) => x.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      dists.forEach((d) => segs.push([p, points[d.j]]));
    });
    return segs;
  }, [points]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group}>
      {lines.map((seg, i) => {
        const positions = new Float32Array([...seg[0].toArray(), ...seg[1].toArray()]);
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
                count={2}
                array={positions}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#2563EB" transparent opacity={0.18} />
          </line>
        );
      })}
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#7C3AED" : "#2563EB"} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      className="!absolute inset-0"
    >
      <Nodes />
    </Canvas>
  );
}
