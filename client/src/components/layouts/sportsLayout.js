import React, { Component } from "react";
import { Container, Table, Jumbotron, Accordion, Card, Button, ButtonGroup, DropdownButton, Dropdown, Carousel } from "react-bootstrap";
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';


function SportsLayout(props) {
    return (
        <React.Fragment>

            <Container>
                <Jumbotron>
                    <h1>{props.sportName}</h1>
                    <p>
                        Meeting Time: {props.meetingDay} at {props.meetingTime} in ORGT
                    </p>
                    <p>
                        {props.rollSchool}
                    </p>
                </Jumbotron>

                <div >
                    <ButtonGroup className="mb-4" >
                        <Button href={props.sportName + "/MeetingMinutes"} >Meeting Minutes</Button>
                        <Button href={props.sportName + "/CheckList"} >Checklist</Button>
                        <DropdownButton as={ButtonGroup} title="Roster/Staffing" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">{props.sportName} Roster</Dropdown.Item>
                            <Dropdown.Item eventKey="2">IP Trip Staffing Spreadsheet</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton as={ButtonGroup} title="Documents" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="3">Policies</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Leave No Trace</Dropdown.Item>
                            <Dropdown.Item eventKey="5">Curriculum Documents</Dropdown.Item>
                            <Dropdown.Item eventKey="6">Seminar Topics </Dropdown.Item>
                            <Dropdown.Item eventKey="7">Teaching Materials</Dropdown.Item>


                        </DropdownButton>
                        <DropdownButton as={ButtonGroup} title="Trip Info" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="8">Redbooks</Dropdown.Item>
                            <Dropdown.Item eventKey="9">Trip Planning Resources</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </div>
                <Accordion className="mb-4">
                    <Card >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Upcoming {props.sportName} IP Trips
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Beginner Overnight A: June 1 & 2</th>
                                        <th>Beginner Overnight B: June 8 & 9</th>
                                        <th>Day Hike: July 14</th>
                                    </tr>
                                </thead>
                            </Table>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            {props.sportName} Officers
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Officers</th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Vice President</td>
                                        <td>{props.sportVP}</td>
                                        <td>{props.contactVP}</td>
                                    </tr>
                                    <tr>
                                        <td>Gear Guru</td>
                                        <td>{props.sportGear}</td>
                                        <td>{props.contactGear}</td>
                                    </tr>
                                    <tr>
                                        <td>Training</td>
                                        <td>{props.sportTraining}</td>
                                        <td>{props.contactTraining}</td>
                                    </tr>
                                    <tr>
                                        <td>Scribe</td>
                                        <td>{props.sportScribe}</td>
                                        <td>{props.contactScribe}</td>
                                    </tr>
                                    <tr>
                                        <td>Social Chair</td>
                                        <td>{props.sportSocial}</td>
                                        <td>{props.contactSocial}</td>
                                    </tr>
                                    <tr>
                                        <td>New and Prospective Staff Liaison</td>
                                        <td>{props.sportNew}</td>
                                        <td>{props.contactNew}</td>
                                    </tr>

                                </tbody>

                            </Table>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Carousel>
                    <Carousel.Item>
                        <img src={pic1} width="1200" height="500" alt="rando" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={pic2} width="1200" height="500" alt="rando" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={pic3} width="1200" height="500" alt="rando" />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </React.Fragment >
    );
}


export default SportsLayout;