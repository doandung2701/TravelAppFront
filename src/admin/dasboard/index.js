import React, { Component } from 'react'
import BreadCum from '../Breadcum';
import Summary from '../summary';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
             <BreadCum active="Dashboard"/>
             <div className="row">
             <Summary type="bg-primary" value="26 New Messages!"></Summary>
             <Summary type="bg-warning" value="11 New Reviews!"></Summary>
             <Summary type="bg-success" value="10 New Bookings!"></Summary>
             <Summary type="bg-danger" value="10 New Bookmarks!"></Summary> 
             </div>
            </div>
        )
    }
}
