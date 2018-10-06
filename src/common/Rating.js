import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;
class Rating extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }


    render() {
        return (
            <div> 
                <Select className="wide" defaultValue={5} style={{ width: 120 }} onChange={this.handleChange}>
                    <option value={1}>1 (lowest)</option>
                    <Option value={2}>2</Option>
                    <Option value={3}>3</Option>
                    <Option value={4}>4</Option>
                    <Option value={5} selected>5 (medium)</Option>
                    <Option value={6}>6</Option>
                    <Option value={7}>7</Option>
                    <Option value={8}>8</Option>
                    <Option value={9}>9</Option>
                    <Option value={10}>10 (highest)</Option>
                </Select>
            </div>
        );
    }
}

export default Rating;