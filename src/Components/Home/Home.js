import React from "react";
import { ListGroup, Button, Row, Col } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

import HomePageItems from "../Items/HomePageItems";
import Footer from "../Footer/Footer";
import classes from "./Home.module.css";
const Home = () => {
  const homeItems = HomePageItems.map((item) => {
    return (
      <ListGroup.Item className={classes.Listgroup} key={item.key}>
        <Row className={classes.Rows}>
          <Col className={classes.Cols} xs={3}>
            <h3>{item.date}</h3>
          </Col>
          <Col className={classes.Cols} xs={3}>
            <p>{item.location}</p>
          </Col>

          <Col className={classes.Cols} xs={3}>
            <p>{item.stage}</p>
          </Col>
          <Col className={classes.btn} xs={3}>
            <Button>Buy Tickets</Button>
          </Col>
        </Row>
      </ListGroup.Item>
      // <ListGroup.Item
      //   key={item.date}
      //   style={{
      //     display: "flex",
      //     width: "80%",
      //     justifyContent: "space-between",
      //     marginLeft: "auto",
      //     marginRight: "auto",
      //   }}
      // >
      //   <h3>{item.date}</h3> <p>{item.location}</p>
      //   <p>{item.stage}</p>
      //   <Button>Buy Tickets</Button>
      // </ListGroup.Item>
    );
  });

  return (
    <>
      <NavBar />
      <div className={classes.homepage}>
        <h1>The Generics</h1>
        <div
          style={{
            width: "300px",
            border: "2px solid aqua",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3 style={{ textAlign: "center", justifyContent: "center" }}>
            Get Our Latest Album
          </h3>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>TOURS</h2>
        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <ListGroup variant="info">{homeItems}</ListGroup>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
