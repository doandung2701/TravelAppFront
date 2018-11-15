import {NOT_FOUND,SERVER_ERROR,API_BASE_URL, ACCESS_TOKEN, START_PROCESSING, LOG_IN_SUCCESS, FINISH_PROCESSING, LOG_OUT, CLEAR_ERRORS, LOAD_USER_PROFILE, UPDATE_PROFILE } from '../constants';
import Login from '../user/login/Login';

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
                return Promise.reject(json);
            }
           return json;
        })
    );
};
export function login(loginRequest) {
    return dispatch=>{
        dispatch({type:START_PROCESSING});
        request({
            url: API_BASE_URL + "/auth/signin",
            method: 'POST',
            body: JSON.stringify(loginRequest)
        }).then(response=>{
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
        // eslint-disable-next-line
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
export function updateProfile(signupRequest) {
    return dispatch=>{
        dispatch({type:START_PROCESSING});
        request({
            url: API_BASE_URL + "/user",
            method: 'PUT',
            body: JSON.stringify(signupRequest)
        }).then(response=>{
            dispatch({type:UPDATE_PROFILE,user:response.data});
            Logout();
            Login();
            dispatch({type:FINISH_PROCESSING})
        }).catch(err=>{
            dispatch({type:FINISH_PROCESSING});
        })
    }

}