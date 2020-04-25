import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Button,
  Container,
} from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: this.email.value,
        password: this.password.value,
      },
    };
    fetch(
      "https://pizza-order-ap1.herokuapp.com/api/v1/auth/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.setState({}));
  }

  render() {
    return (
      <div className="container-login">
        <Container className="login-form">
          <Form>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Email address</FormLabel>
              <FormControl type="email" placeholder="youremail@gmail.com" />
            </FormGroup>

            <FormGroup controlId="formBasicPassword">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
