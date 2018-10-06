import React, { Component } from 'react';
import CartProcess from './CartProcess';
import CartCheckout from './CartCheckout';
import First from './First';
import Second from './Second';
import Three from './Three';
import {

    Route,
    withRouter,
    Switch
} from 'react-router-dom';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }

    render() {
        return (
            <div>
                <CartProcess current={this.state.current} />
                <div className="bg_color_1">
                    <div className="container margin_60_35">
                        <Switch>
                            <Route exact path="/cart/three" render={(props) => <Three isAuthenticated={this.state.isAuthenticated}
                                currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />} />
                            <div className="row">
                                <div className="col-lg-8">

                                    <Route exact path="/cart" render={(props) => <First isAuthenticated={this.state.isAuthenticated}
                                        currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />} />
                                    <Route exact path="/cart/second" render={(props) => <Second isAuthenticated={this.state.isAuthenticated}
                                        currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />} />

                                </div>
                                <CartCheckout />
                            </div>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;