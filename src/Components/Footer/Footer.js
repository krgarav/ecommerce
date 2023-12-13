import React from "react";
import { Card, Button, Container, Navbar, Row, Col } from "react-bootstrap";
import { FaYoutubeSquare, FaSpotify, FaFacebookSquare } from "react-icons/fa";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.mainpage}>
      <Container >
        <Row>
          <Col className={classes.footertext}>
            <h1 >The Generics</h1>
          </Col>

          <Col className={classes.iconcontainer} style={{display:"flex",justifyContent:"space-evenly"}}>
            {" "}
            <a href="https://www.youtube.com/">
              <FaYoutubeSquare className={classes.icons} />
            </a>
            <a href="https://open.spotify.com/">
              <FaSpotify className={classes.icons} />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebookSquare className={classes.icons} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
