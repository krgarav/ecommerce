import React from "react";
import { Card, Button, Container, Navbar } from "react-bootstrap";
import { FaYoutubeSquare, FaSpotify, FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <Navbar
      variant="dark"
      style={{ height: "80px", "backgroundColor": "aqua" }}
    >
      <Container>
        <h1 style={{ "fontSize": "40px" }}>The Generics</h1>
        <a href="https://www.youtube.com/">
          <FaYoutubeSquare />
        </a>
        <a href="https://open.spotify.com/">
          <FaSpotify />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebookSquare />
        </a>
      </Container>
    </Navbar>
  );
};

export default Footer;
