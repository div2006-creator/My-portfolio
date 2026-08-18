import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const TechSphereNode: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.rotation.x = Math.sin(time * 0.25) * 0.2;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * 0.2;
      outerRingRef.current.rotation.y = Math.cos(time * 0.3) * 0.2;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.3, delta * 2);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.3, delta * 2);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <group scale={1.3}>
          {/* Inner Geodesic Wireframe Node */}
          <mesh ref={meshRef}>
            <octahedronGeometry args={[1, 2]} />
            <meshStandardMaterial
              color="#38bdf8"
              wireframe
              emissive="#0284c7"
              emissiveIntensity={0.5}
            />
          </mesh>

          {/* Outer Orbital Lattice Ring */}
          <mesh ref={outerRingRef}>
            <torusGeometry args={[1.5, 0.015, 16, 80]} />
            <meshStandardMaterial
              color="#818cf8"
              emissive="#6366f1"
              emissiveIntensity={0.4}
            />
          </mesh>

          {/* Glowing Center Core */}
          <mesh>
            <sphereGeometry args={[0.35, 16, 16]} />
            <meshStandardMaterial
              color="#38bdf8"
              roughness={0.1}
              metalness={0.9}
              emissive="#38bdf8"
              emissiveIntensity={0.6}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

export const AboutCanvas: React.FC = () => {
  return (
    <div className="w-full h-[220px] sm:h-[260px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 4]} intensity={1.2} color="#f0f9ff" />
        <pointLight position={[-4, -4, -2]} intensity={0.8} color="#818cf8" />

        <Sparkles count={35} scale={4} size={2} speed={0.3} opacity={0.5} color="#38bdf8" />

        <Suspense fallback={null}>
          <TechSphereNode />
        </Suspense>
      </Canvas>
    </div>
  );
};
