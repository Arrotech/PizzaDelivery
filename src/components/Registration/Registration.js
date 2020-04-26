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
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      username: "",
      email: "",
      password: "",
    };
  }

  registerUser = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }),
    };
    fetch(
      "https://pizza-order-ap1.herokuapp.com/api/v1/auth/register",
      requestOptions
    )
      .then((response) => response.json())
      .then((user_object) => {
        const msg = user_object.message;
        const status = user_object.status;
        if (status === "201"){
          console.log(user_object.user);
        }else{
          console.log(msg);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="container-registration">
        <Container className="registration-form">
          <Form onSubmit={this.registerUser}>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>First Name</FormLabel>
              <FormControl
                value={this.state.firstname}
                onChange={(ev) => this.setState({ firstname: ev.target.value })}
                type="text"
                placeholder="Jane"
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Last Name</FormLabel>
              <FormControl
                value={this.state.lastname}
                onChange={(ev) => this.setState({ lastname: ev.target.value })}
                type="text"
                placeholder="Doe"
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Phone</FormLabel>
              <FormControl
                value={this.state.phone}
                onChange={(ev) => this.setState({ phone: ev.target.value })}
                type="text"
                placeholder="0711371265"
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Username</FormLabel>
              <FormControl
                value={this.state.username}
                onChange={(ev) => this.setState({ username: ev.target.value })}
                type="text"
                placeholder="Jane254"
              />
            </FormGroup>
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
