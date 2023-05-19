import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Form, Button, Container} from 'react-bootstrap'
const Login = ({setAuthenticate}) => {
  const navigate=useNavigate();
  const LoginUser=(event)=>{
      event.preventDefault();
      setAuthenticate(true);
navigate("/");
    };
    return (
    
    <Container>
      <Form onSubmit={(event)=>LoginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="email" placeholder="Enter ID" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="ID 기억하기" />
      </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
  )
}

export default Login
