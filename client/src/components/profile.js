import React from 'react';
import { Container, Row, Col, Image, Card, Tab, Nav } from 'react-bootstrap';
import person from '../assets/person.jpg';
const Profile = () => {
    return (
        <Container>
            <Row>
                <Col sm={3} className="mt-4 mb-4">
                    <Image src={person} roundedCircle />
                </Col>
                <Col sm={9} className="mt-4 mb-4">
                    <Card>
                        <Card.Header>Brandon Yuan</Card.Header>
                        <Card.Body>
                            <Card.Title>Sports: Sea Kayaking</Card.Title>
                            <Card.Text>
                                SHORT BIO
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Tab.Container id="profileStuff" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">CheckList</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Sport Progression</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div>test</div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div>rip</div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div>okurrr</div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </Container>
    );
};
export default Profile;