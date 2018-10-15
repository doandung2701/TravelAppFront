import React, { Component } from 'react';
import './Top.css';
import SelectCategory from './SelectCategory';

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
                  <p>Expolore top rated tours, hotels and restaurants around the world</p>
                  <form>
                    <div className="row no-gutters custom-search-input-2">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="What are you looking for..." />
                          <i className="icon_search" />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Where" />
                          <i className="icon_pin_alt" />
                        </div>
                      </div>
                      <SelectCategory/>
                      <div className="col-lg-2">
                        <input type="submit" className="btn_search" defaultValue="Search" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <img src="/img/video_fix.png" alt="" className="header-video--media" data-video-src="/video/intro" data-teaser-source="/video/intro" data-provider data-video-width={1920} data-video-height={960} style={{display: 'none'}} />
            <video autoPlay="true" loop="loop" muted id="teaser-video" className="teaser-video"><source src="/video/intro.mp4" type="video/mp4" /><source src="/video/intro.ogv" type="video/ogg" /></video></section>          
        );
    }
}

export default Top;