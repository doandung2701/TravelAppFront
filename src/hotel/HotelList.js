import React, { Component } from 'react';
import Hotel from './Hotel';

class HotelList extends Component {
    render() {
        return (
            <div>
            <div className="row">
                <Hotel/>
                <Hotel/>
                <Hotel/>
                <Hotel/>
            </div>
            <a href="hotels-grid-isotope.html"><strong>View all (157) <i className="arrow_carrot-right"></i></strong></a>
            </div>
        );
    }
}

export default HotelList;