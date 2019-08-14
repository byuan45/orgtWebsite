import React, { Component } from "react";
import { Container, Card, Accordion, Jumbotron } from "react-bootstrap";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>ORGT History</h1>
          <p>
            ORGT began in 1970 as Outward Bound Georgia Tech. It was originally
            a part of the Student Center’s recreation program, which also
            included indoor recreation, such as bowling and pool. Two faculty
            members, Payson Kennedy and Miller Templeton, were extremely active
            in developing outdoor activities, starting with tandem whitewater
            canoeing. Under their supervision, the outdoor activities became
            popular. Eventually, students were elected to help lead these
            activities.
            <br />
            <br />
            In 1973, the program was renamed Outdoor Recreation Georgia Tech
            (ORGT). Students began taking trips in caving, canoeing, kayaking,
            rafting, backpacking, and rock climbing. In 1976, Miller Templeton
            became the ORGT administrator charged with overseeing the safety of
            the program. ORGT established the committee structure and developed
            active subcommittees with student oversight. Several outdoor sports
            became permanent ORGT activities. The program grew by leaps and
            bounds and soon required more assistance. Interns were hired on six
            month rotations from the University of Florida at Gainesville. These
            interns helped to develop ORGT by completing special projects and
            taking on various managerial functions. By 1981, ORGT had grown in
            size and become so large that a full-time staff member was needed.
            An agreement was struck between the Student Athletic Complex (now
            Campus Recreation) and the Student Center to fund a full time
            position, called the Outdoor Recreation Coordinator (ORC).
            <br />
            <br />
            The first ORC was Bob O’Connor. Unfortunately, Bob was killed in a
            kayaking accident on the Gauley River in 1982, during his first year
            as ORC. Chuck Hammersly, the next ORC, started the Wilderness
            Outpost rental program and saw further development of the ORGT
            subcommittees. In 1984, he left ORGT and was replaced by Bob Jones.
            Under Bob’s administration, ORGT was transferred to Campus
            Recreation in order to obtain greater support and funding. As a
            result of this move, ORGT became a university outdoor program and
            ceased to be merely an outdoor club. Bob left ORGT in 1988. ORGT
            operated under student direction and oversight by Miller Templeton
            until Suzi Beaumont was hired in 1989. Suzi was the ORC for eight
            years. Under her leadership, ORGT saw record growth and became a
            full-fledged outdoor program. Lynn Zwaagstra became ORC in 1997.
            Lynn helped create an updated mission and this Operation Manual.
            Lynn also created a new and improved database, which allows ORGT to
            better track participant data and equipment use. In 1998 Lynn left
            ORGT. Suzi Beaumont returned for four months to serve as interim
            ORC. Suzi was instrumental in hiring our newest ORC, Will Marble,
            who started in June of 1999. Will brings special expertise to ORGT
            with respect to group facilitation, public relations on campus, and
            risk management. It is expected that under his leadership, ORGT will
            continue to increase in quality and prosper under a climate of
            mutual respect and support between students and staff.
          </p>
        </Jumbotron>
      </Container>
    );
  }
}

export default History;
