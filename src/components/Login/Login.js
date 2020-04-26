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
    this.loginUser = this.loginUser.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  loginUser = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    };
    fetch(
      "https://pizza-order-ap1.herokuapp.com/api/v1/auth/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const msg = data.message;
        const status = data.status;
        if (status === "200") {
          console.log(data.user);
        } else {
          console.log(msg);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="container-login">
        <Container className="login-form">
          <Form onSubmit={this.loginUser}>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Email address</FormLabel>
              <FormControl
                value={this.state.email}
                onChange={(ev) => this.setState({ email: ev.target.value })}
                type="email"
                placeholder="youremail@gmail.com"
              />
            </FormGroup>

            <FormGroup controlId="formBasicPassword">
              <FormLabel>Password</FormLabel>
              <FormControl
                value={this.state.password}
                onChange={(ev) => this.setState({ password: ev.target.value })}
                type="password"
                placeholder="Password"
              />
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
