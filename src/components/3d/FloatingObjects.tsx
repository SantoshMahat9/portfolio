"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function FloatingObjects() {
  const torusRef1 = useRef<THREE.Mesh>(null);
  const torusRef2 = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

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
  });

  return (
    <group ref={groupRef}>
      {/* Floating Chrome Ring - Pushed far top-left in periphery */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
        <mesh ref={torusRef1} position={[-6.2, 2.8, -1.5]} scale={0.65}>
          <torusGeometry args={[1.2, 0.22, 24, 48]} />
          <meshStandardMaterial
            color="#FFFFFF"
            metalness={0.95}
            roughness={0.1}
            emissive="#FF4D1C"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Floating Orange Core Polyhedron - Pushed far top-right */}
      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.2}>
        <mesh ref={icosaRef} position={[6.4, 2.5, -2]} scale={0.7}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#FF4D1C"
            metalness={0.85}
            roughness={0.2}
            emissive="#E93616"
            emissiveIntensity={0.35}
          />
        </mesh>
      </Float>

      {/* Floating Amber Octahedron - Far bottom-left */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1}>
        <mesh ref={octaRef} position={[-6.0, -2.6, -1]} scale={0.55}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#FFC247"
            metalness={0.9}
            roughness={0.15}
            emissive="#FFC247"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>

      {/* Futuristic Chrome Ring - Far bottom-right */}
      <Float speed={2} rotationIntensity={0.9} floatIntensity={1.1}>
        <mesh ref={torusRef2} position={[6.2, -2.8, -1.5]} scale={0.55}>
          <torusGeometry args={[1.3, 0.14, 24, 48]} />
          <meshStandardMaterial
            color="#E0E0E0"
            metalness={0.98}
            roughness={0.08}
            emissive="#FF4D1C"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>

      {/* Subtle Background Ring - Deep in z space */}
      <mesh position={[0, 0, -5]} rotation={[-Math.PI / 3.5, 0, 0]}>
        <ringGeometry args={[7.2, 7.25, 80]} />
        <meshBasicMaterial color="#FF4D1C" opacity={0.15} transparent />
      </mesh>
    </group>
  );
}
