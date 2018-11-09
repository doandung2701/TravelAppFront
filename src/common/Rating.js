import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;
class Rating extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        console.log(this.props.rateList);
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }


    render() {
        return (
            <div>
                <Select className="wide" defaultValue={4} style={{ width: 120 }} onChange={this.handleChange}>
                    {this.props.rateList.map(rateValue => {
                        return <Option key={rateValue.id} value={rateValue.id}>{rateValue.rate}</Option>
                    }
                    )}

                </Select>
            </div>
        );
    }
}

export default Rating;