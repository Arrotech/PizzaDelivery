import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Pizza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Orders" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Order Status</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Update Destination
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cancel Order</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Order Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
