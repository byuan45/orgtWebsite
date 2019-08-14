import React, { Component } from 'react';
import { Container, Tabs, Tab, Card, ListGroup } from "react-bootstrap";

class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="IIT" title="Instructor-In-Training">
                        <Card style={{ width: '18rem' }}>
                            <Card.Title>Promotes a Culture of Safety:</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Conducts themselves in a manner that promotes safe actions among staff and
                                participants</ListGroup.Item>
                                <ListGroup.Item>Has given a safety talk, explaining the following:
                                <br />
                                    Inherent danger ofthe activity and location
                                <br />
                                    Staff responsibility incase of emergency
                                <br />
                                    Articulateparticipant’s responsibilityfortheirown safety
                                <br />
                                    Alist of emergency equipment carried on the trip
                                <br />
                                    Thephilosophy ofChallenge byChoice
                                </ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Tab>
                    <Tab eventKey="I" title="Instructor">
                    </Tab>
                    <Tab eventKey="TL" title="Trip Leader">
                    </Tab>
                    <Tab eventKey="STL" title="Senior Trip Leader">
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default Checklist;