import React, { Component } from "react";
import Backpacking from "./routes/backpacking";
import SeaKayaking from "./routes/seaKayaking";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import MeetingMinute from "./components/meetingMinuteLayout";
import SignIn from "./routes/signIn";
import Register from "./routes/register";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Route exact path="/Backpacking" component={Backpacking} />
          <Route path="/Backpacking/MeetingMinutes" component={MeetingMinute} />
          <Route exact path="/seaKayaking" component={SeaKayaking} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/register" component={Register} />

        </Router>


      </React.Fragment>
    );
  }
}

export default App;