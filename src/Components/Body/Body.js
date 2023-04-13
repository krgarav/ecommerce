import React, { useContext } from "react";
import Items from "../Items/Items";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Navbar,
  Nav,
} from "react-bootstrap";
import CartContext from "../../Store/cart-context";
import { Link } from "react-router-dom";
const Body = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (event) => {
    const title =
      event.target.parentNode.parentNode.parentNode.children[0].innerText;
    const url =
      event.target.parentNode.parentNode.parentNode.children[1].firstChild.src;
    const Price = event.target.parentNode.parentNode.children[0].innerText;
    console.log();
    const imgObj = {
      title: title,
      url: url,
      price: Price,
    };
    cartCtx.addToCartItems(imgObj);
  };
  const items = Items.map((item) => {
    return (
      <Col key={item.title} xl={6}>
        <h1>{item.title}</h1>

        <Link to={`/store/${item.title}`}>
          <Image src={item.imageUrl} />
        </Link>

        <div className="justify-content-between">
          {" "}
          <span>Rs {item.price}</span>
          <span>
            {" "}
            <Button onClick={addToCartHandler}>Add to Cart</Button>
          </span>
        </div>
      </Col>
    );
  });

  return (
    <>
      <div
        style={{
          backgroundColor: "grey",
          height: "150px",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <h1 style={{ fontSize: "80px" }}>The Generics</h1>
      </div>

      <Container className="text-center">
        <Row>{items}</Row>
      </Container>
      <Container className="text-center">
        <Button onClick={props.onClick}>See the cart</Button>
      </Container>
    </>
  );
};

export default Body;
