import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { Button, Form } from "react-bootstrap";
import CartContext from "../../Store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  let totalItems = 0;
  for (let i = 0; i < cartCtx.cartItems.length; i++) {
    totalItems += cartCtx.cartItems[i].quantity;
  }

  return (
    <React.Fragment>
      <NavBar />
      <Form style={{ position: "absolute", top: "8px", right: "5px" }}>
        <Button variant="outline-primary" onClick={props.onClick}>
          Cart <span>{totalItems}</span>
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default Header;
