import React, { useState } from "react";
import * as ReactBootStrap from 'react-bootstrap';
import "./css/Login.css";

function Login(){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const [showPasswordError, setShowPasswordError] = useState("")

    function validateForm(){
        return email.length > 0 && password.length > 0 && username.length > 0 && passwordConfirm.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function isPasswordsMatching(){
        if(password !== passwordConfirm){
            setShowPasswordError(true)
        }else{
            setShowPasswordError(false)
        }
    }

    return(
        <div className="Login">
            <ReactBootStrap.Form onSubmit={handleSubmit}>
                <ReactBootStrap.Form.Group size="lg" controlId="username">
                    <ReactBootStrap.Form.Label className="labelForm">Username</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control
                        autoFocus
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </ReactBootStrap.Form.Group>

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
            {showPasswordError ? <ReactBootStrap.Form.Label className="labelFormError">Password fields must match.</ReactBootStrap.Form.Label> : null}
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group size="lg" controlId="passwordConfirm">
            <ReactBootStrap.Form.Label className="labelForm">Password Comfirm</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Button block size="lg" type="submit" onClick={isPasswordsMatching} disabled={!validateForm()}>
                Signup
            </ReactBootStrap.Button>
        </ReactBootStrap.Form>
        </div>
    );
}

export default Login;