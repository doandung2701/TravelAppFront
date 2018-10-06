import React, { Component } from 'react';
import { Carousel } from 'antd';
import Founder from './Founder';
class FouderList extends Component {
    render() {
        return (
            <div className="container" id="carousel">
            <Carousel autoplay>
                <div><Founder/></div>
                <div><Founder/></div>
                <div><Founder/></div>
                <div><Founder/></div>
            </Carousel>
            </div>
        );
    }
}
export default FouderList;