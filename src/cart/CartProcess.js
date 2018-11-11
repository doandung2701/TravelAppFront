import React, { Component } from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;

class CartProcess extends Component {
    render() {
        return (
            <div className="hero_in cart_section start_bg_zoom">
                <div className="wrapper">
                    <div className="container">
                        <Steps current={this.props.current}>
                            <Step title="BOOKING"/>
                            <Step title="PAYMENT"/>
                            <Step title="FINISH!"/>
                        </Steps>
                        {/* End bs-wizard */}
                    </div>
                </div>
            </div>

        );
    }
}

export default CartProcess;