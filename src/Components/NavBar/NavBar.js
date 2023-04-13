import React, { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
const NavBar = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);
  return (
    <Navbar
      bg="black"
      variant="dark"
      style={{ position: "sticky", top: 0, height: "50px" }}
    >
      <Container className="justify-content-center">
        <Nav>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/store">
              Store
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/contact">
              Contact us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {!authCtx.isLoggedIn && (
              <Nav.Link as={NavLink} to="/">
                Login
              </Nav.Link>
            )}
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
