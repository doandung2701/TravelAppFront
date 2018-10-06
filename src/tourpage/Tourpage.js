import React, { Component } from 'react';
import TourHot from '../common/TourHot';
import FilterTour from './FilterTour';
import SideBar from './SideBar';
import Tour from '../tour/Tour';
import MainTitle from '../common/MainTitle';

class Tourpage extends Component {
    render() {
        return (
            <div>
                <TourHot content="Tour hot" />
                <FilterTour />
                <div className="container margin_60_35">
                    <div className="row">
                        <SideBar />
                        <div className="col-lg-9">
                            <div className="isotope-wrapper" style={{ position: 'relative', height: '1447.8px' }}>
                                <div className="row">
                                    <div className="col-md-6 isotope-item popular">
                                        <Tour />
                                    </div>
                                    <div className="col-md-6 isotope-item popular">
                                        <Tour />
                                    </div>
                                    <div className="col-md-6 isotope-item popular">
                                        <Tour />
                                    </div>
                                    <div className="col-md-6 isotope-item popular">
                                        <Tour />
                                    </div>
                                    <div className="col-md-6 isotope-item popular">
                                        <Tour />
                                    </div>
                                    <div className="col-md-6 isotope-item popular">
                                        <Tour />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tourpage;