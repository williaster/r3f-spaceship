import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { Leva, useControls } from 'leva';

const Demo = () => (
  <>
    <Canvas>
      <Scene />
    </Canvas>
    <Leva titleBar={false} />
  </>
);

const Scene = () => {
  const pointLight = useRef<THREE.PointLight>();
  const { background, wireframe, lightHelper } = useControls({
    background: '#b483b4',
    wireframe: false,
    lightHelper: false,
  });
  useHelper(lightHelper ? pointLight : undefined, THREE.PointLightHelper);
  return (
    <>
      <color attach="background" args={[background]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight
        ref={pointLight}
        color="#0ff"
        position={[-3, 3, 0]} // x,y,z
      />
      <mesh>
        {/** radius, height, num segments */}
        <coneGeometry args={[1, 2, 30]} />
        <meshStandardMaterial wireframe={wireframe} color="#ff8474" />
      </mesh>
    </>
  );
};

export default Demo;
