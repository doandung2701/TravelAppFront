import React, { Component } from 'react';

class FilterTour extends Component {
    render() {
        return (
            <div className="filters_listing sticky_horizontal" style={{}}>
                <div className="container">
                    <ul className="clearfix">
                        <li>
                            <div className="switch-field">
                                <input type="radio" id="all" name="listing_filter" defaultValue="all" defaultChecked data-filter="*" className="selected" />
                                <label htmlFor="all">All</label>
                                <input type="radio" id="popular" name="listing_filter" defaultValue="popular" data-filter=".popular" />
                                <label htmlFor="popular">Popular</label>
                                <input type="radio" id="latest" name="listing_filter" defaultValue="latest" data-filter=".latest" />
                                <label htmlFor="latest">Latest</label>
                            </div>
                        </li>
                        <li>
                            <div className="layout_view">
                                <a href="#0" className="active"><i className="icon-th" /></a>
                                <a href="tours-list-sidebar.html"><i className="icon-th-list" /></a>
                            </div>
                        </li>
                        <li>
                            <a className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
                        </li>
                    </ul>
                </div>
                {/* /container */}
            </div>

        );
    }
}

export default FilterTour;