import React, { Component } from 'react';

class TourHot extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <section className="hero_in tours start_bg_zoom">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="fadeInUp animated"><span />{this.props.content}</h1>
                    </div>
                    {this.props.children}
                </div>
            </section>

        );
    }
}

export default TourHot;