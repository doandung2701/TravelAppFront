import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
class Tour extends Component {
    handleRateTour=()=>{
        var some=0;
        this.props.tourDetail.rateTours.map(rate=>{
                some=some+rate.id;
        });
        some=some/(this.props.tourDetail.rateTours.length);
        return some.toFixed(2);

    }

    
    render() {
        return (
            <div className="item">
                <div className="box_grid">
                    <figure>

                        <Link to={`/tourDetail/${this.props.tourDetail.id}`} className="wish_bt" aria-hidden={true} />
                        <Link to={`/tourDetail/${this.props.tourDetail.id}`}><img src={"data:image/png;base64,"+this.props.tourDetail.locations[0].galleries[0].picture} className="img-fluid" alt="Detail" width={800} height={533} /><div className="read_more"><span>Read more</span></div></Link>
                        <small>{this.props.tourDetail.category.name}</small>
                    </figure>
                    <div className="wrapper">
                        <h3><Link to={`/tourDetail/${this.props.tourDetail.id}`}>{this.props.tourDetail.name}</Link></h3>
                        <span className="price">From <strong>${this.props.tourDetail.price}</strong> /per person</span>
                    </div>
                    <ul>
                        <li>Free space: {this.props.tourDetail.freeSpace}</li>
                        <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>{this.handleRateTour()}</strong></div></li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Tour;