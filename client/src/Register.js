import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "./css/Login.css";
import axios from "axios";
import UserContext from "./UserContext";
import Config from "./config.json";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showUsernameError, setShowUsernameError] = useState(false);

  const [passwordMessageError, setPasswordMessageError] = useState("");
  const [emailMessageError, setEmailMessageError] = useState("");
  const [usernameMessageError, setUsernameMessageError] = useState("");

  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      username.length > 0 &&
      passwordConfirm.length > 0
    );
  }

  const serverValidationCheck = async () => {
    try {
      const response = await axios.post(
        Config.ENV === "development"
          ? "http://localhost:5000/api/signup"
          : Config.PRODUCTION_URL + "/api/signup",
        {
          username: username,
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      setShowEmailError(false);
      setShowPasswordError(false);
      setShowUsernameError(false);
      console.log(response.data._id);
      console.log(user);
      setUser(response.data._id);
      console.log(user);
      window.location.href =
        Config.ENV === "development"
          ? "http://localhost:3000"
          : Config.PRODUCTION_URL;
      console.log(response.data);
    } catch (err) {
      console.log(err);
      console.log(err.response);
      const errHandle = err.response.data.errors;
      errHandle.forEach((error) => {
        if (error.path === "password") {
          setShowPasswordError(true);
          setPasswordMessageError(error.message);
        } else {
          setShowPasswordError(false);
        }
        if (error.path === "email") {
          setShowEmailError(true);
          setEmailMessageError(error.message);
        } else {
          setShowEmailError(false);
        }
        if (error.path === "username") {
          setShowUsernameError(true);
          setUsernameMessageError(error.message);
        } else {
          setShowUsernameError(false);
        }
        console.log(err);
      });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  function isPasswordsMatching() {
    if (password !== passwordConfirm) {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
    serverValidationCheck();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label className="labelForm">Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {showUsernameError ? (
            <Form.Label className="labelFormError">
              {usernameMessageError}
            </Form.Label>
          ) : null}
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label className="labelForm">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {showEmailError ? (
            <Form.Label className="labelFormError">
              {emailMessageError}
            </Form.Label>
          ) : null}
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label className="labelForm">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPasswordError ? (
            <Form.Label className="labelFormError">
              {passwordMessageError}
            </Form.Label>
          ) : null}
        </Form.Group>

        <Form.Group size="lg" controlId="passwordConfirm">
          <Form.Label className="labelForm">Password Confirm</Form.Label>
          <Form.Control
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </Form.Group>

        <Button
          block
          size="lg"
          type="submit"
          onClick={isPasswordsMatching}
          disabled={!validateForm()}
        >
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default Login;
