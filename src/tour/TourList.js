import React, { Component } from 'react';
import Tour from './Tour';
import { Carousel } from 'antd';
import './TourList.css';
import { connect } from 'react-redux';
import { loadTour } from '../actions/tour.actions';
import LoadingIndicator from '../common/LoadingIndicator';
class TourList extends Component {
    componentDidMount = () => {
      this.props.loadTour();
    }
    displayTour=()=>{

            if (this.props.tours!=null) {
                if (this.props.tours.length===0) {
                    return (<LoadingIndicator/>)
                }
                return this.props.tours.map(tour => {
                     return (
                         <div  key={tour.id}><Tour tourDetail={tour} ></Tour></div>
                     );
                  })
             }
        }
       
    
    render() {
        return (
            <div className="container">
            <Carousel autoplay>
            {this.displayTour()}
            </Carousel>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    tours: state.tour.tours,
    isLoading:state.tour.isLoading
})
const mapDispatchToProps = dispatch => {
    return {
        loadTour: () => dispatch(loadTour())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TourList);