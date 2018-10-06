import React, { Component } from 'react';
import SelectCountry from './SelectCountry';

class Second extends Component {
    render() {
        return (
            <div className="box_cart">
                <div className="message">
                    <p>Exisitng Customer? <a href="#0">Click here to login</a></p>
                </div>
                <div className="form_title">
                    <h3><strong>1</strong>Your Details</h3>
                    <p>
                        Mussum ipsum cacilds, vidis litro abertis.
    </p>
                </div>
                <div className="step">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" id="firstname_booking" name="firstname_booking" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" id="lastname_booking" name="lastname_booking" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" id="email_booking" name="email_booking" className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Confirm email</label>
                                <input type="email" id="email_booking_2" name="email_booking_2" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Telephone</label>
                                <input type="text" id="telephone_booking" name="telephone_booking" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/*End step */}
                <div className="form_title">
                    <h3><strong>2</strong>Payment Information</h3>
                    <p>
                        Mussum ipsum cacilds, vidis litro abertis.
    </p>
                </div>
                <div className="step">
                    <div className="form-group">
                        <label>Name on card</label>
                        <input type="text" className="form-control" id="name_card_bookign" name="name_card_bookign" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label>Card number</label>
                                <input type="text" id="card_number" name="card_number" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src="img/cards_all.svg" alt="Cards" className="cards-payment" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Expiration date</label>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="expire_month" name="expire_month" className="form-control" placeholder="MM" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="expire_year" name="expire_year" className="form-control" placeholder="Year" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Security code</label>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <input type="text" id="ccv" name="ccv" className="form-control" placeholder="CCV" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <img src="img/icon_ccv.gif" width={50} height={29} alt="ccv" /><small>Last 3 digits</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End row */}
                    <hr />
                    <h4>Or checkout with Paypal</h4>
                    <p>
                        Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie, reque fierent dissentiunt mel ea.
    </p>
                    <p>
                        <a href="#0"><img src="img/paypal_bt.png" alt="Image" /></a>
                    </p>
                </div>
                <hr />
                {/*End step */}
                <div className="form_title">
                    <h3><strong>3</strong>Billing Address</h3>
                    <p>
                        Mussum ipsum cacilds, vidis litro abertis.
    </p>
                </div>
                <div className="step">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Country</label>
                                    <SelectCountry/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Street line 1</label>
                                <input type="text" id="street_1" name="street_1" className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Street line 2</label>
                                <input type="text" id="street_2" name="street_2" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" id="city_booking" name="city_booking" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="form-group">
                                <label>State</label>
                                <input type="text" id="state_booking" name="state_booking" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="form-group">
                                <label>Postal code</label>
                                <input type="text" id="postal_code" name="postal_code" className="form-control" />
                            </div>
                        </div>
                    </div>
                    {/*End row */}
                </div>
                <hr />
                {/*End step */}
                <div id="policy">
                    <h5>Cancellation policy</h5>
                    <p className="nomargin">Lorem ipsum dolor sit amet, vix <a href="#0">cu justo blandit deleniti</a>, discere omittantur consectetuer per eu. Percipit repudiare similique ad sed, vix ad decore nullam ornatus.</p>
                </div>
            </div>

        );
    }
}

export default Second;