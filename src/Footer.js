import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './css/Footer.css';

function Footer(){
    return (
        <ReactBootStrap.Container fluid className="FooterDiv">
            <div>
                <ReactBootStrap.Nav className="ml-auto justify-content-center pt-4">
                    <ReactBootStrap.Nav.Link className="nav-link-footer" href="/download">Download</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link className="nav-link-footer" href="/">Support</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link className="nav-link-footer" href="/about">About/Contact</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link className="nav-link-footer" href="https://github.com/JoshMorrison99/PianoWebsite">Source</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link className="nav-link-footer" href="/about">License</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </div>
        </ReactBootStrap.Container>
    );
}

export default Footer;