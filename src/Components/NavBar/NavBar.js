import React, { useContext } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(authCtx.isLoggedIn);
  const logoutHandler = () => {
    console.log("logout clicked")
    alert("Are you sure ,you want to logout?");
    authCtx.logout();
    navigate("/login", { replace: true });
  };
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
            <Nav.Link
              as={NavLink}
              to={authCtx.isLoggedIn ? "/store" : "/login"}
            >
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
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
            {authCtx.isLoggedIn && (
              <Button onClick={logoutHandler}> Logout</Button>
            )}
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
