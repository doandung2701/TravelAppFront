import React, { Component } from 'react';
import { Slider } from 'antd';

class InputRange extends Component {
    constructor(props) {
        super(props);
        this.onAfterChange=this.onAfterChange.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    
     onChange(value) {
        console.log('onChange: ', value);
      }
      onAfterChange(value) {
        console.log('onAfterChange: ', value);
      }
    render() {
        return (
            <div>
                 <Slider range step={10} defaultValue={[30, 70]} onChange={this.onChange} onAfterChange={this.onAfterChange} />
  </div>
        );
    }
}

export default InputRange;