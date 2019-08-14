import React, { Component } from "react";
import { Container, Card, Accordion, Jumbotron } from "react-bootstrap";
import orgtDriver from "../../assets/orgtDriver.pdf";
import fuelCard from "../../assets/fuelCard.pdf";

class Driver extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Van Driver Certification Process</h1>
          <p>
            Driving vehicles is an important duty of ORGT staff - all ORGT staff
            are encouraged to become certified drivers. Driving is one of the
            largest risks we take when taking out trips. Every effort must be
            made to mitigate the risk of traffic related injuries above and
            beyond the requirements legally imposed on us as drivers for the
            state of Georgia.
            <br />
            Becoming a certified ORGT Driver requires the completion of a few
            online trainings and the submission of documents outlined below.
            Completing the trainings and submitting the documents takes around 4
            hours in total. Once all documents have been submitted, you have a
            GT Fuel Pin, and you have approval from the ADOR to drive, you may.
          </p>
        </Jumbotron>

        <Card>
          <Card.Body>
            <Card.Title>Documents to be submitted electronically:</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Email these to ADOR with "ORGT Driver Docs" as the subject line
            </Card.Subtitle>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Training certificates for driving
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      <li>
                        Go to
                        <a href="https://training.osp.gatech.edu">
                          {" "}
                          this link{" "}
                        </a>
                        and log in.
                      </li>
                      <li>Select "Classes by Title" on the left.</li>
                      <li>
                        Scroll down and select "15 Passenger Van
                        Safety"/"Defensive Driving Online".
                      </li>
                      <li>
                        In the new tab, click "Van Safety"/"Defensive Driving".
                      </li>
                      <li>
                        Complete the course and save the certificate as a PDF.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Sign and scan the ORGT Volunteer Driver Agreement:{" "}
                  <a target="_blank" href={orgtDriver}>
                    link here
                  </a>
                </Accordion.Toggle>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  A copy of your driver's license
                </Accordion.Toggle>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  A copy of your driver record or DMV points summary
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul>
                      <li>
                        If you have a Georgia driver's license:
                        <ul>
                          <li>
                            Visit{" "}
                            <a href="https://online.dds.ga.gov/onlineservices/mvrintro.aspx">
                              this
                            </a>{" "}
                            link
                          </li>
                          <li>Click on the Continue button at the bottom</li>
                          <li>Log into your account or create a new one</li>
                          <li>
                            Verify that the DDS has correctly identified you and
                            click on the “Yes” button
                          </li>
                          <li>
                            On the “Account Home Page” use the Print Screen
                            option to print a copy showing your current License
                            Points total.
                          </li>
                        </ul>
                      </li>
                      <li>
                        If you are not from Georgia, you will need to submit a
                        basic driver record or the equivalent of a point
                        history. Google this for your state or talk to ORGT
                        drivers from there
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Sign and scan the ORGT Volunteer Driver Agreement:{" "}
                  <a
                    target="_blank"
                    href="https://orgt.wufoo.com/forms/orgt-additional-driver-training-info/"
                  >
                    link here
                  </a>
                </Accordion.Toggle>
              </Card>
            </Accordion>
          </Card.Body>
        </Card>
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Documents to be printed and given to ADOR:</Card.Title>
          </Card.Body>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Training Certificates for the Class-C Operator and Fleet
                Services PIN User & Supervisor Trainings:
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul>
                    <li>
                      Log-in to your Georgia Tech Account.
                      <ul>
                        <li>
                          Go to{" "}
                          <a href="http://trains.gatech.edu/courses/index#view-11337">
                            this link
                          </a>{" "}
                          for Class C Operator
                        </li>
                        <li>
                          Go to{" "}
                          <a href="http://trains.gatech.edu/courses/index#view-13166">
                            this link
                          </a>{" "}
                          for Fleet Services PIN User & Supervisor
                        </li>
                      </ul>
                    </li>
                    <li>
                      Click the “Take this Tutorial” Link. Each tutorial takes
                      less than 10 minutes and ends with several multiple choice
                      questions.
                    </li>

                    <li>Save your certificate as a PDF and print.</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Fuel Card Agreement and Request Form
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <ul>
                    <li>
                      Go to <a href={fuelCard}> this link </a>
                    </li>
                    <li>
                      Enter your GT student ID where it asks for “Employee
                      Number”.
                    </li>
                    <li>
                      Where it asks for PeopleSoft Project ID#, Enter
                      “645191413”.
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                A copy of your driver's license
              </Accordion.Toggle>
            </Card>
            <Card />
          </Accordion>
        </Card>
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Note</Card.Title>
            <Card.Text>
              In the days after submitting these printed documents you will
              receive an email from Fleet Services. Forward this to the ADOR.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Driving Trailers for ORGT</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              In order to drive a trailer on a trip to carry boats/bikes/any
              gear really, you must have direct approval from the ADOR. This
              requires practice actually driving with a trailer under
              supervision and the following video viewing and quiz.
            </Card.Subtitle>
            <Card.Text>
              <ul>
                <li>
                  <a href="https://www.youtube.com/watch?v=PL4eiO59QD8&feature=youtu.be">
                    Video
                  </a>
                </li>
                <li>
                  <a href="https://form.jotform.com/60356237764965">Quiz</a>
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Driver;
