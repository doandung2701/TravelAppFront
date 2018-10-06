import { Select } from 'antd';
import React, { Component } from 'react';
const Option = Select.Option;
class SelectCountry extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <div className="select-center col-xs-12">
                <Select defaultValue="Select your country" onChange={this.handleChange} style={{ border: 'none !important' }}>
                    <Option value="Select your country">Select your country</Option>
                    <Option value="Europe">Europe</Option>
                    <Option value="United states">United states</Option>
                    <Option value="Asia">Asia</Option>
                </Select>
            </div>
        );
    }
}
export default SelectCountry;