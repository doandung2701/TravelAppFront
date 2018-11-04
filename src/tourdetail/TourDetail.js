import React, { Component } from 'react';
import TourHot from './../common/TourHot';
import Rating from '../common/Rating';
import { connect } from 'react-redux';
import { loadTourByID } from '../actions/tour.actions';
import LoadingIndicator from '../common/LoadingIndicator';
import './TourDetail.css';
class TourDetail extends Component {
    constructor(props) {
        super(props);
        this.loadTourDetail = this.loadTourDetail.bind(this);
        this.loadTimeLine = this.loadTimeLine.bind(this);
        this.loadImage = this.loadImage.bind(this);
    }
    componentDidMount = () => {
        const { tourId } = this.props.match.params;
        this.loadTourDetail(tourId);
    }

    loadTourDetail(tourID) {
        this.props.loadTour(tourID);
    }
    loadTimeLine() {
        if (this.props.tourDetail.locations !== undefined) {
            return this.props.tourDetail.locations.map((value, index) =>
                <li>
                    <div className="cbp_tmicon">
                        {index + 1}</div>
                    <div className="cbp_tmlabel">
                        <div className="hidden-xs">
                            <img  src={"data:image/png;base64," + value.galleries[0].picture} alt="" className="rounded-circle thumb_visit" />
                        </div>
                        <h4>{value.name}</h4>
                        <p>{value.description}
                        </p>
                    </div>
                </li>

            )

        }
    }
    loadImage() {
        if (this.props.tourDetail.locations !== undefined) {
            return this.props.tourDetail.locations.map((value, index) => 
                value.galleries.map(value2 => 
                     (  
                        <img  class="thumbnail"   src={"data:image/png;base64," + value2.picture}  height="100" width="100"
                        style={{ margin: '1% 1%'}}></img>
                       
                    )
                
                )
            );
    
        };

    }
    handleRateTour=()=>{
        var some=0;
        if (this.props.tourDetail.rateTours !== undefined) { 
            this.props.tourDetail.rateTours.map(rate=>{
                    some=some+rate.id;
            });
            some=some/(this.props.tourDetail.rateTours.length);
            return some.toFixed(2);
        }

    }
    loadImageForTop=()=>{
        if (this.props.tourDetail.locations !== undefined) {
           
                return this.props.tourDetail.locations[0].galleries[0].picture       
        
        }

    }
    render() {
        if (this.props.isLoading) {
            return <LoadingIndicator />
        }
        if (!this.props.isLoading)
            return (
                <div>
                    <TourHot content={this.props.tourDetail.name} src={this.loadImageForTop()}>
                    </TourHot>
                    <div className="bg_color_1" style={{ transform: "none" }}>
                        <nav className="secondary_nav sticky_horizontal" style={{}}>
                            <div className="container">
                                <ul className="clearfix">
                                    <li><a href="#description" className="active">Description</a></li>
                                    <li><a href="#reviews">Reviews</a></li>
                                    <li><a href="#sidebar">Booking</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="container margin_60_35" style={{ transform: "none" }}>
                        <div className="row">
                            <div className="col-lg-8">
                                <section id="description">
                                    <h2>Description</h2>
                                    <h3>{this.props.tourDetail.name}</h3>
                                    <h3>Image</h3>
                                    <div id="instagram-feed" class="clearfix"><div class="instagram_gallery">
                                    {this.loadImage()}
                                    </div>
                                    </div>
                                    <div id="instagram-feed" className="clearfix"></div>
                                    <h3>Program</h3>
                                    <ul className="cbp_tmtimeline">
                                        {this.loadTimeLine()}
                                    </ul>
                                    <hr />                                    
                                </section>
                                <section id="reviews">
                                    <h2>Reviews</h2>
                                    <div className="reviews-container">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div id="review_summary">
                                                    <strong>{this.handleRateTour()}</strong>
                                                    <em>Superb</em>
                                                    <small>Based on 4 reviews</small>
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
                                                </div>
                                                {/* /row */}
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
                                                </div>
                                                {/* /row */}
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
                                                </div>
                                                {/* /row */}
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
                                                </div>
                                                {/* /row */}
                                                <div className="row">
                                                    <div className="col-lg-10 col-9">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: 0 }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
                                                </div>
                                                {/* /row */}
                                            </div>
                                        </div>
                                        {/* /row */}
                                    </div>
                                    <hr />
                                    <div className="reviews-container">
                                        <div className="review-box clearfix">
                                            <figure className="rev-thumb"><img src="img/avatar1.jpg" alt="" />
                                            </figure>
                                            <div className="rev-content">
                                                <div className="rating">
                                                    <i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                                                </div>
                                                <div className="rev-info">
                                                    Admin – April 03, 2016:
        </div>
                                                <div className="rev-text">
                                                    <p>
                                                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
          </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /review-box */}
                                        <div className="review-box clearfix">
                                            <figure className="rev-thumb"><img src="img/avatar2.jpg" alt="" />
                                            </figure>
                                            <div className="rev-content">
                                                <div className="rating">
                                                    <i className="icon-star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                                                </div>
                                                <div className="rev-info">
                                                    Ahsan – April 01, 2016:
        </div>
                                                <div className="rev-text">
                                                    <p>
                                                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
          </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /review-box */}
                                        <div className="review-box clearfix">
                                            <figure className="rev-thumb"><img src="img/avatar3.jpg" alt="" />
                                            </figure>
                                            <div className="rev-content">
                                                <div className="rating">
                                                    <i className="icon-star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                                                </div>
                                                <div className="rev-info">
                                                    Sara – March 31, 2016:
        </div>
                                                <div className="rev-text">
                                                    <p>
                                                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
          </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /review-box */}
                                    </div>
                                    {/* /review-container */}
                                </section>
                                <div className="add-review">
                                    <h5>Leave a Review</h5>
                                    <form>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label>Name and Lastname *</label>
                                                <input type="text" name="name_review" id="name_review" placeholder="fasdfd" className="form-control" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Email *</label>
                                                <input type="email" name="email_review" id="email_review" className="form-control" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <div className="custom-select-form">
                                                    <Rating />
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>Your Review</label>
                                                <textarea name="review_text" id="review_text" className="form-control" style={{ height: 130 }} defaultValue={""} />
                                            </div>
                                            <div className="form-group col-md-12 add_top_20">
                                                <input type="submit" defaultValue="Submit" className="btn_1" id="submit-review" />
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <aside className="col-lg-4" id="sidebar" style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 649 }}>
                                <div className="theiaStickySidebar" style={{ paddingTop: 0, paddingBottom: 1, transform: 'translateY(-20px)', top: 0, left: '964.6px', width: 350 }}><div className="box_detail booking">
                                    <div className="price">
                                        <span>{this.props.tourDetail.price}$ <small>person</small></span>
                                        <div className="score"><span>Good<em>350 Reviews</em></span><strong>{this.handleRateTour()}</strong></div>
                                    </div>
                                    <a href="cart-1.html" className="btn_1 full-width purchase">Purchase</a>
                                    <a href="wishlist.html" className="btn_1 full-width outline wishlist"><i className="icon_heart" /> Add to wishlist</a>
                                    <div className="text-center"><small>No money charged in this step</small></div>
                                </div><ul className="share-buttons">
                                        <li><a className="fb-share" href="#0"><i className="social_facebook" /> Share</a></li>
                                        <li><a className="twitter-share" href="#0"><i className="social_twitter" /> Tweet</a></li>
                                        <li><a className="gplus-share" href="#0"><i className="social_googleplus" /> Share</a></li>
                                    </ul><div className="resize-sensor" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div className="resize-sensor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: 'all 0s ease 0s', width: 360, height: 446 }} /></div><div className="resize-sensor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: '0s', width: '200%', height: '200%' }} /></div></div></div></aside>
                        </div>
                    </div>
                </div>
            );
    }
}

const mapStateToProps = (state, ownProps) => ({
    tourDetail: state.tour.tourDetail,
    isLoading: state.tour.isLoading
})
const mapDispatchToProps = dispatch => {
    return {
        loadTour: (id) => dispatch(loadTourByID(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TourDetail);