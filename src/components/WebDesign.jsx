import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import Mac from './Mac';


const Desc = styled.p`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px){
   display: none;
  }
  ;
`;
const WebDesign = () => {
  return ( 

    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Mac/>
      </Stage>
  
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
    <Desc>No Mac, Windows</Desc>
    </>
   );
}
 
export default WebDesign;