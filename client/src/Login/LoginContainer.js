import React from 'react';
import {Form,Button} from 'react-bootstrap';


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  //   this.state = { 
  //     username: "",
  //     password:""
  //  };
   this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data);
  console.log(data.username);
  console.log(data.password);
  
  fetch('http://localhost:8090/login', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     params: {
     username: data.username,
     password: data.password
    },
  }).then(response => console.log(response.json()))
  .then(data => sessionStorage.setItem("user", data));
}

// handleClick(data) {
//   this.setState({
//       username: data.username,
//       password: data.password
//   })
//   fetch('/login', {
//       method: 'post',
//       headers: {'Content-Type':'application/json'},
//       params: {
//         username: this.state.username,
//         password: this.state.password
//     },
//   });
// }
    render(){
        
        return (
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" />
  
          <label htmlFor="password">Enter your password</label>
          <input id="password" name="password" type="password" />

          <button type="submit">Send data!</button>
        </form>
        //   <Form onSubmit={this.handleSubmit}>
        //   <Form.Group controlId="formBasicEmail">
        //     <Form.Label>Login</Form.Label>
        //     <Form.Control type="login" placeholder="Enter login" />
        //   </Form.Group>
        
        //   <Form.Group controlId="formBasicPassword">
        //     <Form.Label>Password</Form.Label>
        //     <Form.Control type="password" placeholder="Password" />
        //   </Form.Group>
        //   <Form.Group controlId="formBasicChecbox">
        //     <Form.Check type="checkbox" label="Check me out" />
        //   </Form.Group>
        //   <Button variant="primary" type="submit">
        //     Submit
        //   </Button>
        // </Form>
            )
        }
}

export default LoginContainer;