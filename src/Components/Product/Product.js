import React from "react";
import { Card, Image, ListGroup, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Items from "../Items/Items";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import classes from "./Product.module.css";
const Product = () => {
  const params = useParams();
  const item = Items.filter((item) => {
    return item.title === params.productId;
  });

  return (
    <>
      <NavBar />
      <div className={classes.mainpage}>
        <div className={classes.images}>
          <div className={classes.thumnailContainer}>
            <Image
              src="https://img.freepik.com/free-photo/black-white-dristessed-background_1361-4254.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1702339200&semt=ais"
              thumbnail
              width="500px"
              height="500px"
            />
            <Image
              src="https://img.freepik.com/free-vector/trendy-abstract-wavy-backgrounds-seamless-striped-patterns-diagonalverticaldeformed-lines-ripples-geometry-optical-effects-fashion-print-textile-fabric_1142-11559.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais"
              thumbnail
              width="200px"
              height="200px"
            />
            <Image
              src="https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/photo-effects/make-an-image-black-and-white/make-image-black-and-white-og.jpg"
              thumbnail
              width="500px"
              height="200px"
            />
            <Image
              src="https://img.freepik.com/premium-photo/luxury-marble-texture-background-white-black-natural-stone-color-material-pattern-generative-ai_47243-1998.jpg"
              thumbnail
              width="200px"
              height="200px"
            />
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/023/437/800/small/3d-effect-abstract-illusion-pattern-background-in-black-and-white-color-vector.jpg"
              thumbnail
              width="200px"
              height="200px"
            />
          </div>
          <Image height="80%" width="300px" src={item[0].imageUrl} />
        </div>
        <Card className="text-center">
          <Card.Header>ITEM</Card.Header>
          <Card.Body>
            <Card.Title>{item[0].title}</Card.Title>
            <h2>Rs {item[0].price}/-</h2>
            <Card.Text>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <h1>Product Reviews</h1>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Very nice product</div>
            Satisfied by the product very much
          </div>
          <Badge bg="primary" pill>
            4.5
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Amazing but not upto the mark</div>
          </div>
          <Badge bg="primary" pill>
            4.2
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Nice but need some improvement</div>
            recommend to others.
          </div>
          <Badge bg="primary" pill>
            3.6
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      <Footer />
    </>
  );
};

export default Product;
