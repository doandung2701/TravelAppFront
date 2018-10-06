import { Select } from 'antd';
import React, { Component } from 'react';
import  './SelectCategory.css';
const Option = Select.Option;
  class SelectCategory extends Component {
      constructor(props) {
          super(props);
          this.handleChange=this.handleChange.bind(this);
      }
      
     handleChange(value) {
        console.log(`selected ${value}`);
      }
      render() {
          return (
            <div className="col-lg-3 select-center">
            <Select defaultValue="All Categories" onChange={this.handleChange} style={{border: 'none !important'}}>
              <Option value="All Categories">All Categories</Option>
              <Option value="Tours">Tours</Option>
              <Option value="Hotels">Hotels</Option>
            </Select>
          </div>
          );
      }
  }
  export default SelectCategory;