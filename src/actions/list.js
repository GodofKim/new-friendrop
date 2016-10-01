import axios from 'axios';

import {
  LIST_ITEM_GET,
  LIST_ITEM_GET_SUCCESS,
  LIST_ITEM_GET_FAILURE
} from './ActionTypes';

import { API_URL } from '../url';

/*
Parameter:
- item : 어떤 페이지인지. '/drop', '/letter', '/contact'
- isInitial : 최초 로딩인지 아닌지
- listType  : 이전 메모 로딩인지, 새로운 메모 로딩인지
- id        : 메모의 id (다른 메모 로딩시 어디부터 로딩할지 결정)
- username  : 유저네임으로 메모 검색 시 사용
*/

export function getListItemRequest(item, isInitial, listType, id, username) {
  return (dispatch) => {
    dispatch(getListItem());

    let url = `${API_URL}/${item}`;

    if(typeof username==="undefined") {
      // username not given, load all items
      url = isInitial ? url : `${url}/${listType}/${id}`;
    } else {
      // load items of specific user
    }

    return axios.get(url, {
      headers: { authorization: localStorage.getItem('token') }})
      .then((response) => {
        console.log(response);
        dispatch(getListItemSuccess(item, response.data, isInitial, listType));
      })
      .catch((error) => {
        dispatch(getListItemFailure());
      });
  };
}

export function getListItem(item){
  return {
    type: LIST_ITEM_GET,
    item
  };
}

export function getListItemSuccess(item, data, isInitial,
listType){
  console.log("getListItemSuccess", data);
  return {
    type: LIST_ITEM_GET_SUCCESS,
    item,
    data,
    isInitial,
    listType
  };
}

export function getListItemFailure(item){
  return {
    type: LIST_ITEM_GET_FAILURE,
    item
  };
}
