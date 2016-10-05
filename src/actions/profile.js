import axios from 'axios';

import {
  PROFILE_GET,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAILURE,
  PROFILE_OTHER_GET,
  PROFILE_OTHER_GET_SUCCESS,
  PROFILE_OTHER_GET_FAILURE
} from './ActionTypes';

import { API_URL } from '../url';

export function getProfileRequest() {
  return (dispatch) => {
    dispatch(getProfile());

    //API REQUEST // 갑자기 드는 생각인데 토큰 주고받는 게 더 안전하지 않나. => 스티븐 그라이더가 그런 방식을 썻다. 나도 고쳐야지.
    return axios.get(API_URL + '/profile', {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then((response) => {
      //SUCCESS
      dispatch(getProfileSuccess(response.data));
    })
    .catch((error) => {
      //FAILED
      dispatch(getProfileFailure());
    });
  };
}

export function getProfile() {
  return {
    type: PROFILE_GET
  };
}

export function getProfileSuccess (data) {
  return {
    type: PROFILE_GET_SUCCESS,
    data
  };
}

export function getProfileFailure () {
  return {
    type: PROFILE_GET_FAILURE
  };
}

/* get other's profile */

export function getProfileOtherRequest(id) {
  return (dispatch) => {
    dispatch(getProfileOther());
    console.log(`${API_URL}/profile/${id}`);
    return axios.get(`${API_URL}/profile/${id}`, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then((response) => {
      //SUCCESS
      dispatch(getProfileOtherSuccess(response.data));
    })
    .catch((error) => {
      //FAILED
      dispatch(getProfileOtherFailure());
    });
  };
}

export function getProfileOther() {
  return {
    type: PROFILE_OTHER_GET
  };
}

export function getProfileOtherSuccess (data) {
  return {
    type: PROFILE_OTHER_GET_SUCCESS,
    data
  };
}

export function getProfileOtherFailure () {
  return {
    type: PROFILE_OTHER_GET_FAILURE
  };
}
