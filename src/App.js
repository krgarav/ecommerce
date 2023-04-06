import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

const App = () => {
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

export default App;
