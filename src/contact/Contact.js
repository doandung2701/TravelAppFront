import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <main>
                <section className="hero_in contacts start_bg_zoom">
                    <div className="wrapper" style={{backgroundImage:'url("/img/contact-banner.jpg")',"background-size": "cover"}}>
                        <div className="container">
                            <h1 className="fadeInUp animated"><span />Contact Us</h1>
                        </div>
                    </div>
                </section>
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

               
            </main>

        );
    }
}

export default Contact;