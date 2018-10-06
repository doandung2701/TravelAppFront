import React, { Component } from 'react';
import Tour from './Tour';
import { Carousel } from 'antd';
import './TourList.css';
class TourList extends Component {
    render() {
        return (
            <div className="container">
            <Carousel autoplay>
                <div><Tour/></div>
                <div><Tour/></div>
                <div><Tour/></div>
                <div><Tour/></div>
            </Carousel>
            </div>
        );
    }
}

export default TourList;