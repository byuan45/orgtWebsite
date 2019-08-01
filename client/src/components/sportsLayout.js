import React, { Component } from "react";
import { Container, Table, Jumbotron, Accordion, Card, Button, ButtonGroup, DropdownButton, Dropdown, Carousel } from "react-bootstrap";
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';


class SportsLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>

                <Container>
                    <Jumbotron>
                        <h1>{this.props.sportName}</h1>
                        <p>
                            Meeting Time: {this.props.meetingDay} at {this.props.meetingTime} in ORGT
                        </p>
                    </Jumbotron>

                    <div >
                        <ButtonGroup className="mb-4" >
                            <Button href={this.props.sportName + "/MeetingMinutes"} >Meeting Minutes</Button>
                            <DropdownButton as={ButtonGroup} title="Roster/Staffing" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">{this.props.sportName} Roster</Dropdown.Item>
                                <Dropdown.Item eventKey="2">IP Trip Staffing Spreadsheet</Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton as={ButtonGroup} title="Documents" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">ORGT {this.props.sportName} Strategic Plan</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Policies</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Curriculum Documents</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Transition Documents </Dropdown.Item>
                                <Dropdown.Item eventKey="2">{this.props.sportName} Seminar Topics </Dropdown.Item>

                            </DropdownButton>
                            <DropdownButton as={ButtonGroup} title="IP Trip Info" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">IP Trip Staffing Spreadsheet</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Trip Planning Resources</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Teaching Materials</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
                    </div>
                    <Accordion className="mb-4">
                        <Card >
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Upcoming {this.props.sportName} IP Trips
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
                                {this.props.sportName} Officers
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
                                            <td>{this.props.sportVP}</td>
                                            <td>{this.props.contactVP}</td>
                                        </tr>
                                        <tr>
                                            <td>Gear Guru</td>
                                            <td>{this.props.sportGear}</td>
                                            <td>{this.props.contactGear}</td>
                                        </tr>
                                        <tr>
                                            <td>Training</td>
                                            <td>{this.props.sportTraining}</td>
                                            <td>{this.props.contactTraining}</td>
                                        </tr>
                                        <tr>
                                            <td>Scribe</td>
                                            <td>{this.props.sportScribe}</td>
                                            <td>{this.props.contactScribe}</td>
                                        </tr>
                                        <tr>
                                            <td>Social Chair</td>
                                            <td>{this.props.sportSocial}</td>
                                            <td>{this.props.contactSocial}</td>
                                        </tr>
                                        <tr>
                                            <td>New and Prospective Staff Liaison</td>
                                            <td>{this.props.sportNew}</td>
                                            <td>{this.props.contactNew}</td>
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
}

export default SportsLayout;