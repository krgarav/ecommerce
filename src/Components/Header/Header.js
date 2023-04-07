import React, { useContext } from "react";

import { Button, Nav, Navbar, Container, Form } from "react-bootstrap";
import CartContext from "../../Store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  let totalItems = 0;
  for (let i = 0; i < cartCtx.cartItems.length; i++) {
    totalItems += cartCtx.cartItems[i].quantity;
  }

  return (
    <Navbar bg="black" variant="dark" style={{ position: "sticky", top: 0 }}>
      <Container className="justify-content-center">
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/store">Store</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Form>
        <Button variant="outline-primary" onClick={props.onClick}>
          Cart <span>{totalItems}</span>
        </Button>
      </Form>
    </Navbar>
  );
};

export default Header;
