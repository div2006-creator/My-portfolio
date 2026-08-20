import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const SignalNodeMesh: React.FC = () => {
  const outerMeshRef = useRef<THREE.Mesh>(null!);
  const innerCoreRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.y = time * 0.25;
      outerMeshRef.current.rotation.x = Math.sin(time * 0.2) * 0.15;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = -time * 0.4;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.3;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.3) * 0.1;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.35, delta * 2.5);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.35, delta * 2.5);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.2}>
        <group scale={1.4}>
          {/* Outer Geometric Crystal Cage */}
          <mesh ref={outerMeshRef}>
            <octahedronGeometry args={[1.2, 1]} />
            <meshStandardMaterial
              color="#38bdf8"
              wireframe
              emissive="#0284c7"
              emissiveIntensity={0.4}
            />
          </mesh>

          {/* Inner Glowing Core Prism */}
          <mesh ref={innerCoreRef}>
            <icosahedronGeometry args={[0.6, 0]} />
            <meshPhysicalMaterial
              color="#6366f1"
              roughness={0.1}
              metalness={0.8}
              clearcoat={1}
              transmission={0.3}
            />
          </mesh>

          {/* Orbital Signal Ring */}
          <mesh ref={ringRef}>
            <torusGeometry args={[1.7, 0.012, 16, 80]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

export const ContactCanvas: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none opacity-60 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 6, 5]} intensity={1.2} color="#f0f9ff" />
        <pointLight position={[-5, -5, -3]} intensity={0.8} color="#818cf8" />

        <Sparkles count={45} scale={6} size={2.2} speed={0.35} opacity={0.55} color="#38bdf8" />

        <Suspense fallback={null}>
          <SignalNodeMesh />
        </Suspense>
      </Canvas>
    </div>
  );
};
