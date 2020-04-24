import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div className="item-details">
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? `  +` : `  -`}
        </Button>
        <Collapse className="collapse-item-details" in={this.state.open}>
          <div className="media-pad">
            <Media className="media-item-details">
              <img width={100} height={100} alt="thumbnail" src="pizza.jpg" />
              <Media.Body className="media-content">
                <p>
                  Pizza 10 inches large ingredients meat, cheese, cream, lemon
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br/>
                    <strong></strong>
                    <strong className="price-strike">{`$${this.props.price}`}</strong>
                  </Col>
                  <Col md={6}>Qnt. 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
