import React from 'react';
import { Container,  Form,  Button } from "react-bootstrap";


const Returning = () => {
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
                <Form.Group controlId="leaderContact">
                    <Form.Label>Trip Leader Email</Form.Label>
                    <Form.Control required type="text" />
                </Form.Group>
                <Form.Group controlId="Date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control required type="date" placeholder="Today's Date" />
                </Form.Group>
                <Form.Group controlId="checkOut">
                    <Form.Label>Was this a "Checkout Trip" for the TL listed above?</Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Yes" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="No" type={type} id={`inline-${type}-2`} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="return">
                    <Form.Label>Did the trip return to ORGT and is now over?</Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Yes" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="No" type={type} id={`inline-${type}-2`} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="incidents">
                    <Form.Label>Where there any incidents that you need to report? </Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Yes" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="No" type={type} id={`inline-${type}-2`} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="firstAid">
                    <Form.Label>Was anything used from the First Aid kit? </Form.Label>
                    <Form.Control required type="text" placeholder="If anything was used, please specify" />
                </Form.Group>
                <Form.Group controlId="vehicle">
                    <Form.Label>If a ENTERPRISE RENTAL vehicle was used during the trip, did you ensure that it was
                        parked OUTSIDE the ORGT cages AND that the key is in the NOW locked in the TL cabinet with
                        the other ORGT van keys? </Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Yes - key is in the TL cabinet and parked outside the cage for pickup from enterprise " type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="No - I returned it to ENTERPRISE on Howell Mill " type={type} id={`inline-${type}-2`} />
                            <Form.Check inline label="N/A - Only used CRC vehicles and the keys are back in the TL cabinet " type={type} id={`inline-${type}-3`} />

                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="ball">
                    <Form.Label>I have taken the ball hitch OFF
                        of the vehicle and put it inside the TL cabinet inside ORGT. </Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Yes, I have returned the ball hitch since I know it will be stolen if left on the vehicle." type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="No, I have left it inside the vehicle because it was not engraved with 'ORGT'  " type={type} id={`inline-${type}-2`} />
                            <Form.Check inline label="N/A - Did not use a trailer or ball hitch" type={type} id={`inline-${type}-3`} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="gas">
                    <Form.Label>Did you put gas in the vehicle? </Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Yes " type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="No " type={type} id={`inline-${type}-2`} />

                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="leaderContact">
                    <Form.Label>If you put gas in the vehicle,
                        what town did you gas up in (Atlanta? Marietta, etc...)</Form.Label>
                    <Form.Control required type="text" />
                </Form.Group>
                <Form.Group controlId="gasReceipt">
                    <Form.Label>If you put gas in the vehicle,
                        did you SAVE the recipt and put it in the key packet? (you should) </Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Yes " type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="No " type={type} id={`inline-${type}-2`} />

                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="gasCard">
                    <Form.Label>Did you return the maroon gas card for the rental vehicle to the TL cabinet? </Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Yes " type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="No " type={type} id={`inline-${type}-2`} />

                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="group">
                    <Form.Label>Group Debrief -
                        what did the participant say about the trip?
                    </Form.Label>
                    <Form.Control placeholder="Please include any notes
                        on how the sport group or ORGT can improve the customer experience" as="textarea" rows="5" />
                </Form.Group>
                <Form.Group controlId="staff">
                    <Form.Label>Staff Debrief - What did staff (including IITs) say about the trip?
                    </Form.Label>
                    <Form.Control placeholder="Please include any info from the staff debrief that will help 
                        your sport group or ORGT improve policies and procedures" as="textarea" rows="5" />
                </Form.Group>
                <Form.Group controlId="gear">
                    <Form.Label>Gear Notes (NOT including vehicles) - what might need attention, repaired, replaced, cleaned, etc???
                    </Form.Label>
                    <Form.Control placeholder ="Does anything need to be fixed or replaced?"as="textarea" rows="5" />
                </Form.Group>
                <Form.Group controlId="vehicle">
                    <Form.Label>Vehicle Notes - Any needs for attention, repairs, etc...to CRC Vans or CRC Trailers.
                    </Form.Label>
                    <Form.Control  as="textarea" rows="5" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Returning;