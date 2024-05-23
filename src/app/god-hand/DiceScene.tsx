'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { Suspense } from 'react';
import * as THREE from 'three';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    blank_d20: THREE.Mesh
  }
  materials: {
    ['Pau No Meu Cu']: THREE.MeshStandardMaterial
  }
}

const Model = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/reduced.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blank_d20.geometry}
        material={materials['Pau No Meu Cu']}
        rotation={[0.436, 0, 0]}
        scale={1.153}
      />
    </group>
  );
};

const Floor = () => (
  <mesh position={[0, -2, 0]} receiveShadow>
    <boxGeometry args={[40, 1, 40]} />
    <meshStandardMaterial color="gray" />
  </mesh>
);

const DiceScene = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <spotLight
          intensity={500}
          position={[4, 10, 4]}
          angle={0.5}
          castShadow
          penumbra={1}
        />
        <Physics>
          <RigidBody restitution={.3} colliders={'trimesh'}>
            <Model scale={[0.05, 0.05, 0.05]} position={[0, 10, 0]} rotation={new THREE.Euler(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random())} />
          </RigidBody>

          <RigidBody type='fixed'>
            <Floor />
          </RigidBody>
        </Physics>
        <OrbitControls enableZoom />
      </Suspense>
    </Canvas>
  );
};

export default DiceScene;
