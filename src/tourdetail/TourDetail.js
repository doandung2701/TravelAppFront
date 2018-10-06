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
                                <div id="instagram-feed" className="clearfix"><div className="instagram_gallery"><a href="https://www.instagram.com/p/BoKFcEXAiMl" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/195476312c57c601381a60a3d96f3933/5C58E6BE/t51.2885-15/sh0.08/e35/s640x640/41327506_327484114494113_8746217105089100890_n.jpg" alt="thelouvremuseum instagram image 0" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/Bn6lOagnBKv" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/4ba2f4599eac41df797cb90996a7d436/5C459915/t51.2885-15/sh0.08/e35/s640x640/41338795_403690450164444_268012618996183899_n.jpg" alt="thelouvremuseum instagram image 1" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/BnovhJ4AKwW" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/e3713da367840e4d9c1ac68ffa53bfa8/5C3FA1F3/t51.2885-15/sh0.08/e35/c51.0.978.978/s640x640/40384583_2257317684297584_3778302655607537727_n.jpg" alt="thelouvremuseum instagram image 2" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/Bnk60Don9GW" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/2de1ca121de15c1ee231f2b4ac2145dc/5C3F6855/t51.2885-15/sh0.08/e35/c0.118.1080.1080/s640x640/40332875_344222639455590_1248625861617819376_n.jpg" alt="thelouvremuseum instagram image 3" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/BnekuD5hDAi" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/a975b7d8b5b2b9c516b6e811744d878d/5C502A59/t51.2885-15/sh0.08/e35/c58.0.964.964/s640x640/40170123_1949000265143310_1653671243380936980_n.jpg" alt="thelouvremuseum instagram image 4" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/BnO0WcPhsQb" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/e5d4f5cb7a2f1d6a51b0858de0945792/5C602215/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/39752942_2106383469611323_4979399909762400256_n.jpg" alt="thelouvremuseum instagram image 5" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/Bm_ajB-n1IA" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/629e7a48cbb87a150091aba8c0a03925/5C5D55E0/t51.2885-15/sh0.08/e35/c78.0.924.924/s640x640/39133091_692289477779561_1705023964071329792_n.jpg" alt="thelouvremuseum instagram image 6" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/Bm_V8cgn5tj" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/a07134977a00fb8969cca299f5fcd247/5C3CD549/t51.2885-15/sh0.08/e35/c179.0.722.722/s640x640/39346973_1068322186660138_2473558746228326400_n.jpg" alt="thelouvremuseum instagram image 7" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/Bm3m3bGnMPI" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/ce8644cf2c675464123ced8984716503/5C5D22BE/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/39327526_690206951355033_4047176304682860544_n.jpg" alt="thelouvremuseum instagram image 8" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/Bmyu2AIBSIe" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/4e8d99272aecf16507d24c2090b9324b/5C60E207/t51.2885-15/sh0.08/e35/c109.0.861.861/s640x640/38792559_241844833145188_1174905466510114816_n.jpg" alt="thelouvremuseum instagram image 9" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/Bmvdr0BnaLN" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/113e86b730d2be4a40b1dffc7e82af2f/5C4B2888/t51.2885-15/sh0.08/e35/c137.0.805.805/s640x640/38861223_1953767487977230_6522235334527287296_n.jpg" alt="thelouvremuseum instagram image 10" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a><a href="https://www.instagram.com/p/BmtW_wkHDbz" target="_blank">	<img src="https://instagram.fhan5-4.fna.fbcdn.net/vp/42b9f2bb1b5b4959004d41076c04b1f0/5C58C48A/t51.2885-15/sh0.08/e35/s640x640/38779296_256585241637750_236649197611253760_n.jpg" alt="thelouvremuseum instagram image 11" style={{ margin: '1% 1%', width: '14.666666666666666%', float: 'left' }} /></a></div></div>
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
                                                <img src="img/tour_plan_1.jpg" alt className="rounded-circle thumb_visit" />
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
                                                <img src="img/tour_plan_2.jpg" alt className="rounded-circle thumb_visit" />
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
                                                <img src="img/tour_plan_3.jpg" alt className="rounded-circle thumb_visit" />
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
                                                <img src="img/tour_plan_4.jpg" alt className="rounded-circle thumb_visit" />
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
                                <div id="map" className="map map_single add_bottom_30" style={{ position: 'relative', overflow: 'hidden' }}><div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgb(229, 227, 223)' }}><div className="gm-style" style={{ position: 'absolute', zIndex: 0, left: 0, top: 0, height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0 }}><div tabIndex={0} style={{ position: 'absolute', zIndex: 0, left: 0, top: 0, height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0, cursor: 'url("http://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default', touchAction: 'pan-x pan-y' }}><div style={{ zIndex: 1, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)' }}><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 100, width: '100%' }}><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}><div style={{ position: 'absolute', zIndex: 986, transform: 'matrix(1, 0, 0, 1, -164, -240)' }}><div style={{ position: 'absolute', left: 256, top: 256, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 0, top: 256, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 0, top: 0, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 256, top: 0, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 512, top: 0, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 512, top: 256, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: '-256px', top: 256, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: '-256px', top: 0, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div></div></div></div><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 101, width: '100%' }} /><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 102, width: '100%' }} /><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 103, width: '100%' }}><div style={{ position: 'absolute', left: 0, top: 0, zIndex: -1 }}><div style={{ position: 'absolute', zIndex: 986, transform: 'matrix(1, 0, 0, 1, -164, -240)' }}><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 256, top: 256 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 0, top: 256 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 0, top: 0 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 256, top: 0 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 512, top: 0 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 512, top: 256 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: '-256px', top: 256 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: '-256px', top: 0 }} /></div></div><div style={{ width: 30, height: 42, overflow: 'hidden', position: 'absolute', left: '-15px', top: '-42px', zIndex: 0 }}><img alt src="img/pins/Marker.png" draggable="false" style={{ position: 'absolute', left: 0, top: 0, userSelect: 'none', width: 30, height: 42, border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div></div><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}><div style={{ position: 'absolute', zIndex: 986, transform: 'matrix(1, 0, 0, 1, -164, -240)' }}><div style={{ position: 'absolute', left: 0, top: 256, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i8297!3i5636!4i256!2m3!1e2!6m1!3e5!2m3!1e0!2sm!3i438143420!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1301875&token=25614" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 0, top: 0, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i8297!3i5635!4i256!2m3!1e2!6m1!3e5!2m3!1e0!2sm!3i438143420!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1301875&token=28095" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 256, top: 0, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i8298!3i5635!4i256!2m3!1e2!6m1!3e5!2m3!1e0!2sm!3i438143420!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1301875&token=28246" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 512, top: 0, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i8299!3i5635!4i256!2m3!1e2!6m1!3e5!2m3!1e0!2sm!3i438143420!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1301875&token=28397" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: '-256px', top: 256, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i8296!3i5636!4i256!2m3!1e2!6m1!3e5!2m3!1e0!2sm!3i438143420!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1301875&token=25463" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: '-256px', top: 0, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i8296!3i5635!4i256!2m3!1e2!6m1!3e5!2m3!1e0!2sm!3i438143420!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1301875&token=27944" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 256, top: 256, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i8298!3i5636!4i256!2m3!1e2!6m1!3e5!2m3!1e0!2sm!3i438143420!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1301875&token=25765" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 512, top: 256, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i8299!3i5636!4i256!2m3!1e2!6m1!3e5!2m3!1e0!2sm!3i438143420!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1301875&token=25916" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div></div></div></div><div className="gm-style-pbc" style={{ zIndex: 2, position: 'absolute', height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0, left: 0, top: 0, opacity: 0 }}><p className="gm-style-pbt" /></div><div style={{ zIndex: 3, position: 'absolute', height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0, left: 0, top: 0, touchAction: 'pan-x pan-y' }}><div style={{ zIndex: 4, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)' }}><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 104, width: '100%' }} /><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 105, width: '100%' }} /><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 106, width: '100%' }}><div title style={{ width: 30, height: 42, overflow: 'hidden', position: 'absolute', opacity: 0, cursor: 'pointer', touchAction: 'none', left: '-15px', top: '-42px', zIndex: 0 }}><img alt src="img/pins/Marker.png" draggable="false" style={{ position: 'absolute', left: 0, top: 0, userSelect: 'none', width: 30, height: 42, border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div></div><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 107, width: '100%' }} /></div></div></div><iframe aria-hidden="true" frameBorder={0} style={{ zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }} src="about:blank" /><div style={{ marginLeft: 5, marginRight: 5, zIndex: 1000000, position: 'absolute', left: 0, bottom: 0 }}><a target="_blank" rel="noopener" href="https://maps.google.com/maps?ll=48.865633,2.321236&z=14&t=m&hl=en-US&gl=US&mapclient=apiv3" title="Click to see this area on Google Maps" style={{ position: 'static', overflow: 'visible', float: 'none', display: 'inline' }}><div style={{ width: 66, height: 26, cursor: 'pointer' }}><img alt src="http://maps.gstatic.com/mapfiles/api-3/images/google_white5_hdpi.png" draggable="false" style={{ position: 'absolute', left: 0, top: 0, width: 66, height: 26, userSelect: 'none', border: 0, padding: 0, margin: 0 }} /></div></a></div><div style={{ backgroundColor: 'white', padding: '15px 21px', border: '1px solid rgb(171, 171, 171)', fontFamily: 'Roboto, Arial, sans-serif', color: 'rgb(34, 34, 34)', boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 16px', zIndex: 10000002, display: 'none', width: 300, height: 180, position: 'absolute', left: 215, top: 110 }}><div style={{ padding: '0px 0px 10px', fontSize: 16 }}>Map Data</div><div style={{ fontSize: 13 }}>Map data ©2018 Google</div><div style={{ width: 13, height: 13, overflow: 'hidden', position: 'absolute', opacity: '0.7', right: 12, top: 12, zIndex: 10000, cursor: 'pointer' }}><img alt src="http://maps.gstatic.com/mapfiles/api-3/images/mapcnt6.png" draggable="false" style={{ position: 'absolute', left: '-2px', top: '-336px', width: 59, height: 492, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div></div><div className="gmnoprint" style={{ zIndex: 1000001, position: 'absolute', right: 167, bottom: 0, width: 121 }}><div draggable="false" className="gm-style-cc" style={{ userSelect: 'none', height: 14, lineHeight: 14 }}><div style={{ opacity: '0.7', width: '100%', height: '100%', position: 'absolute' }}><div style={{ width: 1 }} /><div style={{ backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: 1 }} /></div><div style={{ position: 'relative', paddingRight: 6, paddingLeft: 6, fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block' }}><a style={{ textDecoration: 'none', cursor: 'pointer', display: 'none' }}>Map Data</a><span>Map data ©2018 Google</span></div></div></div><div className="gmnoscreen" style={{ position: 'absolute', right: 0, bottom: 0 }}><div style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: 11, color: 'rgb(68, 68, 68)', direction: 'ltr', textAlign: 'right', backgroundColor: 'rgb(245, 245, 245)' }}>Map data ©2018 Google</div></div><div className="gmnoprint gm-style-cc" draggable="false" style={{ zIndex: 1000001, userSelect: 'none', height: 14, lineHeight: 14, position: 'absolute', right: 96, bottom: 0 }}><div style={{ opacity: '0.7', width: '100%', height: '100%', position: 'absolute' }}><div style={{ width: 1 }} /><div style={{ backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: 1 }} /></div><div style={{ position: 'relative', paddingRight: 6, paddingLeft: 6, fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block' }}><a href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank" rel="noopener" style={{ textDecoration: 'none', cursor: 'pointer', color: 'rgb(68, 68, 68)' }}>Terms of Use</a></div></div><button draggable="false" title="Toggle fullscreen view" aria-label="Toggle fullscreen view" type="button" className="gm-control-active gm-fullscreen-control" style={{ background: 'none rgb(255, 255, 255)', border: 0, margin: 10, padding: 0, position: 'absolute', cursor: 'pointer', userSelect: 'none', borderRadius: 2, height: 40, width: 40, boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', overflow: 'hidden', top: 0, right: 0 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18, margin: 11 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18, margin: 11 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18, margin: 11 }} /></button><div draggable="false" className="gm-style-cc" style={{ userSelect: 'none', height: 14, lineHeight: 14, position: 'absolute', right: 0, bottom: 0 }}><div style={{ opacity: '0.7', width: '100%', height: '100%', position: 'absolute' }}><div style={{ width: 1 }} /><div style={{ backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: 1 }} /></div><div style={{ position: 'relative', paddingRight: 6, paddingLeft: 6, fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block' }}><a target="_blank" rel="noopener" title="Report errors in the road map or imagery to Google" href="https://www.google.com/maps/@48.865633,2.321236,14z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3" style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', textDecoration: 'none', position: 'relative' }}>Report a map error</a></div></div><div className="gmnoprint gm-bundled-control" draggable="false" controlwidth={40} controlheight={81} style={{ margin: 10, userSelect: 'none', position: 'absolute', left: 0, top: 0 }}><div className="gmnoprint" controlwidth={40} controlheight={81} style={{ position: 'absolute', left: 0, top: 0 }}><div draggable="false" style={{ userSelect: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: 2, cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)', width: 40, height: 81 }}><button draggable="false" title="Zoom in" aria-label="Zoom in" type="button" className="gm-control-active" style={{ background: 'none', display: 'block', border: 0, margin: 0, padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: 40, height: 40, top: 0, left: 0 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18, margin: '9px 11px 13px' }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18, margin: '9px 11px 13px' }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18, margin: '9px 11px 13px' }} /></button><div style={{ position: 'relative', overflow: 'hidden', width: 30, height: 1, margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)', top: 0 }} /><button draggable="false" title="Zoom out" aria-label="Zoom out" type="button" className="gm-control-active" style={{ background: 'none', display: 'block', border: 0, margin: 0, padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: 40, height: 40, top: 0, left: 0 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18, margin: '13px 11px 9px' }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18, margin: '13px 11px 9px' }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18, margin: '13px 11px 9px' }} /></button></div></div></div><div className="gmnoprint gm-bundled-control" draggable="false" controlwidth={0} controlheight={0} style={{ margin: 10, userSelect: 'none', position: 'absolute', top: 101, left: 0, display: 'none' }} /><div className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth={0} controlheight={0} style={{ margin: 10, userSelect: 'none', position: 'absolute', display: 'none', bottom: 14, right: 0 }}><div className="gmnoprint" controlwidth={40} controlheight={40} style={{ display: 'none', position: 'absolute' }}><div style={{ width: 40, height: 40 }}><button draggable="false" title="Rotate map 90 degrees" aria-label="Rotate map 90 degrees" type="button" className="gm-control-active" style={{ background: 'none rgb(255, 255, 255)', display: 'none', border: 0, margin: '0px 0px 32px', padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', width: 40, height: 40, top: 0, left: 0, overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: 2 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 28, width: 28, margin: 6 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 28, width: 28, margin: 6 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 28, width: 28, margin: 6 }} /></button><button draggable="false" title="Tilt map" aria-label="Tilt map" type="button" className="gm-tilt gm-control-active" style={{ background: 'none rgb(255, 255, 255)', display: 'block', border: 0, margin: 0, padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', width: 40, height: 40, top: 0, left: 0, overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: 2 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ width: 18, height: 16, margin: '12px 11px' }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ width: 18, height: 16, margin: '12px 11px' }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ width: 18, height: 16, margin: '12px 11px' }} /></button></div></div></div></div></div><div style={{ backgroundColor: 'white', fontWeight: 500, fontFamily: 'Roboto, sans-serif', padding: '15px 25px', boxSizing: 'border-box', top: 5, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: 5, left: '50%', maxWidth: 375, position: 'absolute', transform: 'translateX(-50%)', width: 'calc(100% - 10px)', zIndex: 1 }}><div><img alt src="http://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg" draggable="false" style={{ padding: 0, margin: 0, border: 0, height: 17, verticalAlign: 'middle', width: 52, userSelect: 'none' }} /></div><div style={{ lineHeight: 20, margin: '15px 0px' }}><span style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: 14 }}>This page can't load Google Maps correctly.</span></div><table style={{ width: '100%' }}><tbody><tr><td style={{ lineHeight: 16, verticalAlign: 'middle' }}><a href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=billing#api-key-and-billing-errors" target="_blank" rel="noopener" style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: 12 }}>Do you own this website?</a></td><td style={{ textAlign: 'right' }}><button className="dismissButton">OK</button></td></tr></tbody></table></div></div>
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
                                        <figure className="rev-thumb"><img src="img/avatar1.jpg" alt />
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
                                        <figure className="rev-thumb"><img src="img/avatar2.jpg" alt />
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
                                        <figure className="rev-thumb"><img src="img/avatar3.jpg" alt />
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
                                    <a href="#">Guests <span className="qtyTotal">1</span></a>
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