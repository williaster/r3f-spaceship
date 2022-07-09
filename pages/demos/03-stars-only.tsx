import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';

const Stars = () => {
  // tuning variables
  const { starCount, starColor, starSpread } = useControls({
    starColor: '#dec068',
    starCount: { value: 100, min: 0, max: 1000, step: 1 },
    starSpread: { value: 20, min: 1, max: 100, step: 1 },
  });

  const meshRef = useRef<THREE.InstancedMesh>();
  const object3d = useMemo(() => new THREE.Object3D(), []);

  // randomly place stars
  const stars = useMemo(() => {
    const result = [];
    for (let i = 0; i < starCount; i++) {
      result.push({
        x: THREE.MathUtils.randFloat(-starSpread, starSpread),
        y: THREE.MathUtils.randFloat(-starSpread, starSpread),
        z: THREE.MathUtils.randFloat(-starSpread, starSpread),
        random: THREE.MathUtils.randFloat(20, 100),
      });
    }
    return result;
  }, [starCount, starSpread]);

  // update stars each frame
  useFrame(() => {
    stars.forEach((star, i) => {
      const { x, y, z, random } = star;

      const scale = Math.cos(random);

      // Update the dummy object
      object3d.position.set(x, y, z);
      object3d.scale.set(scale, scale, scale);
      object3d.updateMatrix();

      // And apply the matrix to the instanced item
      meshRef.current.setMatrixAt(i, object3d.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, starCount]} // [geometry, material, count]
    >
      <planeGeometry
        args={[0.25, 10]} // [width, height]
      />
      {/** shiny material */}
      <meshPhongMaterial
        color={starColor}
        side={THREE.DoubleSide} // solid on both sides
        depthWrite={false}
      />
    </instancedMesh>
  );
};

export default Stars;
