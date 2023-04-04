import React from "react";
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
const Body = () => {
  const items = Items.map((item) => {
    return (
      <Col key={item.title} xl={6}>
        
        <h3>{item.title}</h3>
        <Image src={item.imageUrl} />
        <div className="justify-content-between">
          {" "}
          <span>Rs {item.price}/-</span>
          <span>
            {" "}
            <Button>Add to Cart</Button>
          </span>
        </div>
      </Col>
    );
  });

  return (
    <>
      <div
        style={{
          "background-color": "grey",
          height: "150px",
          textAlign: "center",
          "font-size": "20px",
        }}
      >
        <h1 style={{ "font-size": "80px" }}>The Generics</h1>
      </div>

      <Container className="text-center">
        <Row>{items}</Row>
      </Container>
      <Container className="text-center">
        <Button>See the cart</Button>
      </Container>
    </>
  );
};

export default Body;
