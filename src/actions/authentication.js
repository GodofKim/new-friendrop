import axios from 'axios';

import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT
} from './ActionTypes';
import { API_URL } from '../url';

export function loginRequest(email, password) {
  return (dispatch) => {
    //inform login api is starting.
    dispatch(login());

    //API REQUEST
    return axios.post(API_URL + '/users/signin', { email, password })
    .then((response) => {
      //SUCCESS
      dispatch(loginSuccess(email));
      localStorage.setItem('token', response.data.token);
    })
    .catch((error) => {
      //FAILED
      dispatch(loginFailure());
    });
  };
}

export function login() {
  return {
    type: AUTH_LOGIN
  };
}

export function loginSuccess(email) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    email
  };
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE
  };
}

/* REGISTER */
export function registerRequest(email, password) {
    return (dispatch) => {
      // Inform Register API is starting
      dispatch(register());

      return axios.post(API_URL + '/users/signup', { email, password })
      .then((response) => {
          dispatch(registerSuccess());
      }).catch((error) => {
          dispatch(registerFailure(error.response.data.code));
      });
    };
}

export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS,
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}

export function logout(){
  localStorage.removeItem('token');

  return {
    type: AUTH_LOGOUT
  };
}
