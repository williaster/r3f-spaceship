import * as THREE from 'three';

const scene = new THREE.Scene(); // <Canvas>
scene.background = '#b483b4';

const ambientLight = new THREE.AmbientLight(); // <ambientLight />
ambientLight.intensity = 0.5;

const pointLight = new THREE.AmbientLight(); // <pointLight />

const mesh = new THREE.Mesh(); // <mesh />

const material = new THREE.MeshStandardMaterial(); // <meshStandardMaterial />
material.color = '#ff8474';

const geometry = new THREE.ConeGeometry(0.75, 2, 30); // <coneGeometry />

mesh.material = material;
mesh.geometry = geometry;

scene.add(ambientLight);
scene.add(pointLight);
scene.add(mesh);
