import React, { Component } from 'react'
import { Select } from 'antd';
import "./search.css";
import { connect } from 'react-redux';
import { loadCategory } from '../actions';
import { DatePicker } from 'antd';
import {Link} from 'react-router-dom';
import { loadTourByDefault, SearchTour } from '../actions/search.actions';
const {  RangePicker } = DatePicker;

const Option = Select.Option;
class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            fromDate:null,
            toDate:null,
            txtSearch:'',
            category:'Museums'
        }
    
    }
    handleChange = (value) => {
        console.log(value);
        this.setState({
            category:value.trim()
        })
        console.log(this.state);
        
    }
    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({
            fromDate:dateString[0],
            toDate:dateString[1]
        })
        
    }
    componentDidMount = () => {
        this.props.loadCategory();
        this.props.loadTourDefault();
    }
    renderCategory = () => {
        if (this.props.categories != undefined && this.props.categories[0] != undefined) {
            const { categories } = this.props;
            const categoryDefault = categories[0];
            
            return (<Select className="myClass" defaultValue={categoryDefault.name} style={{ width: "100%", height: "100%" }} onChange={this.handleChange}>
                {this.props.categories.map(category => {
                    return (<Option key={category.id} value={category.name}>{category.name}</Option>)
                })}
            </Select>)
        }
    }
   
    handleRateTour=(rates)=>{
        var some = 0;
        var count=0;
        if (rates != undefined) {
            // eslint-disable-next-line
            rates.map(rate => {
                count++;
                some=some+rate.rateType.id;
            });
            some = some / count;
            return some.toFixed(2);
        }
    }

    handleChangeInput=(event)=>{
        this.setState({
            txtSearch:event.target.value
        })
    }
    handleSearch=()=>{
        const{fromDate,toDate,category,txtSearch}=this.state;
        console.log(this.state);
        const data={
            category:category,
            name:txtSearch,
            fromDate:fromDate,
            toDate:toDate
        }
        this.props.search(data);
    }
    render() {
        return (
            <div className="container margin_60_35">
                <div className="col-lg-12">
                    <div className="row no-gutters custom-search-input-2 inner">
                        <div className="col-lg-4">
                            <div className="form-group">
                                <input onChange={this.handleChangeInput} className="form-control" type="text" placeholder="What are you looking for..." />
                                <i className="icon_search" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <RangePicker onChange={this.onChange} />

                        </div>
                        <div className="col-lg-3">
                            {this.renderCategory()}
                        </div>
                        <div className="col-lg-2">
                            <input onClick={()=>this.handleSearch()} type="submit" style={{height:"100%"}} className="btn_search" defaultValue="Search" />
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /custom-search-input-2 */}
                <div className="isotope-wrapper">
                    <div className="row">
                        {this.props.results.map(tourDetail => {
                            return (
                                <div key={tourDetail.id} className="col-xl-4 col-lg-6 col-md-6 isotope-item popular" >
                                    <div className="box_grid">


                                        <figure>
                                            <Link to={`/tourDetail/${tourDetail.id}`} className="wish_bt" aria-hidden={true} />
                                            <Link to={`/tourDetail/${tourDetail.id}`}><img src={"data:image/png;base64," + tourDetail.picture} className="img-fluid" alt="Detail" width={800} height={533} /><div className="read_more"><span>Read more</span></div></Link>
                                            <small>{tourDetail.category}</small>
                                        </figure>
                                        <div className="wrapper">
                                            <h3><Link to={`/tourDetail/${tourDetail.id}`}>{tourDetail.name}</Link></h3>
                                            <span className="price">From <strong>${tourDetail.price}</strong> /per person</span>
                                        </div>
                                        <ul>
                                            <li>Free space: {tourDetail.freeSpace}</li>
                                            <li><div className="score"><span><em>{tourDetail.rates.length} Reviews</em></span><strong>{this.handleRateTour(tourDetail.rates)}</strong></div></li>
                                        </ul>

                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    categories: state.category.categories,
    results: state.searchTour.results
})
const mapDispatchToProps = dispatch => {
    return {
        loadCategory: () => dispatch(loadCategory()),
        loadTourDefault: () => dispatch(loadTourByDefault()),
        search:(data)=>dispatch(SearchTour(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
