import React, { Component } from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import alcohol from "../../assets/alcohol_drugs.pdf";
import leaveNoTrace from "../../assets/leaveNoTrace.pdf";
import river from "../../assets/river_crossing.pdf";
import transportation from "../../assets/transportation.pdf";
import weather from "../../assets/weather_hazards.pdf";

class Policies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <a href={alcohol}>Alcohol and Drugs</a>
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <a href="https://lnt.org/get-involved/training-courses/">
                LNT Online Training
              </a>
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <a href={leaveNoTrace}>Leave No Trace</a>
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <a href={river}>River Crossing</a>
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Medical Concerns Conversation{" "}
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Parking at ORGT Policy
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              Trip Prep Checklist{" "}
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              <a href={transportation}>Transportation</a>
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
              Meaning of Major Moving Violations{" "}
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
              OEB Accepted Policies
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="10">
              Overall Sport Policy
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="11">
              Sport Specific Policies{" "}
            </Accordion.Toggle>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="12">
              <a href={weather}>Weather Hazards</a>
            </Accordion.Toggle>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default Policies;
