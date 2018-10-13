import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import {login} from '../../actions/user.actions';
import { Form, Input, Button, Icon, notification } from 'antd';
import {connect} from "react-redux";
const FormItem = Form.Item;
class Login extends Component {
   constructor(props) {
       super(props)
       this.loginSuccess=this.loginSuccess.bind(this);

   }
   loginSuccess(){
    console.log(this.props);
       this.props.history.push("/");
   }
    render(props) {
        const AntWrappedLoginForm = Form.create()(LoginForm)
        return (
            <div className="login-container">
                <h1 className="page-title">Login</h1>
                <div className="login-content">
                    <AntWrappedLoginForm err={this.props.err} onLogin={this.props.login} onSuccess={this.loginSuccess} />
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault(); 
         
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const loginRequest = Object.assign({}, values);
                this.props.onLogin(loginRequest);
                if(this.props.err){
                    console.log("CO error");
                    console.log(this.props.err);
                    if(this.props.err.status === 401) {
                        notification.error({
                            message: 'Polling App',
                            description: 'Your Username or Password is incorrect. Please try again!'
                        });                    
                    } else {
                        notification.error({
                            message: 'Polling App',
                            description: this.props.err.message || 'Sorry! Something went wrong. Please try again!'
                        });                                            
                    }
                }
                else{
                    notification.success({
                        message: 'Polling App',
                        description: 'Login success!'
                    }); 
                    this.props.onSuccess();
                }
            }
           
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('usernameOrEmail', {
                        rules: [{ required: true, message: 'Please input your username or email!' }],
                    })(
                    <Input 
                        prefix={<Icon type="user" />}
                        size="large"
                        name="usernameOrEmail" 
                        placeholder="Username or Email" />    
                    )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input 
                        prefix={<Icon type="lock" />}
                        size="large"
                        name="password" 
                        type="password" 
                        placeholder="Password"  />                        
                )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                    Or <Link to="/signup">register now!</Link>
                </FormItem>
            </Form>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    err:state.auth.err
})

const mapDispatchToProps =dispatch=> {
    return {
        login:loginRequest=>dispatch(login(loginRequest))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
