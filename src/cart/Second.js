import React, { Component } from 'react';
import { Input, Button,notification } from 'antd';
import { Form } from 'antd';
import {connect} from 'react-redux';
import axios from  'axios';
import { API_BASE_URL } from '../constants';

const FormItem = Form.Item;
class Second extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: ''
            },
            cardName: {
                value: ''
            },
            cardNumber: {
                value: ''
            },
            expirationDate: {
                value: ''
            }, securityCode: {
                value: ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }
    handleSubmit() {
        console.log(this.props.currentUser);
        const{cardName,cardNumber,expirationDate,securityCode}=this.state;
        var bookingRequest={
            totalPeople:this.props.totalPeople,
            securityCode:securityCode.value,
            expirationDate:expirationDate.value,
            cardNumber:cardNumber.value,
            cardName:cardName.value,
            tourId:this.props.tourId
        }
        if(this.props.currentUser!=null){
            bookingRequest={
                ...bookingRequest,userId:this.props.currentUser.id
            }
        }
        axios.post(`${API_BASE_URL}/bookings/payment`,bookingRequest)
        .then(response => {
            notification.success({
                message: 'Travel App',
                description: "Thank you! You're successfully booked this tour. We will contact you soon",
            });          
        }).catch(error => {
            notification.error({
                message: 'Travel App',
                description:  'Sorry! Something went wrong. Please try again!Maybe you have been booked this tour'
            });
        });
    }
    isFormInvalid() {
        return !(this.state.cardNumber.validateStatus === 'success' &&
            this.state.expirationDate.validateStatus === 'success' &&
            this.state.securityCode.validateStatus === 'success' &&
            this.props.fromDate != undefined&&
            this.props.fromDate!=''
        );
    }
    validateCardName = (name) => {
        if (name.length < 5) {
            return {
                validateStatus: 'error',
                errorMsg: `Name is too short (Minimum 5 characters needed.)`
            }
        } else if (!name) {
            return {
                validateStatus: 'error',
                errorMsg: `Name  not be empty`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }

    }
    validateCardNumber = (number) => {
        var cardNo = /^\d{16}$/;
        if (number.length != 16) {
            return {
                validateStatus: 'error',
                errorMsg: `Card number need 16 numbers`
            }
        } else if (!number) {
            return {
                validateStatus: 'error',
                errorMsg: 'Card number not be empty'
            }
        } else if (!number.match(cardNo)) {
            return {
                validateStatus: 'error',
                errorMsg: `Card number is 16 numbers.Not include character`
            }
        } else if (!number) {
            return {
                validateStatus: 'error',
                errorMsg: `Card number not be empty`
            }
        }
        else
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
    }

    validateExprDate = (date) => {
        const dateExp = /^(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
        if (!date.match(dateExp)) {
            return {
                validateStatus: 'error',
                errorMsg: `Invalid date`
            }
        } else if (!dateExp) {
            return {
                validateStatus: 'error',
                errorMsg: 'Date not be empty'
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            }
        }

    }
    validateSecurityCode = (securitycode) => {
        var cardNo = /^\d{3}$/;
        if (!securitycode.match(cardNo)) {
            return {
                validateStatus: 'error',
                errorMsg: `Invalid security code`
            }
        } else if (!securitycode) {
            return {
                validateStatus: 'error',
                errorMsg: 'Security code not be empty'
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            }
        }
    }
    render() {
        const{totalPeople,priceTag,fromDate,toDate}=this.props;
        console.log(this.props.tourId);
        return (
            <div>
                <div className="col-lg-12">
                    <div className="box_cart">

                        <div className="form_title">
                            <h3><strong>2</strong>Payment Information</h3>
                        </div>
                        <div className="step">
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    label="Name on card"
                                    validateStatus={this.state.cardName.validateStatus}
                                    help={this.state.cardName.errorMsg}>
                                    <Input
                                        size="large"
                                        name="cardName"
                                        autoComplete="off"
                                        placeholder="Your card name"
                                        value={this.state.cardName.value}
                                        onChange={(event) => this.handleInputChange(event, this.validateCardName)} />
                                </FormItem>
                                <div className="row" style={{ "alignItems": "center" }}>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <FormItem
                                                label="Card number"
                                                validateStatus={this.state.cardNumber.validateStatus}
                                                help={this.state.cardNumber.errorMsg}>
                                                <Input
                                                    size="large"
                                                    name="cardNumber"
                                                    autoComplete="off"
                                                    placeholder="Your card number"
                                                    value={this.state.cardNumber.value}
                                                    onChange={(event) => this.handleInputChange(event, this.validateCardNumber)} />
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <img src="/img/cards_all.png" alt="Cards" className="cards-payment" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <FormItem
                                                    label="Expiration date"
                                                    validateStatus={this.state.expirationDate.validateStatus}
                                                    help={this.state.expirationDate.errorMsg}>
                                                    <Input
                                                        size="large"
                                                        name="expirationDate"
                                                        autoComplete="off"
                                                        placeholder="Expriation Date"
                                                        value={this.state.expirationDate.value}
                                                        onChange={(event) => this.handleInputChange(event, this.validateExprDate)} />

                                                </FormItem>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="row">
                                                <FormItem
                                                    label="Security code"
                                                    validateStatus={this.state.securityCode.validateStatus}
                                                    help={this.state.securityCode.errorMsg}>
                                                    <div className="col-12">

                                                        <Input
                                                            size="large"
                                                            name="securityCode"
                                                            autoComplete="off"
                                                            placeholder="Your card security number"
                                                            value={this.state.securityCode.value}
                                                            onChange={(event) => this.handleInputChange(event, this.validateSecurityCode)} />


                                                    </div>
                                                    <div className="col-8">
                                                        <img src="/img/icon_ccv.png" width={50} height={29} alt="ccv" /><small>Last 3 digits</small>
                                                    </div>
                                                </FormItem>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="col-lg-12">
                    <aside className="col-lg-4" id="sidebar" style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: 1 }}>
                        <div className="theiaStickySidebar" style={{ paddingTop: 0, paddingBottom: 1, position: 'static', transform: 'none', left: '964.6px', top: 0 }}><div className="box_detail">
                            <div id="total_cart">
                                Total <span className="float-right">{totalPeople * priceTag}$</span>
                            </div>
                            <ul className="cart_details">
                                <li>From <span>{fromDate}</span></li>
                                <li>To <span>{toDate}</span></li>
                            </ul>
                            <FormItem>
                                <Button onClick={()=>this.handleSubmit()} disabled={this.isFormInvalid()} type="primary" htmlType="submit" size="large" className="login-form-button">Checkout</Button>
                            </FormItem>
                            <div className="text-center"><small>No money charged in this step</small></div>
                        </div><div className="resize-sensor" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div className="resize-sensor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: 'all 0s ease 0s', width: 390, height: 493 }} /></div><div className="resize-sensor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden' }}><div style={{ position: 'absolute', left: 0, top: 0, transition: '0s', width: '200%', height: '200%' }} /></div></div></div></aside>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    totalPeople: state.booking.totalPeople,
    tourId:state.booking.tourId,
    priceTag: state.booking.priceTag,
    fromDate: state.booking.fromDate,
    toDate: state.booking.toDate,
    currentUser:state.auth.currentUser
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Second);
