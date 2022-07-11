import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import AnimatedStars from './03-animated-stars-only';
import RocketSmoke from './04-smoke-only';
import Effects from './04-effects-only';

const Demo = ({ showControls = true }) => (
  <>
    <Canvas camera={{ position: [1, -10, 15] }}>
      <Scene />
      <Effects />
    </Canvas>
    <Leva hidden={!showControls} />
  </>
);

const Scene = () => {
  const { background, speed } = useControls({
    background: '#01020d',
    speed: { value: 50, min: 0, max: 200 },
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
