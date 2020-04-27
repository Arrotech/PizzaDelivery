import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import Taxes from "./components/Taxes/Taxes";
import Total from "./components/Total/Total";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import OrderCards from "./components/OrderCards/OrderCards";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false,
      isEmptyState: true,
      visible: false,
    };
  }

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.PickupSavings) * 0.16,
      },
      function () {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.PickupSavings + this.state.taxes,
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9,
        },
        function () {
          this.setState({
            disablePromoButton: true,
          });
        }
      );
    }
  };

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true,
    });
  };

  render() {
    return (
      <div>
        <Home />
        <OrderCards />
        <Footer />
        <Router>
          <Route
            path="/home"
            exact
            strict
            render={() => {
              return (
                <div>
                  <Home />
                  <OrderCards />
                  <Footer />
                </div>
              );
            }}
          />
          <Route
            path="/summary-card"
            exact
            strict
            render={() => {
              return (
                <div className="container">
                  <Container className="purchase-card">
                    <Subtotal price={this.state.total.toFixed(2)} />
                    <PickupSavings price={this.state.PickupSavings} />
                    <Taxes taxes={this.state.taxes.toFixed(2)} />
                    <hr />
                    <Total price={this.state.estimatedTotal.toFixed(2)} />
                    <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
                    <hr />
                    <PromoCode
                      giveDiscount={() => this.giveDiscountHandler()}
                      isDisable={this.state.disablePromoButton}
                    />
                    <hr />
                    <Button
                      className="checkout-button"
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        this.setState({ visible: true });
                      }}
                    >
                      CHECKOUT
                    </Button>
                  </Container>
                </div>
              );
            }}
          />
          <Route
            path="/sign-up"
            exact
            strict
            render={() => {
              return (
                <div className="sign-up-container">
                  <div>
                    <h1>Sign Up</h1>
                  </div>
                  <Registration />
                </div>
              );
            }}
          />
          <Route
            path="/login"
            exact
            strict
            render={() => {
              return (
                <div className="login-app-container">
                  <div>
                    <h1>Login</h1>
                  </div>
                  <Login />
                </div>
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value,
});

export default connect(mapStateToProps, { handleChange })(App);
