import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import program from "./program/CarletonGymBookingAutomation.exe";

const Gym = () => {
  return (
    <Container>
      <Row className="align-items-center justify-content-center mt-5 pt-5">
        <Col align="center" className="mt-5">
          <h1>Carleton Gym Booking Automation Program</h1>
          <Button
            className="mt-4"
            variant="dark"
            size="lg"
            download
            href={program}
          >
            Download
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Gym;
