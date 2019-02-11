import React from 'react';
import {Form,Button} from 'react-bootstrap';
const LoginComponent = (props) => {
    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="login" placeholder="Enter login" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={props.handleClick.bind(this, props.beer)}>
          Submit
        </Button>
      </Form>
    );
}
export default LoginComponent;