import { Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import { OrbitControls, RenderTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import  texture  from '../mars.jpg';

const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
`
;

const Mars = () => {

  const colorMap = useLoader(TextureLoader, texture)
  
  return (  
    <Container>
      <Canvas >
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <ambientLight intensity={0.1}/>
        <directionalLight position={[1,2,3]}/>
        <mesh>
          <sphereGeometry args={[1.4]}/>
          <meshStandardMaterial map={colorMap}>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  );
}
 
export default Mars;