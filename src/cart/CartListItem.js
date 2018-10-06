import React, { Component } from 'react';
import CartItem from './CartItem';

class CartListItem extends Component {
    render() {
        return (
            <div className="box_cart">
                <table className="table table-striped cart-list">
                    <thead>
                        <tr>
                            <th>
                                Item
									</th>
                            <th>
                                Discount
									</th>
                            <th>
                                Price
									</th>
                            <th>
                                Actions
									</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                    </tbody>

                </table>
            </div>
            
        );
    }
}

export default CartListItem;