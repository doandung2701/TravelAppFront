import React, { Component } from 'react'

export default class Summary extends Component {
    render() {
        return (
            <div className="col-xl-3 col-sm-6 mb-3">
           
            <div className={`card dashboard text-white o-hidden h-100 ${this.props.type}`}>
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-envelope-open" />
                </div>
                <div className="mr-5"><h5>{this.props.value}</h5></div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="messages.html">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
          
        )
    }
}
