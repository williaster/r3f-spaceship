import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';
import * as THREE from 'three';

const Demo = (props: React.Props<typeof Scene>) => (
  <Canvas shadows style={{ background: '#0a5c5b', height: 600 }}>
    <Scene {...props} />
  </Canvas>
);

const Scene = ({
  showAmbient = true,
  showAxes = true,
  showPoint = true,
  showBoxes = true,
  showCamera = true,
  showMaterials = true,
  showMeshNormal = true,
}) => {
  const pointRef = useRef<THREE.PointLight>();
  useHelper(showPoint && pointRef, THREE.PointLightHelper, 0.5);
  useFrame(({ clock }) => {
    if (pointRef.current) {
      pointRef.current.position.x = Math.sin(clock.elapsedTime) * Math.PI;
      pointRef.current.position.y = Math.cos(clock.elapsedTime) * Math.PI;
    }
  });
  return (
    <>
      <OrbitControls />
      {showAxes && <axesHelper />}
      {showCamera && <Camera />}
      {showAmbient && <ambientLight intensity={0.2} />}
      {showPoint && (
        <pointLight
          ref={pointRef}
          castShadow
          intensity={0.5}
          position={[2, 2, 2]}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
      )}
      {showBoxes && (
        <>
          <Box
            castShadow
            wireframe={!showMaterials}
            position={[-1.2, 0, 1]}
            rotation={-0.01}
          />
          <Box
            wireframe={!showMaterials}
            normals={showMeshNormal}
            castShadow={false}
            position={[1.2, 0, 1]}
          />
          <Box
            wireframe
            castShadow={false}
            scale={1.05}
            position={[1.2, 0, 1]}
          />
          <Plane wireframe={!showMaterials} rotation={[0, Math.PI, 0]} />
        </>
      )}
    </>
  );
};

const Box = ({
  rotation = 0.01,
  wireframe,
  normals,
  ...props
}: Partial<JSX.IntrinsicElements['mesh']> & {
  rotation?: number;
  normals?: number;
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
      {normals ? (
        <meshNormalMaterial
          wireframe={wireframe}
          color={wireframe ? '#000' : hovered ? 'hotpink' : 'orange'}
        />
      ) : (
        <meshStandardMaterial
          wireframe={wireframe}
          color={wireframe ? '#000' : hovered ? 'hotpink' : 'orange'}
        />
      )}
    </mesh>
  );
};

const Plane = ({
  wireframe,
  ...props
}: Partial<JSX.IntrinsicElements['mesh']> & { wireframe?: boolean }) => (
  <mesh {...props} receiveShadow position={[0, 0, -0.01]}>
    <planeGeometry args={[10, 10, 10, 10]} />
    <meshStandardMaterial
      wireframe={wireframe}
      color="#3ae8ce"
      side={THREE.DoubleSide}
      metalness={0.5}
      roughness={0.15}
    />
  </mesh>
);

const Camera = () => {
  const camera = React.useRef<THREE.PerspectiveCamera>();
  useHelper(camera, THREE.CameraHelper);
  return (
    <perspectiveCamera
      makeDefault={false}
      position={[0, 0, 5]}
      near={1}
      far={5.2}
      ref={camera}
    >
      <meshBasicMaterial />
    </perspectiveCamera>
  );
};

export default Demo;
