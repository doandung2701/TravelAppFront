import React, { Component } from 'react';
import CartProcess from './CartProcess';
import Second from './Second';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        }
    }

    render() {
        return (
            <div>
                <CartProcess current={this.state.current} />
                <div className="bg_color_1">
                    <div className="container margin_60_35">
                            
                                <Second></Second>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;