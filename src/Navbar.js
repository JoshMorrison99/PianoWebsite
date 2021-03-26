import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

function Navbar(){
    return (
        <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/download">Download</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    );
}

export default Navbar;