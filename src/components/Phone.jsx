/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Phone.gltf --transform
Author: K Wang (https://sketchfab.com/15716533192)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/phone-ef63b1bf46394bc09389367e82af0742
Title: phone
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Phone(props) {
  const { nodes, materials } = useGLTF('/Phone-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/Phone-transformed.glb')