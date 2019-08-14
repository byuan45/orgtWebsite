import React, { Component } from 'react';
import SportsLayout from '../../layouts/sportsLayout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Backpacking extends Component {
    state = {}
    render() {
        return (

            <React.Fragment>
                <SportsLayout
                    sportName="Backpacking"
                    rollSchool=""
                    meetingDay="Thursday"
                    meetingTime="6:30PM"
                    sportVP="Lily Sandler"
                    contactVP="lilysandler3@gmail.com"
                    sportGear="Matthew Wallace"
                    contactGear="matthew0517@gmail.com"
                    sportTraining="Tom Orchard"
                    contactTraining="tom.l.orchard@gmail.com"
                    sportScribe="Dylan Kemelor"
                    contactScribe="dkemelor@gatech.edu"
                    sportSocial="Jeremy Bers"
                    contactSocial="jbers3@gatech.edu"
                    sportNew="Matt Sternberg"
                    contactNew="msterny97@gmail.com"
                    staffTrip="https://docs.google.com/spreadsheets/d/1U6yPs7Cs-sxWN47gLfQ1m3XphPHbSzW98nD-ngMv_Og/edit#gid=1315682087"
                    checklist="https://drive.google.com/file/d/1UgtHe2hHCb3fMaNw8xCyLUnBy0z8RbIl/view"

                />

            </React.Fragment>
        );
    }
}

export default Backpacking;