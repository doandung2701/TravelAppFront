import React, { Component } from 'react';
import { loadCategory, loadTourByCategory } from '../actions';
import { connect } from 'react-redux';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFilter: true,
            value: '1'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState(
            {
                showFilter: !this.state.showFilter
            }
        );
    }
    componentDidMount = () => {
        this.props.loadCategory();
    }
    onChange=(e)=>{
        this.setState({
            value: e.target.value,
          });
    this.props.loadTourByCategory(e.target.value);
    }
    render() {
        return (
            <aside className="col-lg-3" id="sidebar" style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 1 }}>
                <div className="theiaStickySidebar" style={{ paddingTop: 0, paddingBottom: 1, position: 'static', transform: 'none', top: 0, left: '204.6px' }}><div id="filters_col">
                    <a onClick={this.handleClick} data-toggle="collapse" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt" className="collapsed">Filters </a>
                    {this.state.showFilter && <div id="collapseFilters">
                        <div className="filter_type">
                            <h6>Category</h6>
                            <ul>
                                <RadioGroup onChange={this.onChange} value={this.state.value}>
                                    {this.props.categories.map(value => {
                                        return (<li><Radio value={value.id}>{value.name}</Radio>
                                            </li>)
                                    }
                                    )}
                                </RadioGroup>
                            </ul>
                        </div>
                    </div>}
                    {/*/collapse */}
                </div><div className="resize-sensor" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div className="resize-sensor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: 'all 0s ease 0s', width: 295, height: 1561 }} /></div><div className="resize-sensor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: '0s', width: '200%', height: '200%' }} /></div></div></div></aside>

        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    categories: state.category.categories
})
const mapDispatchToProps = dispatch => {
    return {

        loadCategory: () => dispatch(loadCategory())
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);