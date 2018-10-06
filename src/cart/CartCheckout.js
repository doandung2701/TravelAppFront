import React, { Component } from 'react';

class CartCheckout extends Component {
    render() {
        return (
            <aside className="col-lg-4" id="sidebar" style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 1 }}>
                <div className="theiaStickySidebar" style={{ paddingTop: 0, paddingBottom: 1, position: 'static', transform: 'none', left: '964.6px', top: 0 }}><div className="box_detail">
                    <div id="total_cart">
                        Total <span className="float-right">69.00$</span>
                    </div>
                    <ul className="cart_details">
                        <li>From <span>02-11-18</span></li>
                        <li>To <span>04-11-18</span></li>
                        <li>Adults <span>2</span></li>
                        <li>Childs <span>1</span></li>
                    </ul>
                    <a href="cart-2.html" className="btn_1 full-width purchase">Checkout</a>
                    <div className="text-center"><small>No money charged in this step</small></div>
                </div><div className="resize-sensor" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div className="resize-sensor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: 'all 0s ease 0s', width: 390, height: 493 }} /></div><div className="resize-sensor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: '0s', width: '200%', height: '200%' }} /></div></div></div></aside>

        );
    }
}

export default CartCheckout;