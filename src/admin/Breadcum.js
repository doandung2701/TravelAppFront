import React, { Component } from 'react'

export default class BreadCum extends Component {
    constructor(props) {
        super(props)
        console.log(this.props);
    }
    render() {
        return (
            <div>
            <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="abc">Home</a>
            </li>
            <li className="breadcrumb-item active">{this.props.active}</li>
          </ol>
          </div>
        )
    }
}
