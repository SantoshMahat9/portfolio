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
  const cubeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Subtle mouse parallax on the whole floating group
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        state.pointer.x * 0.35,
        2.5,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.25,
        2.5,
        delta
      );
    }

    // Individual independent rotations
    if (torusRef1.current) {
      torusRef1.current.rotation.x += delta * 0.4;
      torusRef1.current.rotation.y += delta * 0.6;
    }
    if (torusRef2.current) {
      torusRef2.current.rotation.z += delta * 0.3;
      torusRef2.current.rotation.x -= delta * 0.5;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.y += delta * 0.5;
      icosaRef.current.rotation.z += delta * 0.3;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x += delta * 0.6;
      octaRef.current.rotation.y -= delta * 0.4;
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.35;
      cubeRef.current.rotation.x += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Chrome Ring - Top Left */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={torusRef1} position={[-4.5, 2.5, -1]} scale={0.75}>
          <torusGeometry args={[1.2, 0.28, 32, 64]} />
          <meshStandardMaterial
            color="#FFFFFF"
            metalness={0.95}
            roughness={0.1}
            emissive="#FF4D1C"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>

      {/* Floating Orange Core Polyhedron - Top Right */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={icosaRef} position={[4.8, 2.2, -1.5]} scale={0.85}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#FF4D1C"
            metalness={0.8}
            roughness={0.2}
            emissive="#E93616"
            emissiveIntensity={0.4}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Floating Yellow / Gold Octahedron - Bottom Left */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
        <mesh ref={octaRef} position={[-4.2, -2.2, -0.5]} scale={0.7}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#FFC247"
            metalness={0.9}
            roughness={0.15}
            emissive="#FFC247"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Futuristic Chrome Ring - Bottom Right */}
      <Float speed={2.8} rotationIntensity={1.4} floatIntensity={1.6}>
        <mesh ref={torusRef2} position={[4.4, -2.4, -1]} scale={0.65}>
          <torusGeometry args={[1.4, 0.15, 24, 48]} />
          <meshStandardMaterial
            color="#E0E0E0"
            metalness={0.98}
            roughness={0.08}
            emissive="#FF4D1C"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>

      {/* Floating Tech Cube - Mid Right */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1}>
        <mesh ref={cubeRef} position={[5.2, 0.2, -2.5]} scale={0.6}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#1F1F1F"
            metalness={0.85}
            roughness={0.2}
            emissive="#FF4D1C"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Tech Data Ring - Background Horizon */}
      <mesh position={[0, -0.2, -4]} rotation={[-Math.PI / 3, 0, 0]}>
        <ringGeometry args={[6.2, 6.28, 80]} />
        <meshBasicMaterial color="#FF4D1C" opacity={0.3} transparent />
      </mesh>
      <mesh position={[0, -0.2, -4.1]} rotation={[-Math.PI / 3, 0, 0]}>
        <ringGeometry args={[7.4, 7.45, 80]} />
        <meshBasicMaterial color="#FFC247" opacity={0.2} transparent />
      </mesh>
    </group>
  );
}
