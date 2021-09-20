import React, { useState } from "react";
import { useRef } from "react";
import { Form,  Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router";
import "./login.css";


const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }

  return (
    <>
      <div>
        <div className="containerC">
          <div className="forms-container">
            <div className="signin-signup">
            <Form onSubmit={handleSubmit} className="sign-in-form" >
              <h2 className="title">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
                <div className="input-field">
                  <i className="fas fa-user"></i>
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

                <div className="w-100 text-center mt-3">
                  <Link to="/forget-password">Forget Password ?</Link>
                </div>

                <p id="sign-in-info">
                  Don't have an account ?,{" "}
                  <Link className="signinbtn" to="/signup">
                    Sign Ups
                  </Link>
                  .
                </p>
                <input type="submit" value="Login" className="btn1 solid" />
              </Form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <img
                src="https://bxminers.com/assets/img/signup-left.png"
                className="image"
                alt="Signup logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
