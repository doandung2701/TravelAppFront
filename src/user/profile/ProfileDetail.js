import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, notification } from 'antd';
import { Link } from "react-router-dom";
import { NAME_MIN_LENGTH, NAME_MAX_LENGTH, EMAIL_MAX_LENGTH, USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } from '../../constants';
import { checkUsernameAvailability, checkEmailAvailability } from '../../util/APIUtils';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import {Router} from 'react-router-dom';
import { Logout } from '../../actions/user.actions';
const dateFormat = 'YYYY-MM-DD';

const Option = Select.Option;
const FormItem = Form.Item;
class ProfileDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                validateStatus:'success'
            },
            username: {
                value: '',
                validateStatus:'success'
            },
            email: {
                value: '',
                validateStatus:'success'
            },
            password: {
                value: ''
            },
            gender: {
                value: ''
            },
            phone: {
                value: ''
            },
            address: {
                value: ''
            },
            birthDate: {
                value: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
        this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
    }

    componentWillMount = () => {
        console.log(this.props.user)
        const { user } = this.props;
        this.setState({
            name: {
                value: user.name
            },
            username: {
                value: user.username
            },
            email: {
                value: user.email
            },
            password: {
                value: ''
            },
            gender: {
                value: '' + user.gender
            },

            birthDate: {
                value: '' + user.birthDate
            },
            redirect:false
        })
        if (user.phone != null) {
            this.setState({
                phone: {
                    value: user.phone
                },
            })
        }
        if (user.address != null) {
            this.setState({
                address: {
                    value: '' + user.address
                },
            })
        }
        if (user.birthDate != null) {
            this.setState({
                birthDate: {
                    value: user.birthDate
                },
            })
        } else {
            this.setState({
                birthDate: {
                    value: '2018-1-1'
                },
            })
        }
    }

    handleChange = (value) => {
        this.setState({
            gender: {
                value: value
            }
        })
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

    handleSubmit(event) {
        event.preventDefault();

    //     const updateProfileRequest = {
    //         id:this.props.user.id,
    //         name: this.state.name.value,
    //         email: this.state.email.value,
    //         username: this.state.username.value,
    //         password: this.state.password.value,
    //         birthDate:this.state.birthDate.value,
    //         gender:this.state.gender.value,
    //         phone:this.state.phone.value,
    //         address:this.state.address.value,
    //         roles:  [
    //             {
    //                 id: 2,
    //                 name: 'ROLE_USER'
    //             }
    //         ]
    //     };
        
    //     console.log(updateProfileRequest);
    //     this.props.update(updateProfileRequest);
    //     notification.success({
    //         message: 'Travel App',
    //         description: "Thank you! You're successfully updated profile.",
    //     }); 
        
    //    this.setState({
    //        redirect:true
    //    })
    }

    isFormInvalid() {
        return !(this.state.name.validateStatus === 'success' &&
            this.state.username.validateStatus === 'success' &&
            this.state.email.validateStatus === 'success' &&
            this.state.password.validateStatus === 'success' &&
            this.state.phone.validateStatus === 'success' &&
            this.state.address.validateStatus === 'success'
        );
    }
    renderBitrhDay = () => {
        if (this.state.birthDate.value != '') {
            console.log(this.state.birthDate.value);
            return (<FormItem label="BirthDay" validateStatus={this.state.birthDate.validateStatus}
                help={this.state.birthDate.errorMsg}>
                <DatePicker onChange={(date, dateString) => this.handleDateChange(date, dateString)}
                    defaultValue={moment(this.state.birthDate.value, dateFormat)} format={dateFormat} />
            </FormItem>
            )
        } else {
            return (<FormItem label="BirthDay" validateStatus={this.state.birthDate.validateStatus}
                help={this.state.birthDate.errorMsg}>
                <DatePicker onChange={(date, dateString) => this.handleDateChange(date, dateString)}
                    defaultValue={moment('1991-1-1', dateFormat)} format={dateFormat} />
            </FormItem>
            )
        }
    }
    render() {
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <Form onSubmit={this.handleSubmit} className="signup-form">
                        <FormItem
                            label="Full Name"
                            validateStatus={this.state.name.validateStatus}
                            help={this.state.name.errorMsg}>
                            <Input
                                size="large"
                                name="name"
                                autoComplete="off"
                                placeholder="Your full name"
                                value={this.state.name.value}
                                onChange={(event) => this.handleInputChange(event, this.validateName)} />
                        </FormItem>
                        <FormItem label="Username"
                            hasFeedback
                            validateStatus={this.state.username.validateStatus}
                            help={this.state.username.errorMsg}>
                            <Input
                                size="large"
                                name="username"
                                autoComplete="off"
                                placeholder="A unique username"
                                value={this.state.username.value}
                                onBlur={this.validateUsernameAvailability}
                                onChange={(event) => this.handleInputChange(event, this.validateUsername)} />
                        </FormItem>
                        <FormItem
                            label="Email"
                            hasFeedback
                            validateStatus={this.state.email.validateStatus}
                            help={this.state.email.errorMsg}>
                            <Input
                                size="large"
                                name="email"
                                type="email"
                                autoComplete="off"
                                placeholder="Your email"
                                value={this.state.email.value}
                                onBlur={this.validateEmailAvailability}
                                onChange={(event) => this.handleInputChange(event, this.validateEmail)} />
                        </FormItem>
                        <FormItem
                            label="Password"
                            validateStatus={this.state.password.validateStatus}
                            help={this.state.password.errorMsg}>
                            <Input
                                size="large"
                                name="password"
                                type="password"
                                autoComplete="off"
                                placeholder="A password between 6 to 20 characters"
                                value={this.state.password.value}
                                onChange={(event) => this.handleInputChange(event, this.validatePassword)} />
                        </FormItem>
                        <FormItem label="GENDER">
                            <Select defaultValue="MALE" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="FEMALE">FEMALE</Option>
                                <Option value="MALE">MALE</Option>
                            </Select>
                        </FormItem>
                        {this.renderBitrhDay()}
                        <FormItem
                            label="Phone"
                            validateStatus={this.state.phone.validateStatus}
                            help={this.state.phone.errorMsg}>
                            <Input
                                size="large"
                                name="phone"
                                type="text"
                                autoComplete="off"
                                placeholder="A phone number at least 11 numbers"
                                value={this.state.phone.value}
                                onChange={(event) => this.handleInputChange(event, this.validatePhone)} />
                        </FormItem>


                        <FormItem
                            label="Address"
                            validateStatus={this.state.address.validateStatus}
                            help={this.state.address.errorMsg}>
                            <Input
                                size="large"
                                name="address"
                                type="text"
                                autoComplete="off"
                                placeholder="A Address at least 4 characters"
                                value={this.state.address.value}
                                onChange={(event) => this.handleInputChange(event, this.validateAddress)} />
                        </FormItem>

                        <FormItem>
                            <Button type="primary"
                                htmlType="submit"
                                size="large"
                                className="signup-form-button"
                                disabled={this.isFormInvalid()}>Update Now</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }

    // Validation Functions
    handleDateChange = (date, dateString) => {
        this.setState({
            birthDate: {
                value: dateString
            }
        })

    }
    validateName = (name) => {
        if (name.length < NAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
            }
        } else if (name.length > NAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateEmail = (email) => {
        if (!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email may not be empty'
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if (!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email not valid'
            }
        }

        if (email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
            }
        }

        return {
            validateStatus: null,
            errorMsg: null
        }
    }

    validateUsername = (username) => {
        if (username.length < USERNAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`
            }
        } else if (username.length > USERNAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: null,
                errorMsg: null
            }
        }
    }

    validateUsernameAvailability() {
        // First check for client side errors in username
        const usernameValue = this.state.username.value;
        const usernameValidation = this.validateUsername(usernameValue);

        if (usernameValidation.validateStatus === 'error') {
            this.setState({
                username: {
                    value: usernameValue,
                    ...usernameValidation
                }
            });
            return;
        }

        this.setState({
            username: {
                value: usernameValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });
        if (this.props.user.username == usernameValue) {
            this.setState({
                username: {
                    value: usernameValue,
                    validateStatus: 'success',
                    errorMsg: null
                }
            });
        } else {
            checkUsernameAvailability(usernameValue)
                .then(response => {
                    if (response.available) {
                        this.setState({
                            username: {
                                value: usernameValue,
                                validateStatus: 'success',
                                errorMsg: null
                            }
                        });
                    } else {
                        this.setState({
                            username: {
                                value: usernameValue,
                                validateStatus: 'error',
                                errorMsg: 'This username is already taken'
                            }
                        });
                    }
                }).catch(error => {
                    // Marking validateStatus as success, Form will be recchecked at server
                    this.setState({
                        username: {
                            value: usernameValue,
                            validateStatus: 'success',
                            errorMsg: null
                        }
                    });
                });
        }

    }

    validateEmailAvailability() {
        // First check for client side errors in email
        const emailValue = this.state.email.value;
        const emailValidation = this.validateEmail(emailValue);

        if (emailValidation.validateStatus === 'error') {
            this.setState({
                email: {
                    value: emailValue,
                    ...emailValidation
                }
            });
            return;
        }

        this.setState({
            email: {
                value: emailValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });
        if (this.props.user.email == this.state.email.value) {
            this.setState({
                email: {
                    value: emailValue,
                    validateStatus: 'success',
                    errorMsg: null
                }
            });
        } else {

            checkEmailAvailability(emailValue)
                .then(response => {
                    if (response.available) {
                        this.setState({
                            email: {
                                value: emailValue,
                                validateStatus: 'success',
                                errorMsg: null
                            }
                        });
                    } else {
                        this.setState({
                            email: {
                                value: emailValue,
                                validateStatus: 'error',
                                errorMsg: 'This Email is already registered'
                            }
                        });
                    }
                }).catch(error => {
                    // Marking validateStatus as success, Form will be recchecked at server
                    this.setState({
                        email: {
                            value: emailValue,
                            validateStatus: 'success',
                            errorMsg: null
                        }
                    });
                });

        }
    }
    validatePhone = (phone) => {
        var phoneno = /^\d{11}$/;
        if (phone.length != 11) {
            return {
                validateStatus: 'error',
                errorMsg: 'Phone number wrong(11 numbers needed.)'
            }
        } else if (!phone.match(phoneno)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Phone number wrong format'
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateAddress = (address) => {
        if (address.length < 4) {
            return {
                validateStatus: 'error',
                errorMsg: `Address is too short (Minimum 4 characters needed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }
    validatePassword = (password) => {
        if (password.length < PASSWORD_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
            }
        } else if (password.length > PASSWORD_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

}


export default withRouter(ProfileDetail);