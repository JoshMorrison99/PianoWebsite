import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './css/Footer.css';
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import discord from './images/discord.png';

function Footer(){
    return (
        <ReactBootStrap.Container fluid className="FooterDiv">
            <div>
                <ReactBootStrap.Nav className="ml-auto justify-content-center pt-1">
                    <ReactBootStrap.Nav.Link className="nav-link-footer" target="a_blank" href={"https://www.youtube.com/channel/UCXT-b6QjIBcMUNaEic7dTTw"}> <ReactBootStrap.Image src={youtube} width="30"/> </ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link className="nav-link-footer" target="a_blank" href="https://www.instagram.com/joshmorrison99/"><ReactBootStrap.Image src={instagram} width="30"/></ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </div>
            <div>
                <ReactBootStrap.Nav className="ml-auto justify-content-center pt-2">
                    <ReactBootStrap.Nav.Link className="nav-link-footer" href="/about">About/Contact</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link className="nav-link-footer" target="a_blank" href="https://github.com/JoshMorrison99/PianoWebsite">Source</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </div>
        </ReactBootStrap.Container>
    );
}

export default Footer;