import React, { Component } from 'react';
import CartListItem from './CartListItem';

class First extends Component {
    render() {
        return (
            <div>                            <CartListItem></CartListItem>
                <div className="cart-options clearfix">
                    <div className="float-left">
                        <div className="apply-coupon">
                            <div className="form-group">
                                <input type="text" name="coupon-code" defaultValue placeholder="Your Coupon Code" className="form-control" />
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn_1 outline">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                    <div className="float-right fix_mobile">
                        <button type="button" className="btn_1 outline">Update Cart</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default First;