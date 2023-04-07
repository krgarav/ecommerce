import React, { useContext } from "react";
import {
  Button,
  CloseButton,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";

import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let Total = 0;
  const onRemoveHandler = (event) => {
    const title =
      event.target.parentNode.parentNode.firstChild.children[1].innerText;
    cartCtx.removeFromCartItems(title);
  };
  const allItems = cartCtx.cartItems.map((item) => {
    Total += item.quantity * +item[0].price.split(" ")[1];

    return (
      <ListGroup.Item>
        <Container>
          <Row>
            <Col>
              <Image src={item[0].url} thumbnail />
              <p>{item[0].title}</p>
            </Col>
            <Col>
              <p> {item[0].price}</p>
            </Col>
            <Col>
              <input
                type="number"
                min="1"
                max="5"
                value={item.quantity}
                readOnly
              />
              <Button onClick={onRemoveHandler}>Remove</Button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    );
  });

  return (
    <div
      style={{
        backgroundColor: "white",
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
          Total <span>: Rs  {Total} /-</span>
        </h3>
      </Container>
      <Container className="text-center">
        <Button>PURCHASE</Button>
      </Container>
    </div>
  );
};

export default Cart;
