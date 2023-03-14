import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Atom from './Atom';
import styled from 'styled-components';

const Desc = styled.p`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px){
   display: none;
  }
  ;
`;

const Development = () => {
  return ( 
    <>
    
    <Canvas>
    <Stage environment="city" intensity={0.9}>
      <Atom/>
    </Stage>

    <OrbitControls enableZoom={false} autoRotate/>
  </Canvas>
    <Desc>Learrning React and three  JS</Desc>
    </>
   );
}
 
export default Development;