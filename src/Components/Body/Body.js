import React, { useContext } from "react";
import Items from "../Items/Items";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CartContext from "../../Store/cart-context";
import { Link } from "react-router-dom";
import Cardbox from "../Cardbox/Cardbox";
import classes from "./Body.module.css";
const Body = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (event) => {
    const title =
      event.target.parentNode.parentNode.parentNode.children[0].innerText;
    const url =
      event.target.parentNode.parentNode.parentNode.children[1].firstChild.src;
    const Price = event.target.parentNode.parentNode.children[0].innerText;

    const imgObj = {
      title: title,
      url: url,
      price: Price,
    };

    cartCtx.addToCartItems(imgObj);
  };
  const items = Items.map((item) => {
    return (
      // <Col key={item.title} xl={6}>
      //   <h1>{item.title}</h1>

      //   <Link to={`/store/${item.title}`}>
      //     <Image src={item.imageUrl} />
      //   </Link>

      //   <div className="justify-content-between">
      //     {" "}
      //     <span>Rs {item.price}</span>
      //     <span>
      //       {" "}
      //       <Button onClick={addToCartHandler}>Add to Cart</Button>
      //     </span>
      //   </div>
      // </Col>
      <Col key={item.title} lg={3}>
      
        <Cardbox title={item.title} imgurl={item.imageUrl} price={item.price} />
       </Col>
    );
  });

  return (
    <>
      
      <div className={classes.title}>
        <h1 >The Generics</h1>
      </div>
      <div className={classes.container}>
        <Row>{items}</Row>
      </div>
      <Container style={{ margin: "20px auto" }} className="text-center">
        <Button variant="dark" onClick={props.onClick}>
          See the cart
        </Button>
      </Container>
    </>
  );
};

export default Body;
