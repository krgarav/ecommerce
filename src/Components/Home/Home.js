import React from "react";
import {
  Container,
  Nav,
  Image,
  ListGroup,
  Button,
} from "react-bootstrap";
import NavBar from "../NavBar/NavBar"
import { Link } from "react-router-dom";
import HomePageItems from "../Items/HomePageItems";
import Footer from "../Footer/Footer";
const Home = () => {
  const homeItems = HomePageItems.map((item) => {
    return (
      <ListGroup.Item
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h3>{item.date}</h3> <p>{item.location}</p>
        <p>{item.stage}</p>
        <Button>Buy Tickets</Button>
      </ListGroup.Item>
    );
  });

  return (
    <>
      <NavBar/>
      <div
        style={{
          backgroundColor: "grey",
          height: "300px",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <h1 style={{ fontSize: "80px" }}>The Generics</h1>
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
      <Footer/>
    </>
  );
};

export default Home;
