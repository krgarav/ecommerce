import React from "react";
import { Card, Button, Container, Navbar, Row, Col } from "react-bootstrap";
import { FaYoutubeSquare, FaSpotify, FaFacebookSquare } from "react-icons/fa";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.mainpage}>
      <Container >
        <Row>
          <Col>
            <h1 style={{ fontSize: "40px" }}>The Generics</h1>
          </Col>

          <Col style={{display:"flex",justifyContent:"space-between"}}>
            {" "}
            <a href="https://www.youtube.com/">
              <FaYoutubeSquare />
            </a>
            <a href="https://open.spotify.com/">
              <FaSpotify />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebookSquare />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
