import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

const RocketSmoke = ({ speed = 100, particleSize = 0.1 }) => {
  // tuning variables
  const {
    smokeDensity: count,
    smokeSpread: cloudSpread,
    smokeLength: tailSize,
    smokeColor: color,
    smokeOpacity: opacity,
    smokeSize: smokeMaxSize,
    smokeGrowthRate: growthRate,
  } = useControls({
    smokeDensity: { value: 485, min: 0, max: 1000, step: 1 },
    smokeSpread: { value: 3, min: 0, max: 10, step: 0.5 },
    smokeLength: { value: 15, min: 10, max: 100, step: 1 },
    smokeColor: '#4ce5df',
    smokeOpacity: { value: 0.25, min: 0, max: 1, step: 0.05 },
    smokeSize: { value: 5, min: 1, max: 100, step: 1 },
    smokeGrowthRate: { value: 0.5, min: 0.1, max: 1.5, step: 0.05 },
  });

  const meshRef = useRef<THREE.InstancedMesh>();
  const object3d = useMemo(() => new THREE.Object3D(), []);
  const initialY = 0;

  // create smoke particles
  const particles = useMemo(() => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push({
        speedVariation: THREE.MathUtils.randFloat(0.01, 0.51),
        // y-position
        y: THREE.MathUtils.randFloat(initialY, initialY + tailSize),
        // how quickly x/z diffuse
        growX: THREE.MathUtils.randFloatSpread(cloudSpread),
        growZ: THREE.MathUtils.randFloatSpread(cloudSpread),
      });
    }
    return result;
  }, [count, cloudSpread, tailSize]);

  // update particles per frame
  useFrame((state) => {
    const { elapsedTime } = state.clock;

    particles.forEach((particle, i) => {
      const { speedVariation, y, growX, growZ } = particle;

      //
      const offset = elapsedTime * Math.max(1, speed) * speedVariation;
      const nextY = Math.min(0, (y - offset) % tailSize); // wrap particles
      const fractionY = nextY / tailSize; // 0-1 of how much y moves
      const nextX =
        growX * fractionY + // increase along y
        Math.sin(growX * elapsedTime) * cloudSpread * fractionY; // variation
      const nextZ =
        growZ * fractionY + // increase along y
        Math.sin(growZ * elapsedTime) * cloudSpread * fractionY; // variation
      const scale = Math.min(
        0.5 * Math.pow(2, Math.abs(nextY * growthRate)), // grow as y changes
        smokeMaxSize
      );

      // Update the dummy object
      object3d.position.set(nextX, nextY, nextZ);
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
      args={[null, null, count]} // geometry, material
      position={[0, -1, 0]} // offset from rocket
    >
      <sphereGeometry
        args={[particleSize, 10, 10]} // [size, widthSegmentCount, heightSegCount]
      />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </instancedMesh>
  );
};

export default RocketSmoke;
