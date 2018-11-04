import React, { Component } from 'react';
import './Top.css';
import Search from  './Search';
class Top extends Component {
    constructor(props) {
        super(props);
        this.state={
            showCatalogue:false
        }
        this.toggleCategory=this.toggleCategory.bind(this);
    }
    toggleCategory=()=>{
        this.setState({
            showCatalogue:!this.state.showCatalogue
        });
    }
    
    render() {
        // const {showCatalogue}=this.state;
        return (
            <section className="header-video">
            <div id="hero_video">
              <div className="wrapper">
                <div className="container">
                  <h3>Book unique experiences</h3>
                  <p>Expolore top rated tours, hotels around the world</p>
                  <Search/>
                </div>
              </div>
            </div>
            <img src="/img/video_fix.png" alt="" className="header-video--media" data-video-src="/video/intro" data-teaser-source="/video/intro" data-provider data-video-width={1920} data-video-height={960} style={{display: 'none'}} />
            <video autoPlay="true" loop="loop" muted id="teaser-video" className="teaser-video"><source src="/video/intro.mp4" type="video/mp4" /><source src="/video/intro.ogv" type="video/ogg" /></video></section>          
        );
    }
}

export default Top;