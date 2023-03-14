import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Shoe from './Shoe';
import styled from 'styled-components';

const Desc = styled.p`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 100px;
  font-size: 14px;
  font-weight: 300;
  
  @media only screen and (max-width: 768px){
   display: none;
  }
`;

const ProductDesign = () => {
  return ( 
    <>

    <Canvas>
    <Stage environment="city" intensity={0.6}>
      <Shoe/>
    </Stage>

    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10}/>
  </Canvas>
    <Desc>Nice sneakers</Desc>
    </>

   );
  }
 
export default ProductDesign;