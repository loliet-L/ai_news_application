import React, { useState } from "react";
import { useRef } from "react";
import { Form, Button,  Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./signup.css";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
       <div className="containerC">
      <div className="forms-container">
        <div className="signin-signup">
        <Form onSubmit={handleSubmit} className="sign-in-form">
          <h2 className="title">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="input-field">
              <i className="fas fa-envelope"></i>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>

              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            </div>

            <p id="sign-in-info">
              Have an account ?,{" "}
              <Link  className="signinbtn" to="/login">
                Sign-in
              </Link>
              .
            </p>
            <Button disabled={loading} className="btn1" type="submit">
              Sign Up
            </Button>
          </Form>

          </div>
          </div>
          
      {/* <div className="w-100 text-center mt-2">
        Already have an account ? <Link to="/login">Log In </Link>
      </div> */}

      <div className="panels-container">
        <div className="panel left-panel">
          <img
            src="https://www.oots.in/frontend/images/registration-pro.png"
            className="image"
            alt=""
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default SignUp;
