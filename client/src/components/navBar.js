import React, { Component } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Backpacking from "./sports/backpacking/backpacking";
import CheckList from "./sports/backpacking/backpackingCheck";
import SeaKayaking from "./sports/seaKayaking/seaKayaking";

import MeetingMinute from "./layouts/meetingMinuteLayout";
import Redbooks from "./layouts/redbooks";

import SignIn from "./auth/signIn";
import SignOut from "./auth/signOut";

import Register from "./auth/register";
import Morning from "./admin/morning";
import Returning from "./admin/returning";

import ProtectedRoute from "../protectedRoute";
import Home from "./home";
import Profile from "./profile.js";

import History from "./other/history.js";
import Driver from "./other/driver.js";
import Policies from "./other/policies.js";
import Risk from "./other/risk.js";
import Expedition from "./other/Expedition.js";
import Trip from "./other/trip.js";
import ORGT from "./other/orgt101.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Router>
          <Navbar align="center" bg="light" expand="lg">
            <Navbar.Brand href="/">ORGT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="/calendar">Calendar</Nav.Link>
                <NavDropdown title="Sports">
                  <NavDropdown.Item href="/Backpacking">
                    Backpacking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/bikepacking">
                    Bikepacking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/cascading">
                    Cascading
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/caving">Caving</NavDropdown.Item>
                  <NavDropdown.Item href="/mountainBiking">
                    Mountain Biking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/rockClimbing">
                    Rock Climbing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/seaKayaking">
                    Sea Kayaking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/whitewaterKayaking">
                    Whitewater Kayaking
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Getting Involved">
                  <NavDropdown.Item href="/what-is">
                    What is ORGT
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/how-to">
                    How to be an Instructor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/when">
                    When Are Trips
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/CORE">CORE</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Outpost">
                  <NavDropdown.Item href="/random1">
                    Outpost Stuff
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allTrips">
                    Trip Dates
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/medkit">
                    MedKit CheckList
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/outpostChecklist">
                    Outpost CheckList
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="LCC">
                  <NavDropdown.Item href="/random2">LCC Stuff</NavDropdown.Item>
                  <NavDropdown.Item href="/leadershipCheckList">
                    LCC CheckList
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Climbing Wall">
                  <NavDropdown.Item href="/random3">
                    Climbing Wall Stuff
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/climbingWallChecklist">
                    Climbing Wall CheckList
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Admin">
                  <NavDropdown.Item href="http://orgt.pbworks.com/w/page/37629590/TRIP%20LEADER%20MORNING%20REPORT">
                    Morning Trip Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="http://orgt.pbworks.com/w/page/37685955/Return%20Trip%20Check%20in%20Report">
                    Returning Trip Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="http://orgt.pbworks.com/Participant%20List%20--%20New%20Fusion%20System">
                    Trip Roster Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item href="http://orgt.pbworks.com/w/page/23074544/Executive%20Board%C2%A0">
                    Executive Board
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/contacts">
                    Emergency Contacts
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Other">
                  <NavDropdown.Item href="/history">
                    ORGT History
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/driver">
                    Van Driver Process
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/policies">Policies</NavDropdown.Item>
                  <NavDropdown.Item href="/risk">
                    Risk Management
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/expedition">
                    Endowment Expedition
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/trip">
                    How to Run a Trip
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/orgt101">ORGT 101</NavDropdown.Item>
                </NavDropdown>
                {this.props.authenticated ? (
                  <span>
                    <Button className="ml-3" href="/profile">
                      Profile
                    </Button>
                    <SignOut />
                  </span>
                ) : (
                  <span>
                    <Button className="ml-3" href="/signIn">
                      Sign In
                    </Button>
                    <Button className="ml-3" href="/register">
                      Register
                    </Button>
                  </span>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/history" component={History} />
            <Route exact path="/driver" component={Driver} />
            <Route exact path="/policies" component={Policies} />
            <Route exact path="/risk" component={Risk} />
            <Route exact path="/expedition" component={Expedition} />
            <Route exact path="/trip" component={Trip} />
            <Route exact path="/orgt101" component={ORGT} />

            <Route exact path="/profile" component={Profile} />
            <Route exact path="/Backpacking" component={Backpacking} />
            <Route
              exact
              path="/Backpacking/MeetingMinutes"
              component={MeetingMinute}
            />
            <Route exact path="/Backpacking/Checklist" component={CheckList} />
            <Route exact path="/seaKayaking" component={SeaKayaking} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/morning" component={Morning} />
            <Route exact path="/returning" component={Returning} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default NavBar;
