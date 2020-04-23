import React, {Component} from "react";
import { Row, Col } from "react-bootstrap";

export default class Taxes extends Component{
    render (){
        return(
            <Row className="show-grid">
                <Col md={6}>Est. Taxes & Fees(Based on VAT)</Col>
        <Col md={6}>{`$${this.props.taxes}`}</Col>
            </Row>
        );
    }
}