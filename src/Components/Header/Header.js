import React from "react";
import { Button, Nav, Navbar, Container, Form } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="black" variant="dark" style={{ position: "sticky", top: 0 }}>
      <Container className="justify-content-center">
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">Store</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Form>
        <Button variant="outline-primary" onClick={props.onClick}>
          Cart <span>0</span>
        </Button>
      </Form>
    </Navbar>
  );
};

export default Header;
