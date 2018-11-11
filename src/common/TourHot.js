import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./TourHot.css";
class TourHot extends Component {  
    constructor(props){
        super(props);

    }
    renderView=()=>{
        console.log(typeof this.props.src);
        if(this.props.src=='undefined'){
            return (
                <section className="hero_in tours start_bg_zoom">
                    <div className="wrapper backgroundTourHot bg-black"style={{background:'url(data:image/png;base64,'+this.props.src+")"}}>
                        <div className="container">
                            <h1 className="fadeInUp animated"><span />{this.props.content}</h1>
                        </div>
                        {this.props.children}
                    </div>
                </section>
    
            );
        }else{
            return (
                <section className="hero_in tours start_bg_zoom">
                    <div className="wrapper backgroundTourHot bg-black"style={{backgroundImage:'url("/img/amazing-beautiful-golf-course-scenery-web-header.jpg")',"background-size": "cover"}}>
                        <div className="container">
                            <h1 className="fadeInUp animated"><span />{this.props.content}</h1>
                        </div>
                        {this.props.children}
                    </div>
                </section>
    
            );
        }
    }
    render() {
        
   
           return (
               <div>
                   {this.renderView()}
               </div>
           )

    
    }
}
const mapStateToProps = (state, ownProps) => ({
    tourDetail: state.tour.tourDetail,
})
export default connect(mapStateToProps, null)(TourHot);