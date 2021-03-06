import React, { Component } from 'react';
import TourHot from '../common/TourHot';
import SideBar from './SideBar';
import Tour from '../tour/Tour';
import { connect } from 'react-redux';
import { loadTour, loadTourByCategory, StartProcess } from '../actions/tour.actions';
import LoadingIndicator from '../common/LoadingIndicator';
class Tourpage extends Component {

    componentDidMount = () => {
        const {categoryID}=this.props.match.params;
        if(categoryID==='all'){
            this.props.loadTour();
        }else{
            this.props.loadTourByCategory(categoryID);
        }

        
       
    }
    componentWillReceiveProps(nextProps) {

        
        if (nextProps.match.params.categoryID !== this.props.match.params.categoryID) {
            const categoryID = nextProps.match.params.categoryID;
            if(categoryID==='all'){
                this.props.loadTour();
            }else{
                this.props.loadTourByCategory(categoryID);
            }
            
        }
      }


    renderDataHasLoading=()=>{
       
        if (this.props.tour.length==0) {
            return <LoadingIndicator/>
          }else{
            return   this.props.tour.map(tour => {
                return (
                    <div key={tour.id} className="col-md-6 isotope-item popular">
                        <Tour tourDetail={tour} ></Tour>
                    </div>)
            })
           
        }
    }
    render() {
        
        return (
            <div>
                <TourHot content="Hot tour" />
                <div className="container margin_60_35">
                    <div className="row">
                        <SideBar loadTourByCategory={(category)=>this.props.loadTourByCategory(category)}/>
                        <div className="col-lg-9">
                            <div className="isotope-wrapper">
                                <div className="row">
                                    {this.renderDataHasLoading()}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
        
const mapStateToProps = (state, ownProps) => ({
                    tour: state.tour.tours,
                    isLoading: state.tour.isLoading,
                    categories:state.category.categories
            })
const mapDispatchToProps = dispatch => {
    return {
                    loadTour: () => dispatch(loadTour()),
                    loadTourByCategory:(category)=>dispatch(loadTourByCategory(category)),
                    startProcess:()=>dispatch(StartProcess())
            }
        }
export default connect(mapStateToProps, mapDispatchToProps)(Tourpage);