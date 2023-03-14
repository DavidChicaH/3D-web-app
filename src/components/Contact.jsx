import React from 'react';
import styled from 'styled-components';
import MapChart from './Map';
const Contact = () => {

  const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px){
    justify-content: center;
  }
  
`

const Title = styled.h1`
  font-weight: 200;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px){
    width: 300px;
  }
`

const Input = styled.input`
  padding: 20px;
  background-color: #E8E6E6;
  border: none;
  border-radius: 5px;
`


const TextArea = styled.textarea`
  padding: 20px;
  background-color: #E8E6E6;
  border: none;
  border-radius: 5px;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px){
    display: none;
  }
`

  return (  
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Me</Title>
            <Input placeholder="Your name..."/>
            <Input placeholder="Your email adress"/>
            <TextArea placeholder="Make me a letter pls :D" rows={10}/>
            <Button>Submit</Button>

          </Form>
        </Left>
        <Right>
          <MapChart></MapChart>
        </Right>
      </Container>
    </Section>
  );
}
 
export default Contact;
