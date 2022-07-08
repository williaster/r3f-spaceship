import React from 'react';
import { Canvas } from '@react-three/fiber';

const Demo = () => {
  return (
    <Canvas>
      <color attach="background" args={['#b483b4']} />
      <ambientLight intensity={0.5} />
      <pointLight
        color="#0ff"
        position={[3, 10, 0]} // x,y,z
      />
      <mesh>
        {/** radius, height, num segments */}
        <coneGeometry args={[1, 2, 30]} />
        <meshStandardMaterial color="#ff8474" />
      </mesh>
    </Canvas>
  );
};

export default Demo;
