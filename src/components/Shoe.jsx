/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Shoe.gltf --transform
Author: camilooh (https://sketchfab.com/camilooh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/adidas-bad-bunny-coffee-shoes-free-08d3b741a78846f2be6ce1db5671863d
Title: Adidas Bad Bunny Coffee Shoes Free
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Shoe(props) {
  const { nodes, materials } = useGLTF('/Shoe-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-1.72, 13.1, -1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85}>
          <mesh geometry={nodes.Zapato_Zapato_0.geometry} material={materials.Zapato} />
          <mesh geometry={nodes.Zapato_Frente_0.geometry} material={materials.Frente} />
        </group>
        <group position={[-1.72, 13.1, -1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85}>
          <mesh geometry={nodes.Suela_Suela2_0.geometry} material={materials.Suela2} />
          <mesh geometry={nodes.Suela_Suela_0.geometry} material={materials.Suela} />
        </group>
        <group position={[11.34, 16.94, -1.63]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85}>
          <mesh geometry={nodes.bordesCordones_BordesCordones_0.geometry} material={materials.BordesCordones} />
          <mesh geometry={nodes.bordesCordones_CueroCordones_0.geometry} material={materials.CueroCordones} />
        </group>
        <group position={[0.85, 23.04, -1.51]} rotation={[0, 0, 3.04]} scale={[16.48, 9.57, 14.46]}>
          <mesh geometry={nodes.Lengua2_Lengua_0.geometry} material={materials.Frente} />
          <mesh geometry={nodes.Lengua2_Almohadilla2_0.geometry} material={materials.Almohadilla2} />
        </group>
        <group position={[-2.89, 28.54, -1.22]} rotation={[0, 0, Math.PI]} scale={17.91}>
          <mesh geometry={nodes.Lengua_Logo_0.geometry} material={materials.Logo} />
          <mesh geometry={nodes.Lengua_Lengua_0.geometry} material={materials.Frente} />
          <mesh geometry={nodes.Lengua_Almohadilla2_0.geometry} material={materials.Almohadilla2} />
        </group>
        <group position={[0, -16.29, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Correa_correa_0.geometry} material={materials.correa} />
          <mesh geometry={nodes.Correa_correadetalle_0.geometry} material={materials.correadetalle} />
        </group>
        <mesh geometry={nodes.DetalleFrente_DetalleFrente_0.geometry} material={materials.DetalleFrente} position={[23.79, 7.76, -3.58]} rotation={[-Math.PI / 2, 0, 0]} scale={14.65} />
        <mesh geometry={nodes.DetalleTrasero_Cuero_0.geometry} material={materials.Cuero} position={[-1.72, 13.1, -1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85} />
        <mesh geometry={nodes['DetalleTrasero2_Caf��2_0'].geometry} material={materials['Caf.2']} position={[-1.72, 13.1, -1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85} />
        <mesh geometry={nodes['DetalleMedios_Caf��2_0'].geometry} material={materials['Caf.2']} position={[-1.72, 13.1, -1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85} />
        <mesh geometry={nodes.DetalleMedios2_DetalleMedio_0.geometry} material={materials.BordesCordones} position={[-1.72, 13.1, -1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85} />
        <mesh geometry={nodes['Adidas_Caf��_0'].geometry} material={materials.material} position={[3.27, 14.4, 8.48]} rotation={[-1.52, 0.37, 0.13]} scale={13.81} />
        <mesh geometry={nodes['Adidas2_Caf��_0'].geometry} material={materials.material} position={[0, -16.29, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.almohadilla1_Almohadilla_0.geometry} material={materials.Almohadilla} position={[-22.56, 22.85, -12.47]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={29.59} />
        <mesh geometry={nodes.almohadilla2_Almohadilla2_0.geometry} material={materials.Almohadilla2} position={[-21.32, 24.83, -12.47]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={23.27} />
        <mesh geometry={nodes.Plantilla_Plantilla_0.geometry} material={materials.Plantilla} position={[-1.72, 17.88, -1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85} />
        <mesh geometry={nodes.RecubrimientoPorDentro_Plantilla_0.geometry} material={materials.Plantilla} position={[-1.72, 13.1, -1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={[28.49, 25.03, 28.85]} />
        <mesh geometry={nodes.CordonTrasero_Cuerda_0.geometry} material={materials.Cuerda} position={[-32.7, 16.66, -2.01]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={16.69} />
        <mesh geometry={nodes.Cilindro_Cilindro_0.geometry} material={materials.Cilindro} position={[-28.58, 18.71, -2.22]} rotation={[Math.PI, 0, 0]} scale={[1.21, 1.21, 3.8]} />
        <mesh geometry={nodes.Cordones_Cordones_0.geometry} material={materials.Cordones} position={[15.94, 18.6, -3.51]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={23.33} />
        <mesh geometry={nodes.DetalleCordon_DetalleCordones_0.geometry} material={materials.DetalleCordones} position={[15.92, 16.2, -9.39]} rotation={[-2.39, 0.24, -2.91]} scale={[-1.43, 1.43, 0.17]} />
        <mesh geometry={nodes.DetalleCordon2_DetalleCordones_0.geometry} material={materials.DetalleCordones} position={[15.92, 16.2, 6.06]} rotation={[-0.74, 0.37, -0.21]} scale={[1.43, 1.43, 0.17]} />
        <mesh geometry={nodes.Cuero_Cuero_0.geometry} material={materials.Cuero} position={[23.79, 7.76, -3.58]} rotation={[-Math.PI / 2, 0, 0]} scale={14.65} />
        <mesh geometry={nodes.Orificios_Orificios_0.geometry} material={materials.Orificios} position={[11.03, 18.43, 6.42]} rotation={[-0.76, 0.34, -1.47]} scale={[0.98, 0.98, 0.18]} />
        <mesh geometry={nodes.Orificios001_Orificios_0.geometry} material={materials.Orificios} position={[6.86, 20.14, 6.92]} rotation={[-0.66, 0.3, -1.5]} scale={[0.98, 0.98, 0.18]} />
        <mesh geometry={nodes.Orificios002_Orificios_0.geometry} material={materials.Orificios} position={[2.89, 21.82, 7.28]} rotation={[-0.62, 0.29, -1.51]} scale={[0.98, 0.98, 0.18]} />
        <mesh geometry={nodes.Orificios003_Orificios_0.geometry} material={materials.Orificios} position={[-0.77, 23.66, 7.14]} rotation={[-0.7, 0.19, -1.67]} scale={[0.98, 0.98, 0.18]} />
        <mesh geometry={nodes.Orificios004_Orificios_0.geometry} material={materials.Orificios} position={[11, 18.69, -8.73]} rotation={[-2.36, 0.23, -1.63]} scale={[0.98, 0.98, 0.18]} />
        <mesh geometry={nodes.Orificios005_Orificios_0.geometry} material={materials.Orificios} position={[6.75, 20.32, -9.01]} rotation={[-2.35, 0.3, -1.59]} scale={[0.98, 0.98, 0.18]} />
        <mesh geometry={nodes.Orificios006_Orificios_0.geometry} material={materials.Orificios} position={[2.81, 21.94, -9.24]} rotation={[-2.4, 0.29, -1.58]} scale={[0.98, 0.98, 0.18]} />
        <mesh geometry={nodes.Orificios007_Orificios_0.geometry} material={materials.Orificios} position={[-0.81, 23.88, -9.41]} rotation={[-2.51, 0.35, -1.55]} scale={[0.98, 0.98, 0.18]} />
        <mesh geometry={nodes.Sujetador_Sujetador_0.geometry} material={materials.Sujetador} position={[-5.59, 20.11, 10.29]} rotation={[-1.25, 0.62, -0.15]} scale={[1.87, 0.08, 0.63]} />
        <mesh geometry={nodes.Sujetador2_Sujetador_0.geometry} material={materials.Sujetador} position={[-5.62, 20.09, -12.74]} rotation={[-1.9, 0.59, 0.28]} scale={[1.87, 0.08, 0.63]} />
        <mesh geometry={nodes.DetalleMedios2002_Stitches_0.geometry} material={materials.Stitches} position={[-1.95, 13.1, -1.91]} rotation={[-Math.PI / 2, 0.02, 0]} scale={28.85} />
        <mesh geometry={nodes.DetalleMedios003_Stitche2_0.geometry} material={materials.Stitche2} position={[-1.66, 13.1, -1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85} />
        <mesh geometry={nodes.bordesCordones002_BordesCordones_0.geometry} material={materials.BordesCordones} position={[11.34, 16.94, -1.63]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85} />
        <mesh geometry={nodes.Gancho_Cilindro_0.geometry} material={materials.Cilindro} position={[-4.09, 22.2, 9.47]} rotation={[0.85, -0.51, -0.4]} scale={[1.93, 0.09, 0.73]} />
        <mesh geometry={nodes.MiniCorrea_correa_0.geometry} material={materials.correa} position={[-4.94, 21.12, 10.21]} rotation={[-Math.PI / 2, -0.95, 0]} scale={[1.32, 0.49, 1.16]} />
        <mesh geometry={nodes.Cuero002_Cuero1_0.geometry} material={materials.Cuero1} position={[23.79, 7.76, -3.58]} rotation={[-Math.PI / 2, 0, 0]} scale={14.65} />
        <mesh geometry={nodes.DetalleTrasero002_Cuero1_0.geometry} material={materials.Cuero1} position={[-15.97, 9.69, -1.29]} rotation={[-Math.PI / 2, 0, 0]} scale={28.85} />
        <mesh geometry={nodes.DetalleFrente002_Stitches_0.geometry} material={materials.Stitches} position={[22.82, 10.91, -2.12]} rotation={[-Math.PI / 2, 0, 0]} scale={14.65} />
      </group>
    </group>
  )
}

useGLTF.preload('/Shoe-transformed.glb')
