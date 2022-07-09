import React from 'react';
import { Canvas } from '@react-three/fiber';

const Demo = () => (
  <Canvas>
    <Scene />
  </Canvas>
);

const Scene = () => {
  return (
    <>
      <color attach="background" args={['#b483b4']} />
      <ambientLight intensity={0.5} />
      <pointLight
        color="#0ff"
        position={[3, 10, 0]} // x,y,z
      />
      <Rocket />
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
