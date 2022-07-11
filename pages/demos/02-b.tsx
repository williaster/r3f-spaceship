import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';

const Demo = () => (
  <>
    <Canvas>
      <Scene />
    </Canvas>
    <Leva />
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
      <pointLight
        color="#0ff"
        position={[-3, 3, 0]} // x,y,z
      />
      <Rocket />
    </>
  );
};

const Rocket = () => {
  const { wireframe } = useControls({
    wireframe: false,
  });
  return (
    <mesh>
      <coneGeometry
        args={[0.75, 2, 30]} // [radius, height, numSegments]
      />
      <meshStandardMaterial wireframe={wireframe} color="#ff8474" />
    </mesh>
  );
};

export default Demo;
