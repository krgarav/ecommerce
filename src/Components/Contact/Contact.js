import React, { useRef } from "react";
import NavBar from "../NavBar/NavBar";
import { Form, Button, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const namerRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const details = {
      name: namerRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    const response = await fetch(
      "https://ecommerse-f1258-default-rtdb.firebaseio.com/userdata.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    toast.success("Thank you for contacting, we will get back to you soon.", {
      position: toast.POSITION.TOP_CENTER,
    });

    namerRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };
  return (
    <>
      <NavBar />
      <br />
      <ToastContainer />
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              required
              ref={namerRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="phoneNumber"
              ref={phoneRef}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <Footer />
        </div>
      </Container>
    </>
  );
};
export default Contact;
