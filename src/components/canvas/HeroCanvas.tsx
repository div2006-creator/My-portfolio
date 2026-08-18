import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { CanvasLoader } from './CanvasLoader';

// Interactive Central Core Mesh
const TechCore: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const innerMeshRef = useRef<THREE.Mesh>(null!);
  const outerCageRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.pointer; // Mouse position [-1 to 1]

    // Automatic smooth rotation
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y = time * 0.25;
      innerMeshRef.current.rotation.x = Math.sin(time * 0.2) * 0.15;
    }

    if (outerCageRef.current) {
      outerCageRef.current.rotation.y = -time * 0.15;
      outerCageRef.current.rotation.z = time * 0.1;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.4) * 0.1;
      ring1Ref.current.rotation.z = time * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = time * 0.35;
      ring2Ref.current.rotation.x = Math.PI / 4 + Math.cos(time * 0.3) * 0.1;
    }

    // Subtle smooth mouse tracking tilt
    if (groupRef.current) {
      const targetRotationY = x * 0.35;
      const targetRotationX = -y * 0.35;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, delta * 3);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, delta * 3);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <group scale={1.65}>
          {/* Inner Solid Metallic Glass Crystal Core */}
          <mesh ref={innerMeshRef}>
            <icosahedronGeometry args={[1, 1]} />
            <meshPhysicalMaterial
              color="#0284c7"
              roughness={0.15}
              metalness={0.7}
              clearcoat={1}
              clearcoatRoughness={0.1}
              transmission={0.2}
              ior={1.5}
              thickness={0.5}
            />
          </mesh>

          {/* Outer Geometric Wireframe Structural Cage */}
          <mesh ref={outerCageRef}>
            <dodecahedronGeometry args={[1.4, 0]} />
            <meshStandardMaterial
              color="#6366f1"
              wireframe
              transparent
              opacity={0.35}
              emissive="#4338ca"
              emissiveIntensity={0.4}
            />
          </mesh>

          {/* Outer Orbital Ring 1 */}
          <mesh ref={ring1Ref}>
            <torusGeometry args={[1.9, 0.012, 16, 100]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={0.6}
            />
          </mesh>

          {/* Outer Orbital Ring 2 */}
          <mesh ref={ring2Ref}>
            <torusGeometry args={[2.2, 0.008, 16, 100]} />
            <meshStandardMaterial
              color="#818cf8"
              emissive="#818cf8"
              emissiveIntensity={0.5}
              wireframe
            />
          </mesh>

          {/* Core Node Accent Dots */}
          {[
            [0, 1.4, 0],
            [0, -1.4, 0],
            [1.4, 0, 0],
            [-1.4, 0, 0],
          ].map((pos, idx) => (
            <mesh key={idx} position={pos as [number, number, number]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color="#38bdf8" />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
};

export const HeroCanvas: React.FC = () => {
  return (
    <div className="w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-[600px] relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Studio Lighting Setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 8, 6]} intensity={1.4} color="#f0f9ff" />
        <pointLight position={[-6, -6, -4]} intensity={0.8} color="#818cf8" />
        <pointLight position={[0, 4, 4]} intensity={1} color="#38bdf8" />

        {/* Floating Particles Field */}
        <Sparkles
          count={70}
          scale={7}
          size={2.5}
          speed={0.4}
          opacity={0.6}
          color="#38bdf8"
        />

        <Suspense fallback={<CanvasLoader />}>
          <TechCore />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.6}
            minPolarAngle={Math.PI / 2.4}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
