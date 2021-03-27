import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './css/Navbar.css';

function Navbar(){
    return (
        <ReactBootStrap.Navbar className="nav-bar p-0" variant="dark" expand="lg">
        <ReactBootStrap.Navbar.Brand className="pl-5" href="/">Dawdio</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="ml-auto">
                <ReactBootStrap.Nav.Link className="nav-link-header px-3 py-3" href="/download">Download</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link className="nav-link-header px-3 py-3" href="/">Support</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link className="nav-link-header px-3 py-3" href="/about">About/Contact</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    );
}

export default Navbar;