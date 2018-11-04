import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./TourHot.css";
class TourHot extends Component {  
    constructor(props){
        super(props);

    }
    
    render() {
        return (
            <section className="hero_in tours start_bg_zoom">
                <div className="wrapper backgroundTourHot"style={{background:'url(data:image/png;base64,'+this.props.src+")"}}>
                    <div className="container">
                        <h1 className="fadeInUp animated"><span />{this.props.content}</h1>
                    </div>
                    {this.props.children}
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    tourDetail: state.tour.tourDetail,
})
export default connect(mapStateToProps, null)(TourHot);