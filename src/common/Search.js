import React, { Component } from 'react'
import { Select } from 'antd';
import './SelectCategory.css';
import { loadProvider } from '../actions/provideractions';
import { connect } from 'react-redux';
const Option = Select.Option;
const mapStateToProps = (state, ownProps) => ({
    provider: state.provider.provider
})
const mapDispatchToProps = dispatch => {
    return {
        loadProvider: () => dispatch(loadProvider())
    }
}
class Search extends Component {
    state = {
        txtsearch: ''
      };
    
    handleInputChange = e => {
        this.setState({
            txtsearch: e.target.value
        });
      };
    componentDidMount() {
        this.props.loadProvider();
    }
    onChangeProvider=value=>{
            this.setState({
                provider:value
            })
            
    }
    onChangeCategory=value=>{
        this.setState({
        category:value
        })
    }
    handleSubmit=e=>{
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row no-gutters custom-search-input-2">
                    <div className="col-lg-4">
                        <div className="form-group">
                            <input name='txtsearch' className="form-control" type="text" placeholder="What are you looking for..." onChange={ this.handleInputChange }/>
                            <i className="icon_search" />
                        </div>
                    </div>
                    <div className="col-lg-3 select-center">
                        <Select  style={{ border: 'none !important' }} defaultValue="An Giang" onChange={this.onChangeProvider}>
                            {this.props.provider.map(provider => {
                                return (
                                    <Option value={provider.name} key={provider.id}>{provider.name}</Option>
                                );
                            })}
                        </Select>
                    </div>
                    <div className="col-lg-3 select-center">
                        <Select onChange={this.onChangeCategory} defaultValue="Tours" style={{ border: 'none !important' }}>
                            <Option value="Tours">Tours</Option>
                            <Option value="Hotels">Hotels</Option>
                        </Select>
                    </div>
                    <div className="col-lg-2">
                       
                        <input type="submit" className="btn_search" defaultValue="Search" />
                    </div>
                </div>
            </form>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
