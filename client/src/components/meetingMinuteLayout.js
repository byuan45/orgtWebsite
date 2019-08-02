import React, { Component, useState } from "react";
import { Container, Tabs, Tab, Form, Col, Row, Button } from "react-bootstrap";

function MeetingMinute(props) {
    const [story, setStory] = useState([{ value: null }]);
    const [event, setEvent] = useState([{ value: null }]);
    const [exec, setExec] = useState([{ value: null }]);
    const [old, setOld] = useState([{ value: null }]);
    const [newInfo, setNew] = useState([{ value: null }]);
    const [forum, setForum] = useState([{ value: null }]);
    const [special, setSpecial] = useState([{ value: null }]);
    const [ORGT, setORGT] = useState([{ value: null }]);


    const storyUpdates = [story, setStory]
    const eventUpdates = [event, setEvent]
    const execUpdates = [exec, setExec]
    const oldUpdates = [old, setOld]
    const newUpdates = [newInfo, setNew]
    const forumUpdates = [forum, setForum]
    const specialUpdates = [special, setSpecial]
    const ORGTUpdates = [ORGT, setORGT]


    function handleChange(i, event, name) {
        const values = [...name[0]];
        values[i].value = event.target.value;
        name[1](values);
    }

    function handleAdd(name) {
        const values = [...name[0]];
        values.push({ value: null });
        name[1](values);
    }

    function handleRemove(i, name) {
        const values = [...name[0]];
        values.splice(i, 1);
        name[1](values);
    }



    return (
        <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="Create" title="Create">
                    <Form>
                        <Form.Group controlId="Date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Today's Date" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Control type="number" placeholder="Male Attendance" />
                            </Col>
                            <Col>
                                <Form.Control type="number" placeholder="Female Attendance" />
                            </Col>
                        </Row>
                        <Form.Group controlId="Stories">
                            <Form.Label className="mt-4">Past Stories</Form.Label>
                            {story.map((a, idx) => {
                                return (
                                    <div key={`${a}-${idx}`}>
                                        <Row>
                                            <Col>
                                                <Form.Control type="text"
                                                    placeholder="Enter text"
                                                    value={a.value || ""}
                                                    onChange={e => handleChange(idx, e, storyUpdates)}
                                                    as="textarea" />
                                            </Col>
                                            <Col>
                                                <Button variant="danger" onClick={() => handleRemove(idx, storyUpdates)}>
                                                    Remove
                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                            <Button className="mt-3" variant="primary" onClick={() => handleAdd(storyUpdates)}>
                                Add
                    </Button>
                        </Form.Group>
                        <Form.Group controlId="Events">
                            <Form.Label className="mt-1"> Upcoming Sport Events</Form.Label>
                            {event.map((a, idx) => {
                                return (
                                    <div key={`${a}-${idx}`}>
                                        <Row>
                                            <Col>
                                                <Form.Control type="text"
                                                    placeholder="Enter text"
                                                    value={a.value || ""}
                                                    onChange={e => handleChange(idx, e, eventUpdates)}
                                                    as="textarea" />
                                            </Col>
                                            <Col>
                                                <Button variant="danger" onClick={() => handleRemove(idx, eventUpdates)}>
                                                    Remove
                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                            <Button className="mt-3" variant="primary" onClick={() => handleAdd(eventUpdates)}>
                                Add
                    </Button>
                        </Form.Group>
                        <Form.Group controlId="Exec">
                            <Form.Label className="mt-1"> ORGT Executive Board Update</Form.Label>
                            {exec.map((a, idx) => {
                                return (
                                    <div key={`${a}-${idx}`}>
                                        <Row>
                                            <Col>
                                                <Form.Control type="text"
                                                    placeholder="Enter text"
                                                    value={a.value || ""}
                                                    onChange={e => handleChange(idx, e, execUpdates)}
                                                    as="textarea" />
                                            </Col>
                                            <Col>
                                                <Button variant="danger" onClick={() => handleRemove(idx, execUpdates)}>
                                                    Remove
                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                            <Button className="mt-3" variant="primary" onClick={() => handleAdd(execUpdates)}>
                                Add
                    </Button>
                        </Form.Group>
                        <Form.Group controlId="Officers">
                            <Form.Label>Officer Reports</Form.Label>
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="Training" title="Training">
                                    <Form.Control as="textarea" rows="5" />

                                </Tab>
                                <Tab eventKey="New Person" title="New Person">
                                    <Form.Control as="textarea" rows="5" />

                                </Tab>
                                <Tab eventKey="Gear" title="Gear">
                                    <Form.Control as="textarea" rows="5" />

                                </Tab>
                                <Tab eventKey="Social" title="Social">
                                    <Form.Control as="textarea" rows="5" />

                                </Tab>
                                <Tab eventKey="Scribe" title="Scribe">
                                    <Form.Control as="textarea" rows="5" />

                                </Tab>
                            </Tabs>
                        </Form.Group>
                        <Form.Group controlId="oldBuisness">
                            <Form.Label className="mt-1"> Old Buisness</Form.Label>
                            {old.map((a, idx) => {
                                return (
                                    <div key={`${a}-${idx}`}>
                                        <Row>
                                            <Col>
                                                <Form.Control type="text"
                                                    placeholder="Enter text"
                                                    value={a.value || ""}
                                                    onChange={e => handleChange(idx, e, oldUpdates)}
                                                    as="textarea" />
                                            </Col>
                                            <Col>
                                                <Button variant="danger" onClick={() => handleRemove(idx, oldUpdates)}>
                                                    Remove
                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                            <Button className="mt-3" variant="primary" onClick={() => handleAdd(oldUpdates)}>
                                Add
                    </Button>
                        </Form.Group>
                        <Form.Group controlId="newBuisness">
                            <Form.Label className="mt-1"> New Business</Form.Label>
                            {newInfo.map((a, idx) => {
                                return (
                                    <div key={`${a}-${idx}`}>
                                        <Row>
                                            <Col>
                                                <Form.Control type="text"
                                                    placeholder="Enter text"
                                                    value={a.value || ""}
                                                    onChange={e => handleChange(idx, e, newUpdates)}
                                                    as="textarea" />
                                            </Col>
                                            <Col>
                                                <Button variant="danger" onClick={() => handleRemove(idx, newUpdates)}>
                                                    Remove
                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                            <Button className="mt-3" variant="primary" onClick={() => handleAdd(newUpdates)}>
                                Add
                    </Button>
                        </Form.Group>
                        <Form.Group controlId="openForum">
                            <Form.Label className="mt-1"> Open Forum/ Suggestions</Form.Label>
                            {forum.map((a, idx) => {
                                return (
                                    <div key={`${a}-${idx}`}>
                                        <Row>
                                            <Col>
                                                <Form.Control type="text"
                                                    placeholder="Enter text"
                                                    value={a.value || ""}
                                                    onChange={e => handleChange(idx, e, forumUpdates)}
                                                    as="textarea" />
                                            </Col>
                                            <Col>
                                                <Button variant="danger" onClick={() => handleRemove(idx, forumUpdates)}>
                                                    Remove
                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                            <Button className="mt-3" variant="primary" onClick={() => handleAdd(forumUpdates)}>
                                Add
                    </Button>
                        </Form.Group>
                        <Form.Group controlId="specialRecognition">
                            <Form.Label className="mt-1"> Special Recognition</Form.Label>
                            {special.map((a, idx) => {
                                return (
                                    <div key={`${a}-${idx}`}>
                                        <Row>
                                            <Col>
                                                <Form.Control type="text"
                                                    placeholder="Enter text"
                                                    value={a.value || ""}
                                                    onChange={e => handleChange(idx, e, specialUpdates)}
                                                    as="textarea" />
                                            </Col>
                                            <Col>
                                                <Button variant="danger" onClick={() => handleRemove(idx, specialUpdates)}>
                                                    Remove
                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                            <Button className="mt-3" variant="primary" onClick={() => handleAdd(specialUpdates)}>
                                Add
                    </Button>
                        </Form.Group>
                        <Form.Group controlId="ORGT">
                            <Form.Label className="mt-1"> ORGTeer's Doing Great Things</Form.Label>
                            {ORGT.map((a, idx) => {
                                return (
                                    <div key={`${a}-${idx}`}>
                                        <Row>
                                            <Col>
                                                <Form.Control type="text"
                                                    placeholder="Enter text"
                                                    value={a.value || ""}
                                                    onChange={e => handleChange(idx, e, ORGTUpdates)}
                                                    as="textarea" />
                                            </Col>
                                            <Col>
                                                <Button variant="danger" onClick={() => handleRemove(idx, ORGTUpdates)}>
                                                    Remove
                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                            <Button className="mt-3" variant="primary" onClick={() => handleAdd(ORGTUpdates)}>
                                Add
                            </Button>
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="Previous" title="Previous">
                    <div> previous meeting minutes </div>
                </Tab>
            </Tabs >


        </Container >
    );
}

export default MeetingMinute;