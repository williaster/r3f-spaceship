import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { Leva, useControls } from 'leva';
import AnimatedStars from './03-animated-stars-only';

const Demo = () => (
  <>
    <Canvas>
      <Scene />
    </Canvas>
    <Leva titleBar={false} />
  </>
);

const Scene = () => {
  const { background, speed } = useControls({
    background: '#b483b4',
    speed: { value: 0, min: 0, max: 200 },
  });

  return (
    <>
      <color attach="background" args={[background]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Rocket />
      <AnimatedStars speed={speed} />
    </>
  );
};

const Rocket = () => (
  <mesh>
    <coneGeometry
      args={[0.75, 2, 30]} // [radius, height, numSegments]
    />
    <meshStandardMaterial color="#ff8474" />
  </mesh>
);

export default Demo;
