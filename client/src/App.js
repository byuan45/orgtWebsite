import React, { Component } from "react";
import Backpacking from "./components/sports/backpacking";
import SeaKayaking from "./components/sports/seaKayaking";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import MeetingMinute from "./components/layouts/meetingMinuteLayout";
import SignIn from "./components/auth/signIn";
import Register from "./components/auth/register";
import Morning from "./components/admin/morning";
import Returning from "./components/admin/returning";



class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Route exact path="/Backpacking" component={Backpacking} />
          <Route exact path="/Backpacking/MeetingMinutes" component={MeetingMinute} />
          <Route exact path="/seaKayaking" component={SeaKayaking} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/morning" component={Morning} />
          <Route exact path="/returning" component={Returning} />
          <div> Landing Page</div>
        </Router>


      </React.Fragment>
    );
  }
}

export default App;