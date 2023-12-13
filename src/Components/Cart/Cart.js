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
import classes from "./Cart.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let Total = 0;
  const onRemoveHandler = (event) => {
    const title =
      event.target.parentNode.parentNode.firstChild.children[1].innerText;
    cartCtx.removeFromCartItems(title);
  };
  const purchaseHandler = () => {
    if (cartCtx.cartItems.length > 0) {
      // alert("Thanks for purchase");

      toast.success("Thanks for purchase !", {
        position: toast.POSITION.TOP_CENTER,
      });
      cartCtx.resetCartItems();
    } else {
      const customId = "custom-id-yes";
      toast.warn("No Items Present In Cart !", {
        position: toast.POSITION.BOTTOM_LEFT,
        toastId: customId,
      });

      // if(! toast.isActive(customId.current)) {
      //   customId.current = toast("I cannot be duplicated!");
      // }
      // alert("No Items Present In Cart")
    }
  };
  const allItems = cartCtx.cartItems.map((item) => {
    Total += item.quantity * +item[0].price.split(" ")[1];

    return (
      <ListGroup.Item key={item[0].title}>
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
              <Button variant="danger" onClick={onRemoveHandler}>
                Remove
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    );
  });

  return (
    <>
      <ToastContainer />
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Adjust the opacity as needed
          zIndex: "998", // Use a lower z-index than your content
          pointerEvents: "none", // Make the overlay unclickable
        }}
      ></div>

      <div
        style={{
          backgroundColor: "white",
          position: "fixed",
          right: 0,
          top: "60px",
          border: "1px solid brown",
          width: "450px",
          height: "550px",
          overflow: "scroll",
          zIndex: "999",
        }}
      >
        <Container style={{position:"sticky",top:"0",zIndex:"999"  }} className="text-end">
          <CloseButton  onClick={props.onClick} />
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
            Total <span>: Rs {Total} /-</span>
          </h3>
        </Container>
        <Container className="text-center">
          <Button onClick={purchaseHandler}>PURCHASE</Button>
        </Container>
      </div>
    </>
  );
};

export default Cart;
