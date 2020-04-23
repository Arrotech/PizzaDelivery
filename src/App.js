import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import Taxes from "./components/Taxes/Taxes";
import Total from "./components/Total/Total";
import ItemDetails from "./components/ItemDetails/ItemDetails"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <Taxes taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <Total price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails/>
        </Container>
      </div>
    );
  }
}

export default App;
