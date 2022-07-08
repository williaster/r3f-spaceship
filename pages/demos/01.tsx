import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Demo = ({
  showAmbient = true,
  showPoint = true,
  showBoxes = true,
  showMaterials = true,
}) => (
  <Canvas style={{ background: '#eee', height: 600 }}>
    <OrbitControls />
    <axesHelper />
    {showAmbient && <ambientLight />}
    {showPoint && <pointLight position={[10, 10, 10]} />}
    {showBoxes && (
      <>
        <Box
          wireframe={!showMaterials}
          position={[-1.2, 0, 1]}
          rotation={-0.01}
        />
        <Box wireframe={!showMaterials} position={[1.2, 0, 1]} />
        <Box wireframe scale={1.05} position={[1.2, 0, 1]} />
      </>
    )}
    <Plane wireframe={!showMaterials} rotation={[0, Math.PI, 0]} />
  </Canvas>
);

const Box = ({
  rotation = 0.01,
  wireframe,
  ...props
}: Partial<JSX.IntrinsicElements['mesh']> & {
  rotation?: number;
  wireframe?: boolean;
}) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.mesh>();

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    if (ref.current) ref.current.rotation.x += rotation;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={(props.scale ?? 1) * (clicked ? 1.5 : 1)}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        wireframe={wireframe}
        color={wireframe ? '#000' : hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
};

const Plane = ({
  wireframe,
  ...props
}: Partial<JSX.IntrinsicElements['mesh']> & { wireframe?: boolean }) => (
  <mesh {...props} position={[0, 0, -0.01]}>
    <planeGeometry args={[40, 20, 10, 10]} />
    <meshStandardMaterial
      wireframe={wireframe}
      color="#333"
      side={THREE.DoubleSide}
    />
  </mesh>
);

export default Demo;
