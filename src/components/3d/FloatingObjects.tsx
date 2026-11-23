"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function FloatingObjects() {
  const torusRef1 = useRef<THREE.Mesh>(null);
  const torusRef2 = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const shardsRef = useRef<THREE.InstancedMesh>(null);

  // Generate 24 floating bullion / encrypted data shards in perimeter
  const shardCount = 24;
  const shardData = useMemo(() => {
    const temp = [];
    for (let i = 0; i < shardCount; i++) {
      // Keep perimeter positions (x < -4.5 or x > 4.5) to never overlap central hero content
      const side = i % 2 === 0 ? 1 : -1;
      const x = side * (4.8 + Math.random() * 2.5);
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 3 - 1;
      const rotSpeed = (Math.random() + 0.2) * 0.8;
      temp.push({ x, y, z, rotSpeed });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    // Subtle mouse parallax on the whole floating group
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        state.pointer.x * 0.2,
        2.0,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.15,
        2.0,
        delta
      );
    }

    if (torusRef1.current) {
      torusRef1.current.rotation.x += delta * 0.35;
      torusRef1.current.rotation.y += delta * 0.45;
    }
    if (torusRef2.current) {
      torusRef2.current.rotation.z += delta * 0.25;
      torusRef2.current.rotation.x -= delta * 0.35;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.y += delta * 0.4;
      icosaRef.current.rotation.z += delta * 0.25;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x += delta * 0.45;
      octaRef.current.rotation.y -= delta * 0.3;
    }

    // Animate shards
    if (shardsRef.current) {
      const dummy = new THREE.Object3D();
      const time = state.clock.getElapsedTime();
      shardData.forEach((s, i) => {
        dummy.position.set(
          s.x,
          s.y + Math.sin(time * 0.8 + i) * 0.25,
          s.z + Math.cos(time * 0.6 + i) * 0.15
        );
        dummy.rotation.set(
          time * s.rotSpeed * 0.5,
          time * s.rotSpeed * 0.7,
          time * s.rotSpeed * 0.3
        );
        dummy.scale.setScalar(0.08 + (i % 3) * 0.04);
        dummy.updateMatrix();
        shardsRef.current?.setMatrixAt(i, dummy.matrix);
      });
      shardsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Dark Steel Ring with Crimson Emissive Rim - Top Left */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
        <mesh ref={torusRef1} position={[-6.2, 2.8, -1.5]} scale={0.65}>
          <torusGeometry args={[1.2, 0.2, 24, 48]} />
          <meshStandardMaterial
            color="#141414"
            metalness={0.9}
            roughness={0.15}
            emissive="#E50914"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Floating Crimson Core Vault Polyhedron - Top Right */}
      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.2}>
        <mesh ref={icosaRef} position={[6.4, 2.5, -2]} scale={0.7}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#E50914"
            metalness={0.85}
            roughness={0.2}
            emissive="#720D12"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* Floating Tactical Octahedron - Far bottom-left */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1}>
        <mesh ref={octaRef} position={[-6.0, -2.6, -1]} scale={0.55}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#1F1F1F"
            metalness={0.92}
            roughness={0.15}
            emissive="#E50914"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Futuristic Security Laser Ring - Far bottom-right */}
      <Float speed={2} rotationIntensity={0.9} floatIntensity={1.1}>
        <mesh ref={torusRef2} position={[6.2, -2.8, -1.5]} scale={0.55}>
          <torusGeometry args={[1.3, 0.12, 24, 48]} />
          <meshStandardMaterial
            color="#E50914"
            metalness={0.98}
            roughness={0.08}
            emissive="#E50914"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* Perimeter Shards / Bullion Instanced Mesh */}
      <instancedMesh ref={shardsRef} args={[undefined, undefined, shardCount]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#ffd700"
          metalness={0.95}
          roughness={0.1}
          emissive="#720D12"
          emissiveIntensity={0.2}
        />
      </instancedMesh>

      {/* Subtle Background Red Target Rings in deep z space */}
      <mesh position={[0, 0, -5]} rotation={[-Math.PI / 3.5, 0, 0]}>
        <ringGeometry args={[7.2, 7.24, 80]} />
        <meshBasicMaterial color="#E50914" opacity={0.2} transparent />
      </mesh>
      <mesh position={[0, 0, -5.1]} rotation={[-Math.PI / 3.5, 0, 0]}>
        <ringGeometry args={[8.4, 8.44, 80]} />
        <meshBasicMaterial color="#720D12" opacity={0.12} transparent />
      </mesh>
    </group>
  );
}
