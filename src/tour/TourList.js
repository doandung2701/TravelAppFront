import React, { Component } from 'react';
import Tour from './Tour';
import { Carousel } from 'antd';
import './TourList.css';
import { connect } from 'react-redux';
import { loadTour } from '../actions/tour.actions';
class TourList extends Component {
    componentDidMount = () => {
      this.props.loadTour();
    }
    
    render() {
        return (
            <div className="container">
            <Carousel autoplay>
            {console.log(this.props.tour)}
            {this.props.tour.map(tour => {

                                return (
                                    <div  key={tour.id}><Tour tourDetail={tour} ></Tour></div>
                                );
                             })}
            </Carousel>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    tour: state.tour.tours
})
const mapDispatchToProps = dispatch => {
    return {
        loadTour: () => dispatch(loadTour())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TourList);