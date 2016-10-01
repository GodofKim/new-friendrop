/*
import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  list: {
    status: 'INIT',
    data: [],
    isLast: false
  }
};


export default function drop(state, action) {
  if(typeof state === "undefined"){
    state = initialState;
  }

  switch(action.type) {
    case types.DROPLIST_GET:
      return update(state, {
        list: {
          status: { $set: 'WAITING' }
        }
      });
    case types.DROPLIST_GET_SUCCESS:
      if(action.isInitial) {
        return update(state, {
          list: {
            status: { $set: 'SUCCESS' },
            data: { $set: action.data },
            isLsat: { $set: action.data.length < 6 }
          }
        });
      } else {
        if(action.listType === 'new') {
          return update(state, {
            list: {
              status: { $set: 'SUCCESS' },
              data: { $unshift: actions.data }
              // $unshift: 배열의 앞부분에 추가
              // $push: 배열의 뒷부분에 추가
            }
          });
        } else {
          return update(state, {
            list: {
              status: { $set: 'SUCCESS' },
              data: { $push: action.data },
              isLast: { $set: action.data.length < 6 }
            }
          });
        }
      }
      return state; // case문에는 break포인트가 있어야 하기에 써놓음.
    case types.DROPLIST_GET_FAILURE:
      return update(state, {
        list: {
          status: { $set: 'FAILURE'}
        }
      });
    default:
      return state;
  }
}
*/
