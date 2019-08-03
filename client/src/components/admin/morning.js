import React from 'react';
import { Container, Form, Button } from "react-bootstrap";


const Morning = () => {
    return (
        <Container>
            <h1 className="mt-5">Morning Trip Report </h1>
            <p>STOP - YOU WILL BE ASKED TO CONFIRM IF A REDBOOK TRIP INFORMATION PAGE EXISTS FOR THIS TRIP.
                GO CONFIRM IT BEFORE CONTINUING WITH THIS FORM!!
                This is an important Risk Management Document.
                In case of an emergency, it helps David, EMS and GA TECH provide help to you and the group.
            </p>
            <Form>
                <Form.Group controlId="tripName">
                    <Form.Label>Trip Name</Form.Label>
                    <Form.Control required type="text" />
                </Form.Group>
                <Form.Group controlId="tripCategory">
                    <Form.Label>Trip Category</Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="IP Trip" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="CORE" type={type} id={`inline-${type}-2`} />
                            <Form.Check inline label="Training Trip" type={type} id={`inline-${type}-3`} />
                            <Form.Check inline label="Tech Trek" type={type} id={`inline-${type}-4`} />
                            <Form.Check inline label="Other" type={type} id={`inline-${type}-5`} />

                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="sportName">
                    <Form.Label>Sport Name</Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Backpacking" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Bikepacking" type={type} id={`inline-${type}-2`} />
                            <Form.Check inline label="Cascading" type={type} id={`inline-${type}-3`} />
                            <Form.Check inline label="Caving" type={type} id={`inline-${type}-4`} />
                            <Form.Check inline label="Mountain Biking" type={type} id={`inline-${type}-5`} />
                            <Form.Check inline label="Rock Climbing" type={type} id={`inline-${type}-6`} />
                            <Form.Check inline label="Sea Kayaking" type={type} id={`inline-${type}-7`} />
                            <Form.Check inline label="Whitewater Kayaking" type={type} id={`inline-${type}-8`} />
                            <Form.Check inline label="Other (e.g. for Tech Trek" type={type} id={`inline-${type}-9`} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="leaderName">
                    <Form.Label>Trip Leader Name</Form.Label>
                    <Form.Control required type="text" />
                </Form.Group>
                <Form.Group controlId="leaderNumber">
                    <Form.Label>Trip Leader Phone Number</Form.Label>
                    <Form.Control required type="tel" />
                </Form.Group>
                <Form.Group controlId="leaderEmail">
                    <Form.Label>Trip Leader Email</Form.Label>
                    <Form.Control required type="email" />
                </Form.Group>
                <Form.Group controlId="checkOut">
                    <Form.Label>Is this a "Checkout Trip" for the TL listed above?</Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Yes" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="No" type={type} id={`inline-${type}-2`} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="timeReturn">
                    <Form.Label>Time Return</Form.Label>
                    <Form.Control required type="datetime-local" />
                </Form.Group>
                <Form.Group controlId="type">
                    <Form.Label>This is a </Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="One Day" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Multi Day" type={type} id={`inline-${type}-2`} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="instructors">
                    <Form.Label>FULL Name of Instructors - Their Cell Number - Their Email
                    </Form.Label>
                    <Form.Control placeholder="Instructors in this sport only. 
                        Also, list this sport TLs if they are helping with the trip, but not the main TL of record."
                        as="textarea" rows="5" />
                </Form.Group>
                <Form.Group controlId="satPhone">
                    <Form.Label>I have an ORGT Satellite Phone on this trip
                            (last five digits)</Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="43198 " type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="59825 " type={type} id={`inline-${type}-2`} />
                            <Form.Check inline label="65429 " type={type} id={`inline-${type}-3`} />
                            <Form.Check inline label="65430 " type={type} id={`inline-${type}-4`} />
                            <Form.Check inline label="59824 " type={type} id={`inline-${type}-5`} />
                            <Form.Check inline label="I do NOT have a sat phone on trip " type={type} id={`inline-${type}-6`} />       
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="InReach">
                    <Form.Label>I have a Garmin InReach Satellite Texting Unit on this trip,
                    </Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="2 " type={type} id={`inline-${type}-2`} />
                            <Form.Check inline label="3 " type={type} id={`inline-${type}-3`} />
                            <Form.Check inline label="4 " type={type} id={`inline-${type}-4`} />
                            <Form.Check inline label="5 " type={type} id={`inline-${type}-5`} />
                            <Form.Check inline label="6 " type={type} id={`inline-${type}-5`} />
                            <Form.Check inline label="7 " type={type} id={`inline-${type}-5`} />
                            <Form.Check inline label="I do NOT have an InReach Unit" type={type} id={`inline-${type}-6`} />       
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="iit">
                    <Form.Label>FULL Name of Instructors in Training for this sport 
                        (They must have an MOU on file or treat them like participants) - 
                        Their Cell Number - Their Email
                    </Form.Label>
                    <Form.Control placeholder= "i.e. Don't count a Backpacking IIT on a Vertical caving trip"
                        as="textarea" rows="5" />
                </Form.Group>
                <Form.Group controlId="WFA">
                    <Form.Label>Name of the staff person 
                        on this trip that is currently certified as a WFA or higher
                    </Form.Label>
                    <Form.Control required type="text" />
                </Form.Group>
                <Form.Group controlId="participants">
                    <Form.Label>NAMES of class PARTICIPANTS that ACTUALLY showed up this morning for the trip.
                                
                    </Form.Label>
                    <Form.Control placeholder= "You can put just their names ONLY if the google doc is 
                            complete with EMERGENCY CONTACT INFO. 
                            Otherwise you will need to fill that in here. "required type="text" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
            
        </Container>
    );
}
export default Morning;