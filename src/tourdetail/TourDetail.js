import React, { Component } from 'react';
import TourHot from './../common/TourHot';
import Gallery from '../common/Gallery';
import Rating from '../common/Rating';

class TourDetail extends Component {
    render() {
        return (
            <div>
                <TourHot content="TOUR DETAIL PAGE">
                    <Gallery />
                </TourHot>
                <div className="bg_color_1" style={{ transform: "none" }}>
                    <nav className="secondary_nav sticky_horizontal" style={{}}>
                        <div className="container">
                            <ul className="clearfix">
                                <li><a href="#description" className="active">Description</a></li>
                                <li><a href="#reviews" className>Reviews</a></li>
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
                                <p>Per consequat adolescens ex, cu nibh commune <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                                <h3>Instagram photos feed</h3>
                                <div id="instagram-feed" className="clearfix"><div className="instagram_gallery"><a href="abc">
                                	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/195476312c57c601381a60a3d96f3933/5C58E6BE/t51.2885-15/sh0.08/e35/s640x640/41327506_327484114494113_8746217105089100890_n.jpg" alt="thelouvremuseum instagram" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="acbasfs" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/4ba2f4599eac41df797cb90996a7d436/5C459915/t51.2885-15/sh0.08/e35/s640x640/41338795_403690450164444_268012618996183899_n.jpg" alt="thelouvremuseum instagram" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/BnovhJ4AKwW" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/e3713da367840e4d9c1ac68ffa53bfa8/5C3FA1F3/t51.2885-15/sh0.08/e35/c51.0.978.978/s640x640/40384583_2257317684297584_3778302655607537727_n.jpg" alt="thelouvremuseum instagram2" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/Bnk60Don9GW" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/2de1ca121de15c1ee231f2b4ac2145dc/5C3F6855/t51.2885-15/sh0.08/e35/c0.118.1080.1080/s640x640/40332875_344222639455590_1248625861617819376_n.jpg" alt="thelouvremuseum instagram  3" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/BnekuD5hDAi" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/a975b7d8b5b2b9c516b6e811744d878d/5C502A59/t51.2885-15/sh0.08/e35/c58.0.964.964/s640x640/40170123_1949000265143310_1653671243380936980_n.jpg" alt="thelouvremuseum instagram  4" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/BnO0WcPhsQb" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/e5d4f5cb7a2f1d6a51b0858de0945792/5C602215/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/39752942_2106383469611323_4979399909762400256_n.jpg" alt="thelouvremuseum instagram  5" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/Bm_ajB-n1IA" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/629e7a48cbb87a150091aba8c0a03925/5C5D55E0/t51.2885-15/sh0.08/e35/c78.0.924.924/s640x640/39133091_692289477779561_1705023964071329792_n.jpg" alt="thelouvremuseum instagram  6" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/Bm_V8cgn5tj" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/a07134977a00fb8969cca299f5fcd247/5C3CD549/t51.2885-15/sh0.08/e35/c179.0.722.722/s640x640/39346973_1068322186660138_2473558746228326400_n.jpg" alt="thelouvremuseum instagram  7" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/Bm3m3bGnMPI" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/ce8644cf2c675464123ced8984716503/5C5D22BE/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/39327526_690206951355033_4047176304682860544_n.jpg" alt="thelouvremuseum instagram  8" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/Bmyu2AIBSIe" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/4e8d99272aecf16507d24c2090b9324b/5C60E207/t51.2885-15/sh0.08/e35/c109.0.861.861/s640x640/38792559_241844833145188_1174905466510114816_n.jpg" alt="thelouvremuseum instagram  9" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/Bmvdr0BnaLN" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/113e86b730d2be4a40b1dffc7e82af2f/5C4B2888/t51.2885-15/sh0.08/e35/c137.0.805.805/s640x640/38861223_1953767487977230_6522235334527287296_n.jpg" alt="thelouvremuseum instagram  10" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a>
                                    <a href="https://www.instagram.com/p/BmtW_wkHDbz" >	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/42b9f2bb1b5b4959004d41076c04b1f0/5C58C48A/t51.2885-15/sh0.08/e35/s640x640/38779296_256585241637750_236649197611253760_n.jpg" alt="thelouvremuseum instagram  11" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a></div></div>
                                <hr />
                                <h3>Program <small>(60 minutes)</small></h3>
                                <p>
                                    Iudico omnesque vis at, ius an laboramus adversarium. An eirmod doctus admodum est, vero numquam et mel, an duo modo error. No affert timeam mea, legimus ceteros his in. Aperiri honestatis sit at. Eos aeque fuisset ei, case denique eam ne. Augue invidunt has ad, ullum debitis mea ei, ne aliquip dignissim nec.
  </p>
                                <ul className="cbp_tmtimeline">
                                    <li>
                                        <time className="cbp_tmtime" dateTime="09:30"><span>30 min.</span><span>09:30</span>
                                        </time>
                                        <div className="cbp_tmicon">
                                            1
      </div>
                                        <div className="cbp_tmlabel">
                                            <div className="hidden-xs">
                                                <img src="img/tour_plan_1.jpg" alt="" className="rounded-circle thumb_visit" />
                                            </div>
                                            <h4>Interior of the cathedral</h4>
                                            <p>
                                                Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
        </p>
                                        </div>
                                    </li>
                                    <li>
                                        <time className="cbp_tmtime" dateTime="11:30"><span>2 hours</span><span>11:30</span>
                                        </time>
                                        <div className="cbp_tmicon">
                                            2
      </div>
                                        <div className="cbp_tmlabel">
                                            <div className="hidden-xs">
                                                <img src="img/tour_plan_2.jpg" alt="" className="rounded-circle thumb_visit" />
                                            </div>
                                            <h4>Statue of Saint Reparata</h4>
                                            <p>
                                                Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
        </p>
                                        </div>
                                    </li>
                                    <li>
                                        <time className="cbp_tmtime" dateTime="13:30"><span>1 hour</span><span>13:30</span>
                                        </time>
                                        <div className="cbp_tmicon">
                                            3
      </div>
                                        <div className="cbp_tmlabel">
                                            <div className="hidden-xs">
                                                <img src="img/tour_plan_3.jpg" alt="" className="rounded-circle thumb_visit" />
                                            </div>
                                            <h4>Huge clock decorated</h4>
                                            <p>
                                                Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
        </p>
                                        </div>
                                    </li>
                                    <li>
                                        <time className="cbp_tmtime" dateTime="14:30"><span>2 hours</span><span>14:30</span>
                                        </time>
                                        <div className="cbp_tmicon">
                                            4
      </div>
                                        <div className="cbp_tmlabel">
                                            <div className="hidden-xs">
                                                <img src="img/tour_plan_4.jpg" alt="" className="rounded-circle thumb_visit" />
                                            </div>
                                            <h4>Vasari's fresco</h4>
                                            <p>
                                                Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
        </p>
                                        </div>
                                    </li>
                                </ul>
                                <hr />
                                <p>Mea appareat omittantur eloquentiam ad, nam ei quas <strong>oportere democritum</strong>. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="bullets">
                                            <li>Dolorem mediocritatem</li>
                                            <li>Mea appareat</li>
                                            <li>Prima causae</li>
                                            <li>Singulis indoctum</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="bullets">
                                            <li>Timeam inimicus</li>
                                            <li>Oportere democritum</li>
                                            <li>Cetero inermis</li>
                                            <li>Pertinacia eum</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* /row */}
                                <hr />
                                <h3>Location</h3>
                                {/* End Map */}
                            </section>
                            <section id="reviews">
                                <h2>Reviews</h2>
                                <div className="reviews-container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div id="review_summary">
                                                <strong>8.5</strong>
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
                                            <input type="text" name="name_review" id="name_review" placeholder className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Email *</label>
                                            <input type="email" name="email_review" id="email_review" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className="custom-select-form">
                                               <Rating/>
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
                                    <span>45$ <small>person</small></span>
                                    <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="dates" placeholder="When.." />
                                    <i className="icon_calendar" />
                                </div>
                                <div className="panel-dropdown">
                                    <a href="this is a link">Guests <span className="qtyTotal">1</span></a>
                                    <div className="panel-dropdown-content right">
                                        <div className="qtyButtons">
                                            <label>Adults</label>
                                            <div className="qtyDec" /><input type="text" name="qtyInput" defaultValue={1} /><div className="qtyInc" />
                                        </div>
                                        <div className="qtyButtons">
                                            <label>Childrens</label>
                                            <div className="qtyDec" /><input type="text" name="qtyInput" defaultValue={0} /><div className="qtyInc" />
                                        </div>
                                    </div>
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

export default TourDetail;