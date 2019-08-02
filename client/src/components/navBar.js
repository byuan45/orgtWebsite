import React, { Component } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";



class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SignIn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">ORGT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav >
                            <Nav.Link href="/calendar">Calendar</Nav.Link>

                            <NavDropdown title="Sports">
                                <NavDropdown.Item href="/Backpacking">Backpacking</NavDropdown.Item>
                                <NavDropdown.Item href="/bikepacking">Bikepacking</NavDropdown.Item>
                                <NavDropdown.Item href="/cascading">Cascading</NavDropdown.Item>
                                <NavDropdown.Item href="/caving">Caving</NavDropdown.Item>
                                <NavDropdown.Item href="/mountainBiking">Mountain Biking</NavDropdown.Item>
                                <NavDropdown.Item href="/rockClimbing">Rock Climbing</NavDropdown.Item>
                                <NavDropdown.Item href="/seaKayaking">Sea Kayaking</NavDropdown.Item>
                                <NavDropdown.Item href="/whitewaterKayaking">Whitewater Kayaking</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Getting Involved">
                                <NavDropdown.Item href="#action/3.1">What is ORGT</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">How to be an Instructor</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">When Are Trips</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">CORE</NavDropdown.Item>
                            </NavDropdown>


                            <NavDropdown title="Outpost">
                                <NavDropdown.Item href="#action/3.1">Outpost Stuff</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Trip Dates</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">MedKit CheckList</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Outpost CheckList</NavDropdown.Item>


                            </NavDropdown>

                            <NavDropdown title="LCC">
                                <NavDropdown.Item href="#action/3.1">LCC Stuff</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">LCC CheckList</NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown title="Climbing Wall">
                                <NavDropdown.Item href="#action/3.1">Climbing Wall Stuff</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Climbing Wall CheckList</NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown title="Admin">
                                <NavDropdown.Item href="#action/3.1">Morning Trip Reports</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Returning Trip Reports</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Trip Roster Reports</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Executive Board</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Emergency Contacts</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Other">
                                <NavDropdown.Item href="#action/3.1">ORGT History</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Van Driver Process</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Policies</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Risk Management</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Endowment Expedition</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">How to Run a Trip</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">ORGT 101</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                    <Button href="/signIn" variant="outline-success">Sign-In</Button>
                    <Button href="/register" variant="outline-success">Register</Button>

                </Navbar>
            </Container >

        );
    }
}

export default NavBar;