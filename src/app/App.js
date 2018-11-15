import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch,
} from 'react-router-dom';
import { connect } from "react-redux";
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { loadCurrentUser, Logout } from '../actions/user.actions';
import { Layout, notification } from 'antd';
import Home from './../home/Home';
import FooterPage from './../common/Footer';
import Tourpage from './../tourpage/Tourpage';
import Contact from '../contact/Contact';
import Aboutpage from './../about/Aboutpage';
import TourDetail from './../tourdetail/TourDetail';
import Cart from '../cart/Cart';
import Search from '../Search/Search';

const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });
    this.handleLogout = this.handleLogout.bind(this);
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
    if (this.props.isLoading) {
      return <LoadingIndicator />
    }
    return (
      <Route exact path="/">
        <Layout className="app-container">
          {!this.props.isAdmin&&<AppHeader isAuthenticated={this.props.isAuthenticated}
            currentUser={this.props.currentUser}
            onLogout={this.handleLogout} />}
          <Content className="app-content">
            <Switch>
              <Route exact path="/"
                render={(props) => <Home isAuthenticated={this.props.isAuthenticated}
                  currentUser={this.props.currentUser} handleLogout={this.handleLogout} {...props} />}>
              </Route>
              <Route path="/tour/:categoryID"
                render={(props) => <Tourpage isAuthenticated={this.props.isAuthenticated}
                  currentUser={this.props.currentUser} handleLogout={this.handleLogout} {...props} />}>
              </Route>
              <Route path="/contact"
                render={(props) => <Contact {...props} />}>
              </Route>
              <Route path="/search"
                render={(props) => <Search {...props} />}>
              </Route>
              <Route path="/about"
                render={(props) => <Aboutpage {...props} />}>
              </Route>
              <Route path="/tourDetail/:tourId"
                render={(props) => <TourDetail {...props} />}>
              </Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/users/:username"
                render={(props) => <Profile isAuthenticated={this.props.isAuthenticated} currentUser={this.props.currentUser} {...props} />}>
              </Route>
              <Route path="/login"
                render={(props) => <Login {...props} />}></Route>
              <Route component={NotFound}></Route>
            </Switch>
            <Route exact path="/cart/payment" render={(props) => <Cart isAuthenticated={this.props.isAuthenticated} currentUser={this.props.currentUser} {...props} />}>
            </Route>
          </Content>
          {!this.props.isAdmin&&<Footer>
            <FooterPage />
          </Footer>}
        </Layout>
      </Route>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.auth.currentUser,
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  isAdmin:state.auth.isAdmin
})

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentUser: () => dispatch(loadCurrentUser()),
    logout: () => dispatch(Logout())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
