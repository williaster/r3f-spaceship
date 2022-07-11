import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import AnimatedStars from './03-animated-stars-only';
import RocketSmoke from './04-smoke-only';

const Demo = ({ showControls = true }) => (
  <>
    <Canvas camera={{ position: [0, 0, -15] }}>
      <Scene />
    </Canvas>
    <Leva hidden={!showControls} />
  </>
);

const Scene = () => {
  const { background, speed } = useControls({
    background: '#311212',
    speed: { value: 30, min: 0, max: 200 },
  });

  return (
    <>
      <color attach="background" args={[background]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Rocket />
      <RocketSmoke speed={speed} />
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
