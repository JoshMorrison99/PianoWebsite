import React, { useState } from "react";
import * as ReactBootStrap from 'react-bootstrap';
import "./css/Login.css";

function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <div className="Login">
        <ReactBootStrap.Form onSubmit={handleSubmit}>
        <ReactBootStrap.Form.Group size="lg" controlId="email">
          <ReactBootStrap.Form.Label className="labelForm">Email</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Group size="lg" controlId="password">
          <ReactBootStrap.Form.Label className="labelForm">Password</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </ReactBootStrap.Button>
      </ReactBootStrap.Form>
    </div>
    );
}

export default Login;