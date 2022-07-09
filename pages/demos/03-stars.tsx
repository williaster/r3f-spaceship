import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import Stars from './03-stars-only';

const Demo = () => (
  <>
    <Canvas>
      <Scene />
    </Canvas>
    <Leva titleBar={false} />
  </>
);

const Scene = () => {
  const { background } = useControls({
    background: '#b483b4',
  });

  return (
    <>
      <color attach="background" args={[background]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Rocket />
      <Stars />
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
