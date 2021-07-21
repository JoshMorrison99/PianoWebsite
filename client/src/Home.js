import React from "react";
import backgroundVideo from "../src/videos/backgroundVideo.m4v";
import * as ReactBootStrap from "react-bootstrap";
import windows from "./images/windows.png";
import mac from "./images/apple.png";
import "./css/Home.css";
import setup from "./setup/primepianistinstaller.exe";
import { Button, Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center mt-5 pt-5">
        <Col sm={12} md={5} align="center" className="mb-5">
          <h1 className="pianoHeaderTextWallpaper">
            Become a Better Piano Player
          </h1>
          <Button
            className="downloadBtn"
            variant="outline-dark"
            href={setup}
            download
          >
            {" "}
            <ReactBootStrap.Image src={windows} width="30px" /> Windows Download
          </Button>{" "}
          <Button className="downloadBtn" variant="outline-dark">
            {" "}
            <ReactBootStrap.Image src={mac} width="30px" /> Mac Download (Soon)
          </Button>{" "}
        </Col>
        <Col sm={12} md={5}>
          <div className="embed-responsive embed-responsive-16by9 vid">
            <video embed-responsive-item autoPlay loop muted>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
