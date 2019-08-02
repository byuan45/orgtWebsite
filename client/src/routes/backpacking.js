import React, { Component } from 'react';
import SportsLayout from '../components/sportsLayout';


class Backpacking extends Component {
    state = {}
    render() {
        return (

            <React.Fragment>
                <SportsLayout
                    sportName="Backpacking"
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

                />

            </React.Fragment>
        );
    }
}

export default Backpacking;