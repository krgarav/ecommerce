import React, { useState, useRef } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import CartProvider from "../../Store/CartProvider";

const Store = () => {
  const [show, setShow] = useState(false);
  const showCart = () => {
    setShow(true);
  };
  const closeCart = () => {
    setShow(false);
  };
  const target = useRef(null);
  return (
    
      <CartProvider>
        <Header onClick={showCart} />
        {show && <Cart onClick={closeCart} />}
        <Body onClick={showCart} />
        <Footer />
      </CartProvider>
   
  );
};

export default Store;
