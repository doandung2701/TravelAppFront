import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <tr>
                <td> <div className="thumb_cart">
                    <img src="http://via.placeholder.com/150x150/ccc/fff/thumb_cart_1.jpg" alt="Image" />
                </div></td>

                <td><span className="item_cart">Persius delenit has cu</span>
                    0%</td>
                    <td>
  <strong>24,71$</strong></td>
                <td> <a href="#"><i className="icon-trash" /></a></td>
            </tr>
        );
    }
}

export default CartItem;