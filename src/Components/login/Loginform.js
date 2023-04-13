import React, { useRef, useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const LoginForm = () => {
  const [login, setLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true,
    };
    if (login) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5wDtmj8its98xM9_HGkOGb0iQIJhJXVs",
          {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        if (data.error) {
          throw data.error;
        }
        authCtx.login(data.idToken);
        localStorage.setItem("mail",data.email)
        alert("Logged In");
        navigate("/store", { replace: true });
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5wDtmj8its98xM9_HGkOGb0iQIJhJXVs",
          {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        if (data.error) {
          throw data.error;
        }
        alert("success");
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const toggleHandler = () => {
    setLogin((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
    <NavBar/>
      <div
        style={{
          backgroundColor: "grey",
          height: "150px",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <h1 style={{ fontSize: "80px" }}>The Generics</h1>
      </div>
      <br />
      <Container
        style={{ width: "70%", backgroundColor: "teal", borderRadius: "10px" }}
      >
        <Form onSubmit={submitHandler} className="text-center">
          <Form.Group>
            <h2>{login ? "Login" : "Sign up"}</h2>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            {login ? "Login" : "Create Account"}
          </Button>
          <Form.Group>
            <Button onClick={toggleHandler}>
              {login ? "Create new Account" : "Login with existing account"}
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default LoginForm;
