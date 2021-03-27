import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './css/Footer.css';
import me from './images/me.jpg';

function Footer(){
    return (
        <ReactBootStrap.Container fluid className="FooterDiv">
            <div>
                <ReactBootStrap.Nav className="ml-auto justify-content-center pt-4">
                    <ReactBootStrap.Nav.Link className="nav-link-footer" href={me} download>Download</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link className="nav-link-footer" target="a_blank" href="https://www.patreon.com/dawdio">Support</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link className="nav-link-footer" href="/about">About/Contact</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link className="nav-link-footer" target="a_blank" href="https://github.com/JoshMorrison99/PianoWebsite">Source</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </div>
        </ReactBootStrap.Container>
    );
}

export default Footer;