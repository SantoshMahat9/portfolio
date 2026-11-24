"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface FloatingObjectsProps {
  isMobile?: boolean;
}

export function FloatingObjects({ isMobile = false }: FloatingObjectsProps) {
  const torusRef1 = useRef<THREE.Mesh>(null);
  const torusRef2 = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const shardsRef = useRef<THREE.InstancedMesh>(null);

  // Dynamic shard count: 8 on mobile to protect GPU, 22 on desktop
  const shardCount = isMobile ? 8 : 22;

  const shardData = useMemo(() => {
    const temp = [];
    for (let i = 0; i < shardCount; i++) {
      // Perimeter positions so shards never collide with central hero typography
      const side = i % 2 === 0 ? 1 : -1;
      const x = side * (4.8 + Math.random() * 2.5);
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 3 - 1;
      const rotSpeed = (Math.random() + 0.2) * 0.7;
      temp.push({ x, y, z, rotSpeed });
    }
    return temp;
  }, [shardCount]);

  // Clean disposal of three.js resources on unmount
  useEffect(() => {
    return () => {
      // Clean up meshes and instanced mesh matrices
      [torusRef1, torusRef2, icosaRef, octaRef].forEach((ref) => {
        if (ref.current) {
          ref.current.geometry?.dispose();
          if (Array.isArray(ref.current.material)) {
            ref.current.material.forEach((m) => m.dispose());
          } else {
            ref.current.material?.dispose();
          }
        }
      });
      if (shardsRef.current) {
        shardsRef.current.geometry?.dispose();
        if (Array.isArray(shardsRef.current.material)) {
          shardsRef.current.material.forEach((m) => m.dispose());
        } else {
          shardsRef.current.material?.dispose();
        }
      }
    };
  }, []);

  useFrame((state, delta) => {
    // Clamp delta to prevent erratic jumps on frame drops
    const clampedDelta = Math.min(delta, 0.05);

    // Subtle pointer parallax on group
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        state.pointer.x * (isMobile ? 0.08 : 0.18),
        2.0,
        clampedDelta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -state.pointer.y * (isMobile ? 0.06 : 0.12),
        2.0,
        clampedDelta
      );
    }

    if (torusRef1.current) {
      torusRef1.current.rotation.x += clampedDelta * 0.35;
      torusRef1.current.rotation.y += clampedDelta * 0.45;
    }
    if (torusRef2.current) {
      torusRef2.current.rotation.z += clampedDelta * 0.25;
      torusRef2.current.rotation.x -= clampedDelta * 0.35;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.y += clampedDelta * 0.4;
      icosaRef.current.rotation.z += clampedDelta * 0.25;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x += clampedDelta * 0.45;
      octaRef.current.rotation.y -= clampedDelta * 0.3;
    }

    // Animate bullion shards
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
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.9}>
        <mesh ref={torusRef1} position={[-6.2, 2.8, -1.5]} scale={0.65}>
          <torusGeometry args={[1.2, 0.2, 20, 36]} />
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
      <Float speed={2.0} rotationIntensity={0.9} floatIntensity={1.0}>
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
      <Float speed={1.6} rotationIntensity={0.7} floatIntensity={0.8}>
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
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.9}>
        <mesh ref={torusRef2} position={[6.2, -2.8, -1.5]} scale={0.55}>
          <torusGeometry args={[1.3, 0.12, 20, 36]} />
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

      {/* Subtle Background Target Rings in deep z space */}
      <mesh position={[0, 0, -5]} rotation={[-Math.PI / 3.5, 0, 0]}>
        <ringGeometry args={[7.2, 7.24, 64]} />
        <meshBasicMaterial color="#E50914" opacity={0.2} transparent />
      </mesh>
      <mesh position={[0, 0, -5.1]} rotation={[-Math.PI / 3.5, 0, 0]}>
        <ringGeometry args={[8.4, 8.44, 64]} />
        <meshBasicMaterial color="#720D12" opacity={0.12} transparent />
      </mesh>
    </group>
  );
}
