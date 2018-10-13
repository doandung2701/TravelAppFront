import {NOT_FOUND,SERVER_ERROR, POLL_LIST_SIZE,API_BASE_URL, ACCESS_TOKEN, START_PROCESSING, LOG_IN_SUCCESS, LOAD_CURRENT_USER, FINISH_PROCESSING, LOG_IN_FAILURE, GET_TOKEN_ERROR, LOG_OUT, CLEAR_ERRORS, LOAD_USER_PROFILE } from '../constants';
import {notification } from 'antd';

export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                console.log("BEn trong request");
                console.log(json);
                return Promise.reject(json);
            }
           return json;
        })
    );
};

export function getAllPolls(page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/polls?page=" + page + "&size=" + size,
        method: 'GET'
    });
}

export function createPoll(pollData) {
    return request({
        url: API_BASE_URL + "/polls",
        method: 'POST',
        body: JSON.stringify(pollData)         
    });
}

export function castVote(voteData) {
    return request({
        url: API_BASE_URL + "/polls/" + voteData.pollId + "/votes",
        method: 'POST',
        body: JSON.stringify(voteData)
    });
}

export function login(loginRequest) {
    return dispatch=>{
        dispatch({type:START_PROCESSING});
        request({
            url: API_BASE_URL + "/auth/signin",
            method: 'POST',
            body: JSON.stringify(loginRequest)
        }).then(response=>{
            console.log("Thnah cong");
            console.log(response);
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            getCurrentUser().then(response=>{
                dispatch({type:LOG_IN_SUCCESS,currentUser:response});
                dispatch({type:CLEAR_ERRORS});
                dispatch({ type:FINISH_PROCESSING });
            });
            dispatch({ type:FINISH_PROCESSING });
        }).catch(err=>{
                dispatch ({ type:FINISH_PROCESSING });
        });
    }
}
export function Logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    return dispatch=>{
        dispatch({type:LOG_OUT})
    }
};

export function signup(signupRequest) {
    return dispatch=>{
        dispatch({type:START_PROCESSING});
        request({
            url: API_BASE_URL + "/auth/signup",
            method: 'POST',
            body: JSON.stringify(signupRequest)
        }).then
    }

}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}
export function loadCurrentUser(){
    return dispatch=>{
        getCurrentUser().then(response=>{
            dispatch({type:LOG_IN_SUCCESS,currentUser:response});
            dispatch({type:CLEAR_ERRORS})
            dispatch({ type:FINISH_PROCESSING });
        }).catch(err=>{
            dispatch({ type:FINISH_PROCESSING });
        });
    }
    
}
export function getUserProfile(username) {
    return dispatch=>{
        dispatch({type:START_PROCESSING});
        request({
            url: API_BASE_URL + "/users/" + username,
            method: 'GET'
        }).then(response=>{
            dispatch({type:LOAD_USER_PROFILE,userProfle:response});
            dispatch({type:CLEAR_ERRORS})
            dispatch({ type:FINISH_PROCESSING });
        }).catch(error=>{
            if(error.status === 404) {
                dispatch({type:NOT_FOUND});
            } else {
                dispatch({type:SERVER_ERROR});
            }
            dispatch({ type:FINISH_PROCESSING });
        });
        dispatch({type:CLEAR_ERRORS})
        dispatch({ type:FINISH_PROCESSING });
    }
      
}

export function getUserCreatedPolls(username, page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/users/" + username + "/polls?page=" + page + "&size=" + size,
        method: 'GET'
    });
}

export function getUserVotedPolls(username, page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/users/" + username + "/votes?page=" + page + "&size=" + size,
        method: 'GET'
    });
}