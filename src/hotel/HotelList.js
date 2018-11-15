import React, { Component } from 'react';
import Tour from '../tour/Tour';
import { connect } from 'react-redux';
import LoadingIndicator from '../common/LoadingIndicator';
class TourListInline extends Component {
    displayTour=()=>{
        if (this.props.tours!=null) {
            if (this.props.tours.length===0) {
                return (<LoadingIndicator/>)
            }
           return this.props.tours.map(tour => {
                return (
                    <div className="col-sm-12 col-md-3"  key={tour.id}><Tour tourDetail={tour} ></Tour></div>
                );
             })
        }
    }
    
    render() {
        return (
            <div>
            <div className="row">
             {this.displayTour()}
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    tours: state.tour.tours
})
export default connect(mapStateToProps, null)(TourListInline);
