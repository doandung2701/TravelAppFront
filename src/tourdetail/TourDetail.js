import React, { Component } from 'react';
import TourHot from './../common/TourHot';
import Rating from '../common/Rating';
import { connect } from 'react-redux';
import { loadTourByID, createCommentServer } from '../actions/tour.actions';
import LoadingIndicator from '../common/LoadingIndicator';
import { Link } from 'react-router-dom';
import './TourDetail.css';
import { loadRate } from '../actions/rate.actions';
import { Select } from 'antd';
const Option = Select.Option;
class TourDetail extends Component {
    constructor(props) {
        super(props);
        this.loadTourDetail = this.loadTourDetail.bind(this);
        this.loadTimeLine = this.loadTimeLine.bind(this);
        this.loadImage = this.loadImage.bind(this);
        this.state = {
            textComment: "",
            rateTypeId: 1
        }
    }
    componentDidMount = () => {
        const { tourId } = this.props.match.params;
        this.loadTourDetail(tourId);
        this.props.loadRateToComment();


    }
    handleTotalReview = () => {
        if (this.props.tourDetail.rates !== undefined) {
            return this.props.tourDetail.rates.length;

        }else{
            return  <LoadingIndicator/>
        }
    }

    loadTourDetail(tourID) {
        this.props.loadTour(tourID);

    }
    loadTimeLine() {
        if (this.props.tourDetail.locations !== undefined) {
            return this.props.tourDetail.locations.map((value, index) =>
                <li key={value.id}>
                    <div className="cbp_tmicon">
                        {index + 1}</div>
                    <div className="cbp_tmlabel">
                        <div className="hidden-xs">
                            <img src={"data:image/png;base64," + value.galleries[0].picture} alt="" className="rounded-circle thumb_visit" />
                        </div>
                        <h4>{value.name}</h4>
                        <p>{value.description}
                        </p>
                    </div>
                </li>

            )

        }else{
            return  <LoadingIndicator/>
        }
    }
    loadImage() {
        if (this.props.tourDetail.locations !== undefined) {
            return this.props.tourDetail.locations.map((value, index) =>
                value.galleries.map(value2 =>
                    (
                        <img key={value2.id} className="thumbnail" src={"data:image/png;base64," + value2.picture} height="100" width="100"
                            style={{ margin: '1% 1%' }}></img>

                    )

                )
            );

        }else{
            return  <LoadingIndicator/>
        }

    }
    handleRateTour = () => {
        var some = 0;
        var count = 0;
        if (this.props.rateTour !== undefined) {
            this.props.rateTour.map(rate => {
                count++;
                some = some + rate.rateType.id;
            });
            some = some / count;
            return some.toFixed(2);
        }
        return 1;

    }
    loadImageForTop = () => {
        if (this.props.tourDetail.locations !== undefined) {

            return this.props.tourDetail.locations[0].galleries[0].picture

        }else{
            return  <LoadingIndicator/>
        }
    }
    loadComment = () => {
        if (this.props.comments !== undefined) {
            return this.props.comments.map((value, index) => {
                if (value !== undefined) {
                    return <div key={value.id} className="review-box clearfix">
                        <div className="rev-content">

                            <div className="rev-info">
                                {value.user !== undefined && value.user.name}
                            </div>
                            <div className="rev-text">
                                <p>
                                    {value.commentDetail}
                                </p>
                            </div>
                        </div>
                    </div>
                }
            }
            )

        }else{
            return  <LoadingIndicator/>
        }

    }
    handleChangeRateLevel = (e) => {
        this.setState({
            rateTypeId: e
        })
    }
    createComment = (e) => {
        e.preventDefault();
        const { tourId } = this.props.match.params;
        let payload = {
            commentDetail: this.state.textComment,
            userId: 1,
            tourId: parseInt(tourId),
            rateTypeId: this.state.rateTypeId
        }
        this.props.createCommentToServer(payload);
        console.log(payload);

    }
    handleChange = (e) => {
        this.setState({
            textComment: e.target.value
        })
    }
    showComment = () => {
        if (this.props.user === null)
            return <Link to="/login">Go to Login</Link>
        else return (<form onSubmit={(e) => this.createComment(e)} >
            <div className="row">
                <div className="form-group col-md-6">
                    <label>Name and Lastname *</label>
                    <input disabled type="text" name="name_review" id="name_review" className="form-control" value={this.props.user.name} />
                </div>
                <br />
                <div className="form-group col-md-6">
                    <label>Rating</label>
                    <div className="custom-select-form">
                        <Select className="wide" defaultValue={4} style={{ width: "100%" }} onChange={(e) => this.handleChangeRateLevel(e)}>
                            {this.props.rates.map(rateValue => {
                                return <Option key={rateValue.id} value={rateValue.id}>{rateValue.rate}</Option>
                            }
                            )}

                        </Select>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <label>Your Review</label>
                    <textarea onChange={(e) => this.handleChange(e)} name="review_text" id="review_text" className="form-control" style={{ height: 130 }} defaultValue={""} />
                </div>
                <div className="form-group col-md-12 add_top_20">
                    <input disabled={this.state.textComment.length == 0} type="submit" defaultValue="Submit" className="btn_1" id="submit-review" />
                </div>
            </div>
        </form>)

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
                                    <div id="instagram-feed" className="clearfix"><div className="instagram_gallery">
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
                                            <div className="col-lg-12 text-center">
                                                <div id="review_summary">
                                                    <strong>{this.handleRateTour()}</strong>

                                                    <small>Based on {this.props.rateTour.length} reviews</small>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /row */}
                                    </div>
                                    <hr />
                                    <div className="reviews-container">
                                        {this.props.comments.map((value, index) => 
                                          
                                                 <div key={value.id} className="review-box clearfix">
                                                    <div className="rev-content">

                                                        <div className="rev-info">
                                                            {value.user !== undefined && value.user.name}
                                                        </div>
                                                        <div className="rev-text">
                                                            <p>
                                                                {value.commentDetail}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>)
                                            
                                        }
                                    </div>
                                    {/* /review-container */}
                                </section>
                                    <div className="add-review">
                                        <h5>Leave a Review</h5>
                                        {this.showComment()}
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
                                    </div>
                                    </div></aside>
                            </div>
                        </div>
                    </div>
                    );
            }
        }
        
const mapStateToProps = (state, ownProps) => ({
                        tourDetail: state.tour.tourDetail,
                    isLoading: state.tour.isLoading,
                    user: state.auth.currentUser,
                    rates: state.rate.rates,
                    comments:state.tour.commnentOfTour,
                    rateTour:state.tour.rateTour
                })
const mapDispatchToProps = dispatch => {
    return {
                        loadTour: (id) => dispatch(loadTourByID(id)),
                    loadRateToComment: () => dispatch(loadRate()),
                    createCommentToServer:(comment)=>dispatch(createCommentServer(comment))
                }
            }
export default connect(mapStateToProps, mapDispatchToProps)(TourDetail);