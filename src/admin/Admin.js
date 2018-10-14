import React, { Component } from 'react'
import { Switch } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Dashboard from './dasboard';
import  CustomerPage  from './customer/index';
import AdminHeader from './adminheader';
export default class AdminPage extends Component {
    render() {
        return (
            <div>
                <AdminHeader></AdminHeader>
                <div className="content-wrapper">
                <Switch>
                    <Route exact path='/admin' component={Dashboard}/>
                    <Route exact path='/admin/customer' render={(props)=><CustomerPage {...props}/>}/>
                    <Route exact path='/admin/booking' />
                    <Route exact path='/admin/gallery'/>
                    <Route exact path='/admin/hotel' />
                    <Route exact path='/admin/location'/>
                    <Route exact path='/admin/provider' />
                    <Route exact path='/admin/ticket'/>
                    <Route exact path='/admin/tour'/>
                    <Route exact path='/admin/vehicle' />
                    <Route exact path='/admin/vehicletype'/>
                </Switch>
                </div>
            </div>
        )
    }
}
