import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { CanvasLoader } from './CanvasLoader';

const CyberMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 2) * 0.3;
      meshRef.current.rotation.y = time * 0.4;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = time * 0.2;
      wireframeRef.current.rotation.y = Math.cos(time / 2) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <group scale={1.8}>
        {/* Inner distorted organic core */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color="#00f0ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Outer futuristic geometric cage */}
        <mesh ref={wireframeRef}>
          <octahedronGeometry args={[1.5, 2]} />
          <meshBasicMaterial
            color="#7000ff"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
};

const OrbitingRing: React.FC = () => {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.5;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time) * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} scale={3.2}>
      <torusGeometry args={[1, 0.015, 16, 100]} />
      <meshStandardMaterial
        color="#00ff9d"
        emissive="#00ff9d"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
};

export const HeroCanvas: React.FC = () => {
  return (
    <div className="w-full h-[450px] md:h-[600px] relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#7000ff" />
        <pointLight position={[5, -5, 5]} intensity={1.2} color="#ff007f" />

        <Suspense fallback={<CanvasLoader />}>
          <CyberMesh />
          <OrbitingRing />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
            autoRotate
            autoRotateSpeed={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
