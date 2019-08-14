import React, { Component } from "react";
import { Container, Card, Accordion, Jumbotron } from "react-bootstrap";

class Endowment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Endowment Expedition Planning Resources</h1>
          <ul>
            <li>
              <a href="https://drive.google.com/file/d/0B4GkmQK2oyQBVnZyZFVJekQ1V2pQQlN5R2xUbkRvVUt5SlNz/view">
                Endowment Expedition Planner
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/1S6ZrD0vNA6OwFQdZOsy1Pk5R9ondguaw">
                Link to Previous Endowment Expedition Proposals{" "}
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1d6_8YIlw8NEYRwLyS4vOzc7GrTpa1bKDsQtmJvWmYO8/edit#heading=h.1p5bzkcb5vhe">
                Explanation of Mini-Expeditions
              </a>
            </li>
          </ul>
        </Jumbotron>
      </Container>
    );
  }
}

export default Endowment;
