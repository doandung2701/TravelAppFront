import React, { Component } from 'react';
import PollList from '../../poll/PollList';
import { Avatar, Tabs } from 'antd';
import { getAvatarColor } from '../../util/Colors';
import { formatDate } from '../../util/Helpers';
import LoadingIndicator  from '../../common/LoadingIndicator';
import './Profile.css';
import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import {connect} from "react-redux";
import { getUserProfile } from '../../actions/user.actions';
const TabPane = Tabs.TabPane;
class Profile extends Component {
    constructor(props) {
        super(props);
        this.loadUserProfile = this.loadUserProfile.bind(this);
        console.log(this.props);
    }

    loadUserProfile(username) {


        this.props.getUserProfile(username);
        
    }
      
    componentDidMount() {
        this.loadUserProfile(this.props.match.params.username);
    }

    // componentWillReceiveProps(nextProps) {
    //     if(this.props.match.params.username !== nextProps.match.params.username) {
    //         this.loadUserProfile(nextProps.match.params.username);
    //     }        
    // }

    render() {
        if(this.props.isLoading) {
            return <LoadingIndicator />;
        }

        if(this.props.notFound) {
            return <NotFound />;
        }

        if(this.props.serverError) {
            return <ServerError />;
        }

        const tabBarStyle = {
            textAlign: 'center'
        };

        return (
            <div className="profile">
                { 
                    this.props.user ? (
                        <div className="user-profile">
                            <div className="user-details">
                                <div className="user-avatar">
                                    <Avatar className="user-avatar-circle" style={{ backgroundColor: getAvatarColor(this.props.user.name)}}>
                                        {this.props.user.name[0].toUpperCase()}
                                    </Avatar>
                                </div>
                                <div className="user-summary">
                                    <div className="full-name">{this.props.user.name}</div>
                                    <div className="username">@{this.props.user.username}</div>
                                    <div className="user-joined">
                                        Joined {formatDate(this.props.user.joinedAt)}
                                    </div>
                                </div>
                            </div>
                            <div className="user-poll-details">    
                                <Tabs defaultActiveKey="1" 
                                    animated={false}
                                    tabBarStyle={tabBarStyle}
                                    size="large"
                                    className="profile-tabs">
                                    <TabPane tab={`${this.props.user.pollCount} wishlist`} key="1">
                                        <PollList username={this.props.match.params.username} type="USER_WISHED" />
                                    </TabPane>
                                    <TabPane tab={`${this.props.user.voteCount} booking`}  key="2">
                                        <PollList username={this.props.match.params.username} type="USER_BOOKED" />
                                    </TabPane>
                                    <TabPane tab="update profile" key="3">
                                        <PollList username={this.props.match.params.username} type="USER_PROFILE_UPDATE" />
                                    </TabPane>
                                </Tabs>
                            </div>  
                        </div>  
                    ): null               
                }
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    user:state.auth.userProfle,
    notfound:state.auth.notfound,
    serverError:state.auth.server_error,
    isLoading:state.auth.isLoading
})
 const mapDispatchToProps =dispatch=> {
     return {
        getUserProfile:username=>dispatch(getUserProfile(username))

     }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
