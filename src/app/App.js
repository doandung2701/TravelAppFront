import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import {connect} from "react-redux";
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from '../common/PrivateRoute';
import {loadCurrentUser, Logout} from '../actions/user.actions';
import { Layout, notification } from 'antd';
import Home from './../home/Home';
import FooterPage from './../common/Footer';
import Tourpage from './../tourpage/Tourpage';
import Contact from '../contact/Contact';
import Aboutpage from './../about/Aboutpage';
import TourDetail from './../tourdetail/TourDetail';
import Cart from '../cart/Cart';
const { Content,Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });    
    console.log("App");
    console.log(props);
    this.handleLogout=this.handleLogout.bind(this);
    console.log(this.props);
  }

componentWillMount() {
  this.props.loadCurrentUser();
}

  handleLogout() {
    this.props.logout();
    this.props.history.push("/");
    
    notification.success({
      message: 'Travel App',
      description: "Logout success!!",
    });
  }
  render() {
    if(this.props.isLoading) {
      return <LoadingIndicator />
    }
    return (
        <Layout className="app-container">
          <AppHeader isAuthenticated={this.props.isAuthenticated} 
            currentUser={this.props.currentUser} 
            onLogout={this.handleLogout} />
          <Content className="app-content">
              <Switch>      
                <Route exact path="/" 
                  render={(props) => <Home isAuthenticated={this.props.isAuthenticated} 
                      currentUser={this.props.currentUser} handleLogout={this.handleLogout} {...props} />}>
                </Route>
                <Route path="/tour" 
                  render={(props) => <Tourpage isAuthenticated={this.props.isAuthenticated} 
                      currentUser={this.props.currentUser} handleLogout={this.handleLogout} {...props} />}>
                </Route>
                <Route path="/contact" 
                  render={(props) => <Contact {...props} />}>
                </Route>
                <Route path="/about" 
                  render={(props) => <Aboutpage {...props} />}>
                </Route>
                <Route path="/tourDetail" 
                  render={(props) => <TourDetail {...props} />}>
                </Route>
                <Route path="/cart" 
                  render={(props) => <Cart {...props} />}>
                </Route>
                <Route path="/login" 
                  render={(props) => <Login {...props} />}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/users/:username" 
                  render={(props) => <Profile isAuthenticated={this.props.isAuthenticated} currentUser={this.props.currentUser} {...props}  />}>
                </Route>
                {/* <PrivateRoute authenticated={this.state.isAuthenticated} path="/poll/new" component={NewPoll} handleLogout={this.handleLogout}></PrivateRoute> */}
                <Route component={NotFound}></Route>
              </Switch>
          </Content>
        <Footer>
          <FooterPage/>
        </Footer>
        </Layout>
    );
  }
} 
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.auth.currentUser,
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading
})

const mapDispatchToProps =dispatch=> {
  return {
    loadCurrentUser:()=>dispatch(loadCurrentUser()),
    logout:()=>dispatch(Logout())
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
