import React from "react";
import {
  Button,
  CloseButton,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import Items from "../Items/Items";

const Cart = (props) => {
  const allItems = Items.map((item) => {
    return (
      <ListGroup.Item>
        <Container>
          <Row>
            <Col>
              <Image src={item.imageUrl} thumbnail />
              <p>{item.title}</p>
            </Col>
            <Col>
              <p>Rs {item.price}</p>
            </Col>
            <Col>
              <input type="number" min="1" max="5" defaultValue="1" />
              <Button>Remove</Button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    );
  });
  const Total = 0;
  return (
    <div
      style={{
        "background-color": "white",
        position: "fixed",
        right: 0,
        border: "1px solid brown",
        width: "400px",
        height: "550px",
        overflow: "scroll",
      }}
    >
      <Container className="text-end">
        <CloseButton onClick={props.onClick} />
      </Container>
      <Container className="text-center">
        <Row>
          <Col>
            <h1>Cart</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2>ITEM</h2>
          </Col>
          <Col>
            <h2>Price</h2>
          </Col>
          <Col>
            <h2>Quantity</h2>
          </Col>
        </Row>
      </Container>
      <ListGroup as="ul">{allItems}</ListGroup>
      <Container className="text-end">
        <h3>
          Total <span>{Total}</span>
        </h3>
      </Container>
      <Container className="text-center">
        <Button>PURCHASE</Button>
      </Container>
    </div>
  );
};

export default Cart;
