import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import Phone from './Phone';


const SocialMedia = () => {
  return ( 

    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Phone/>
      </Stage>
  
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10}/>
    </Canvas>

    </>
   );
}
 
export default SocialMedia;