import React, { useContext } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    console.log("logout clicked");
    alert("Are you sure you want to logout?");
    authCtx.logout();
    navigate("/login", { replace: true });
  };
  return (
    <>
      {/* <Navbar
        bg="black"
        variant="dark"
        style={{ position: "sticky", top: 0, height: "50px", zIndex: "1" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
                  <Button onClick={logoutHandler} variant="danger">
                    {" "}
                    Logout
                  </Button>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Navbar
        bg="black"
        variant="dark"
        expand="xxl"
        style={{
          position: "sticky",
          top: 0,
          height: "50px",
          zIndex: "1",
          width: "100%",
          display: "flex",
        }}
      >
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                {!authCtx.isLoggedIn && (
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                )}
                {authCtx.isLoggedIn && (
                  <Button onClick={logoutHandler} variant="danger">
                    Logout
                  </Button>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div
          style={{
            position: "fixed",
            // top: 0,
            display: "flex",
            margin: "20px 5px",
            left: "10%",
            height: "auto",
            // zIndex: "1",
            width: "70%",
            alignItems: "center",
          }}
        >
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              height: "50px",
            }}
          >
            <Nav.Link style={{ margin: "0 10px" }} as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link
              style={{ margin: "0 10px" }}
              as={NavLink}
              to={authCtx.isLoggedIn ? "/store" : "/login"}
            >
              Store
            </Nav.Link>
            <Nav.Link style={{ margin: "0 10px" }} as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link style={{ margin: "0 10px" }} as={NavLink} to="/contact">
              Contact us
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
