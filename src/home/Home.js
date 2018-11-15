import React, { Component } from 'react';
import TourList from './../tour/TourList';
import MainTitle from '../common/MainTitle';
import Top from './../common/Top';
import Submenu from './../common/Submenu';
import HotelList from '../hotel/HotelList';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div>
                <Top/>
                <div className="container-fluid margin_80_0">
                <MainTitle title="Our Popular Tours" content="Tour hot"/>
                <TourList {...this.props}/>
                <div className="container">
				<p className="btn_home_align"><Link to="/search" className="btn_1 rounded">View all Tours</Link></p>
                </div>
                <hr className="large"/>
                <div className="container-fluid margin_30_95 pl-lg-5 pr-lg-5">
                <Submenu title="Popular Tours" content="Tour hot"/>
                <HotelList/>
                </div>
			</div>
            </div>

        );
    }
}

export default Home;