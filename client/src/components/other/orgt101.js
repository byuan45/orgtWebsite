import React, { Component } from "react";
import { Container, Card, Accordion } from "react-bootstrap";

class ORGT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <Card.Body>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Van Driver Certification Process:{" "}
                <a target="_blank" href="/driver">
                  link here
                </a>
              </Accordion.Toggle>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Benefits Once Staff Become Instructors
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ul>
                    <li>
                      Buzz Card Access to ORGT to perform ORGT staff Duties
                    </li>
                    <li>Discounts on OUTPOST gear rentals</li>
                    <li>Discounts on ORGT classes/trips</li>
                    <li>
                      Discounts on additional national training's/certifications
                      (such as WFR, ACA, Cave Rescue, SWR, etc...)
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                How to make a redbook entry
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p>need to do..</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                How to Gain Access to Experticity (ProDeal) -- INSTRUCTORS ONLY
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <h3>FOR ORGT INSTRUCTORS AND ABOVE: </h3>
                  We get that your work in ORGT strengthens our organization –
                  so we wanted to let you know how much we appreciate you.
                  <br />
                  <br />
                  Experticity.com seamlessly connects top name brands with brand
                  advocates – people like you with the personal and professional
                  contacts to truly influence sales – via deep discounts.
                  <br />
                  <br />
                  Simply buy products on experticity.com, use them, talk about
                  them with friends and trip participants and discuss their
                  benefits.
                  <br />
                  <br />
                  Brands get needed product exposure, you get significant
                  discounts on gear that you love, and ORGT gets staff with
                  great gear that encourages them to become better at their
                  sport - so it’s a win-win-win!
                  <br />
                  <br />
                  Remember, this is only for ACTIVE ORGT volunteer staff (TLs
                  and Instructors) and you will NOT buy for your friends or
                  family.
                  <br />
                  <br />
                  ORGT staff (David Knobbe) will approve your application only
                  if you are an active ORGT volunteer. Your access will expire
                  in 1 year (or sooner if you are not active). You can renew
                  each year if you are still ACTIVE volunteer staff.
                  <br />
                  <br />
                  The purchases are monitored and you could jeopardize the
                  program for all of us if you buy for people other than
                  yourself. For example, the experticity staff will wonder why
                  you bought a size 12 boot when you normally buy size 9 or when
                  you buy a women's top when you are a guy. They have software
                  that tracts your orders. So do not even try to cheat the
                  system.
                  <br />
                  <br />
                  Go to{" "}
                  <a href="https://www.experticity.com">
                    ORGT's Experticity team page:
                  </a>{" "}
                  Click “Sign Up” and enter your Group Code: ASK DAVID KNOBBE OR
                  OEB PRESIDENT FOR ACCESS CODE to gain free access to these
                  250+ PRO DEALS!
                  <br />
                  <br />
                  If the code does not work, select "Add Affiliation" and search
                  "Outdoor Recreation Georgia Tech." Your request will then be
                  approved by David Knobbe, ADOR.
                  <br />
                  <br />
                  Do NOT share this code or email!
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                Definition of an ORGT Training Trip
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <h3>ORGT Training Trips</h3>
                  <h6>Intro</h6>
                  <p>
                    ORGT is built on experiential learning and through
                    reflecting on that experience. Staff only training trips are
                    an excellent opportunity to develop this experience.
                  </p>
                  <h6>Parameters</h6>
                  <ul>
                    <li>
                      MUST be led by an ORGT Trip Leader of that particular
                      sport
                    </li>
                    <li>
                      All participants of the training trip should be MOU
                      holding staff (only exception is if ADOR has given
                      approval)
                    </li>
                    <li>
                      The purpose of the trip should be on teaching skills,
                      providing feedback on instruction, and modeling how ORGT
                      IP trips are run. This should NOT be an ORGT sponsored
                      personal trips.
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    );
  }
}

export default ORGT;
