import React, { Component } from 'react';
import InputRange from './InputRange';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            showFilter:true
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick=()=>{
        this.setState(
            {
                showFilter:!this.state.showFilter
            }
        );
    }
    render() {
        return (
            <aside className="col-lg-3" id="sidebar" style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 1 }}>
                {/*/filters col*/}
                <div className="theiaStickySidebar" style={{ paddingTop: 0, paddingBottom: 1, position: 'static', transform: 'none', top: 0, left: '204.6px' }}><div id="filters_col">
                    <a onClick={this.handleClick} data-toggle="collapse" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt" className="collapsed">Filters </a>
                    {this.state.showFilter&&<div id="collapseFilters">
                        <div className="filter_type">
                            <h6>Category</h6>
                            <ul>
                                <li>
                                    <label>
                                        <div className="icheckbox_square-grey checked" style={{ position: 'relative' }}><input type="checkbox" className="icheck" defaultChecked style={{ position: 'absolute', opacity: 0 }} /><ins className="iCheck-helper" style={{ position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, background: 'rgb(255, 255, 255)', border: 0, opacity: 0 }} /></div>All <small>(945)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="icheckbox_square-grey" style={{ position: 'relative' }}><input type="checkbox" className="icheck" style={{ position: 'absolute', opacity: 0 }} /><ins className="iCheck-helper" style={{ position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, background: 'rgb(255, 255, 255)', border: 0, opacity: 0 }} /></div>Museums <small>(45)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="icheckbox_square-grey" style={{ position: 'relative' }}><input type="checkbox" className="icheck" style={{ position: 'absolute', opacity: 0 }} /><ins className="iCheck-helper" style={{ position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, background: 'rgb(255, 255, 255)', border: 0, opacity: 0 }} /></div>Churches <small>(30)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="icheckbox_square-grey" style={{ position: 'relative' }}><input type="checkbox" className="icheck" style={{ position: 'absolute', opacity: 0 }} /><ins className="iCheck-helper" style={{ position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, background: 'rgb(255, 255, 255)', border: 0, opacity: 0 }} /></div>Historic <small>(25)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="icheckbox_square-grey" style={{ position: 'relative' }}><input type="checkbox" className="icheck" style={{ position: 'absolute', opacity: 0 }} /><ins className="iCheck-helper" style={{ position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, background: 'rgb(255, 255, 255)', border: 0, opacity: 0 }} /></div>Walking <small>(56)</small>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="filter_type">
                            <h6>Duration</h6>
                            <InputRange/>
                        </div>
                        <div className="filter_type">
                            <h6>Rating</h6>
                            <ul>
                                <li>
                                    <label>
                                        <div className="icheckbox_square-grey" style={{ position: 'relative' }}><input type="checkbox" className="icheck" style={{ position: 'absolute', opacity: 0 }} /><ins className="iCheck-helper" style={{ position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, background: 'rgb(255, 255, 255)', border: 0, opacity: 0 }} /></div>Superb 9+ <small>(25)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="icheckbox_square-grey" style={{ position: 'relative' }}><input type="checkbox" className="icheck" style={{ position: 'absolute', opacity: 0 }} /><ins className="iCheck-helper" style={{ position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, background: 'rgb(255, 255, 255)', border: 0, opacity: 0 }} /></div>Very Good 8+ <small>(26)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="icheckbox_square-grey" style={{ position: 'relative' }}><input type="checkbox" className="icheck" style={{ position: 'absolute', opacity: 0 }} /><ins className="iCheck-helper" style={{ position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, background: 'rgb(255, 255, 255)', border: 0, opacity: 0 }} /></div>Good 7+ <small>(25)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="icheckbox_square-grey" style={{ position: 'relative' }}><input type="checkbox" className="icheck" style={{ position: 'absolute', opacity: 0 }} /><ins className="iCheck-helper" style={{ position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, background: 'rgb(255, 255, 255)', border: 0, opacity: 0 }} /></div>Pleasant 6+ <small>(12)</small>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>}
                    {/*/collapse */}
                </div><div className="resize-sensor" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div className="resize-sensor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: 'all 0s ease 0s', width: 295, height: 1561 }} /></div><div className="resize-sensor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: '0s', width: '200%', height: '200%' }} /></div></div></div></aside>

        );
    }
}

export default SideBar;