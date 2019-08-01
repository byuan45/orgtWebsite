import React, { Component } from 'react';
import SportsLayout from '../components/sportsLayout';


class SeaKayaking extends Component {
    state = {}
    render() {
        return (
            <SportsLayout
                sportName="Sea Kayaking"
                meetingDay="Tuesdays"
                meetingTime="6:00PM"
                sportVP="Jenifur Li"
                contactVP="jennili@gatech.edu"
                sportGear="Ellie Wangerin"
                contactGear="elliewangerine@gmail.com"
                sportTraining="Pragadeesh Muthiah"
                contactTraining="m.pragadeesh95@gmail.com"
                sportScribe="Alisa Yakovenko"
                contactScribe="ayakovenko@gatech.edu"
                sportSocial="Kseniya Spikina"
                contactSocial="kaspikina@gmail.com"
                sportNew="Gigi McGaughey"
                contactNew="gmcgaughey3@gatech.edu"

            />
        );
    }
}

export default SeaKayaking;