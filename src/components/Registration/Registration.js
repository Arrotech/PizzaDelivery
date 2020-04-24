import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Button,
  Container,
} from "react-bootstrap";

export default class Registration extends Component {
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
        firstname: this.firstname.value,
        lastname: this.lastname.value,
        phone: this.phone.value,
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
      },
    };
    fetch(
      "https://pizza-order-ap1.herokuapp.com/api/v1/auth/register",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.setState({}));
  }

  render() {
    return (
      <div className="container-registration">
        <Container className="registration-form">
          <Form>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>First Name</FormLabel>
              <FormControl type="text" placeholder="Jane" />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Last Name</FormLabel>
              <FormControl type="text" placeholder="Doe" />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Phone</FormLabel>
              <FormControl type="text" placeholder="0711371265" />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Username</FormLabel>
              <FormControl type="text" placeholder="Jane254" />
            </FormGroup>
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
