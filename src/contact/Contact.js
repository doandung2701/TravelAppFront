import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <main>
                <section className="hero_in contacts start_bg_zoom">
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp animated"><span />Contact Us</h1>
                        </div>
                    </div>
                </section>
                {/*/hero_in*/}
                <div className="contact_info">
                    <div className="container">
                        <ul className="clearfix">
                            <li>
                                <i className="pe-7s-map-marker" />
                                <h4>Address</h4>
                                <span>PO Box 97845 Baker st. 567, Los Angeles<br />California - US.</span>
                            </li>
                            <li>
                                <i className="pe-7s-mail-open-file" />
                                <h4>Email address</h4>
                                <span>support@Panagea.com - info@Panagea.com<br /><small>Monday to Friday 9am - 7pm</small></span>
                            </li>
                            <li>
                                <i className="pe-7s-phone" />
                                <h4>Contacts info</h4>
                                <span>+ 61 (2) 8093 3402 + 61 (2) 8093 3402<br /><small>Monday to Friday 9am - 7pm</small></span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*/contact_info*/}
                <div className="bg_color_1">
                    <div className="container margin_80_55">
                        <div className="row justify-content-between">
                            <div className="col-lg-5">
                               
                            </div>

                            <div className="col-lg-6">
                                <h4>Send a message</h4>
                                <p>Ex quem dicta delicata usu, zril vocibus maiestatis in qui.</p>
                                <div id="message-contact" />
                                <form method="post" action="assets/contact.php" id="contactform" autoComplete="off">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input className="form-control" type="text" id="name_contact" name="name_contact" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last name</label>
                                                <input className="form-control" type="text" id="lastname_contact" name="lastname_contact" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /row */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control" type="email" id="email_contact" name="email_contact" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Telephone</label>
                                                <input className="form-control" type="text" id="phone_contact" name="phone_contact" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /row */}
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" id="message_contact" name="message_contact" style={{ height: 150 }} defaultValue={""} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Are you human? 3 + 1 =</label>
                                                <input className="form-control" type="text" id="verify_contact" name="verify_contact" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="add_top_30"><input type="submit" defaultValue="Submit" className="btn_1 rounded" id="submit-contact" /></p>
                                </form>
                            </div>
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                </div>
                {/* /bg_color_1 */}
            </main>

        );
    }
}

export default Contact;