import React, { Component } from 'react';
import { BackTop } from 'antd';
import "./Scroll.css";
class Scroll extends Component {

    render() {
        return (
            <div>
                <BackTop>
                    <div className="ant-back-top-inner">UP</div>
                </BackTop>
  </div>
        );
    }
}

export default Scroll;