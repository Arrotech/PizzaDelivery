import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdbreact";

export default class OrderCards extends Component {
  render() {
    return (
      <div className="pizza">
        <MDBContainer className="mdb-container">
          <MDBRow>
            <MDBCol>
              <MDBCard wide>
                <MDBCardImage cascade className="img-fluid" src="pizza4.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle>Macaroni</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBCardText>$100</MDBCardText>
                  <MDBBtn className="order-btn" href="#">
                    Add to cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard narrow>
                <MDBCardImage cascade className="img-fluid" src="pizza5.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle>Cheese</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBCardText>$62</MDBCardText>
                  <MDBBtn className="order-btn" href="#">
                    Add to cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard cascade>
                <MDBCardImage cascade className="img-fluid" src="pizza6.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle>Butternut Squash</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBCardText>$55</MDBCardText>
                  <MDBBtn className="order-btn" href="#">
                    Add to cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard cascade>
                <MDBCardImage cascade className="img-fluid" src="pizza.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle>Crispy Sage</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBCardText>$55</MDBCardText>
                  <MDBBtn className="order-btn" href="#">
                    Add to cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
