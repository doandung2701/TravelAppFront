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
                <MainTitle title="Our Popular Tours" content="Cum doctus civibus efficiantur in imperdiet deterruisset."/>
                <TourList {...this.props}/>
                <div className="container">
				<p className="btn_home_align"><Link to="/tour" className="btn_1 rounded">View all Tours</Link></p>
                </div>
                <hr className="large"/>
                <div className="container-fluid margin_30_95 pl-lg-5 pr-lg-5">
                <Submenu title="Popular Hotels and Accommodations" content="Cum doctus civibus efficiantur in imperdiet deterruisset."/>
                <HotelList/>
                </div>
			</div>
            </div>

        );
    }
}

export default Home;