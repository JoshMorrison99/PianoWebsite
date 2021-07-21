import React from "react";
import { Container, Nav, Image } from "react-bootstrap";
import "./css/Footer.css";
import youtube from "./images/youtube.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import discord from "./images/discord.png";

function Footer() {
  return (
    <Container fluid className="FooterDiv">
      <div>
        <Nav className="ml-auto justify-content-center pt-1">
          <Nav.Link
            className="nav-link-footer"
            target="a_blank"
            href={"https://www.youtube.com/channel/UCDj-K11fBHMZB7w31T3X08A"}
          >
            {" "}
            <Image src={youtube} width="30" />{" "}
          </Nav.Link>
          <Nav.Link
            className="nav-link-footer"
            target="a_blank"
            href="https://www.instagram.com/primepianist/"
          >
            <Image src={instagram} width="30" />
          </Nav.Link>
          <Nav.Link
            className="nav-link-footer"
            target="a_blank"
            href="https://discord.gg/xsSB6XXg"
          >
            <Image src={discord} width="30" />
          </Nav.Link>
          <Nav.Link
            className="nav-link-footer"
            target="a_blank"
            href="https://twitter.com/PianistPrime"
          >
            <Image src={twitter} width="30" />
          </Nav.Link>
        </Nav>
      </div>
    </Container>
  );
}

export default Footer;
