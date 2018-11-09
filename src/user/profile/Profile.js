import React, { Component } from 'react';
import { Avatar, Tabs } from 'antd';
import { getAvatarColor } from '../../util/Colors';
import { formatDate } from '../../util/Helpers';
import LoadingIndicator from '../../common/LoadingIndicator';
import './Profile.css';
import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import { connect } from "react-redux";
import { getUserProfile, updateProfile } from '../../actions/user.actions';
import ProfileDetail from './ProfileDetail';
const TabPane = Tabs.TabPane;
const tabBarStyle = {
    textAlign: 'center'
};
class Profile extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount = () => {
        this.props.getUserProfile(this.props.match.params.username);
    }
    renderTab = () => {
        if (this.props.userProfle != undefined) {
            return (<Tabs defaultActiveKey="1"
                animated={false}
                tabBarStyle={tabBarStyle}
                size="large"
                className="profile-tabs">
                <TabPane tab={`${this.props.userProfle.bookings.length} booking`} key="2">
                    <ProfileDetail user={this.props.userProfle} type="USER_BOOKED" />
                </TabPane>
                <TabPane tab="update profile" key="3">
                    <ProfileDetail user={this.props.userProfle} update={updateProfileRequest=>this.props.updateProfile(updateProfileRequest)} type="USER_PROFILE_UPDATE" />
                </TabPane>
            </Tabs>)
        }else{
            return <LoadingIndicator/>
        }
    }
    renderTimeJoin=()=>{
        if (this.props.userProfle!=undefined) {
            return ( 
                
                <div className="user-joined">
                                 Joined {formatDate(this.props.userProfle.createdAt)}    
                                    </div>
            )
        }
    }
    render() {

        if (this.props.notFound) {
            return <NotFound />;
        }

        if (this.props.serverError) {
            return <ServerError />;
        }
        return (

            <div className="profile">
                {
                    this.props.user ? (
                        <div className="user-profile">
                            <div className="user-details">
                                <div className="user-avatar">
                                    <Avatar className="user-avatar-circle" style={{ backgroundColor: getAvatarColor(this.props.user.name) }}>
                                        {this.props.user.name[0].toUpperCase()}
                                    </Avatar>
                                </div>
                                <div className="user-summary">
                                    <div className="full-name">{this.props.user.name}</div>
                                    <div className="username">@{this.props.user.username}</div>
                                    <div className="user-joined">
                                    {this.renderTimeJoin()}
                                    </div>
                                </div>
                            </div>
                            <div className="user-poll-details">
                                {this.renderTab()}
                            </div>
                        </div>
                    ) : null
                }
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    user: state.auth.currentUser,
    notfound: state.auth.notfound,
    serverError: state.auth.server_error,
    isLoading: state.auth.isLoading,
    userProfle: state.auth.userProfle
})
const mapDispatchToProps = dispatch => {
    return {
        getUserProfile: username => dispatch(getUserProfile(username)),
        updateProfile:userprofile=>dispatch(updateProfile(userprofile))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
