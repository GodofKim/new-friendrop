import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  status: 'WAITING',

  drop: {
    list: {
      status: 'INIT',
      data: [],
      isLast: false
    }
  },
  letter: {
    list: {
      status: 'INIT',
      data: [],
      isLast: false
    }
  },
  contact: {
    list: {
      status: 'INIT',
      data: [],
      isLast: false
    }
  }
};


export default function list(state, action) {
  if(typeof state === "undefined"){
    state = initialState;
  }
  if(typeof action.item === "undefined"){
    return state;
  }

  switch(action.type) {
    case types.LIST_ITEM_GET:
      return update(state, {
        [action.item]: {
          list: {
            status: { $set: 'WAITING' }
          }
        }
      });
    case types.LIST_ITEM_GET_SUCCESS:
      if(action.isInitial) {
        return update(state, {
          [action.item]: {
            list: {
              status: { $set: 'SUCCESS' },
              data: { $set: action.data },
              isLsat: { $set: action.data.length < 6 }
            }
          }
        });
      } else {
        if(action.listType === 'new') {
          return update(state, {
            [action.item]: {
              list: {
                status: { $set: 'SUCCESS' },
                data: { $unshift: actions.data }
                // $unshift: 배열의 앞부분에 추가
                // $push: 배열의 뒷부분에 추가
              }
            }
          });
        } else {
          return update(state, {
            [action.item]: {
              list: {
                status: { $set: 'SUCCESS' },
                data: { $push: action.data },
                isLast: { $set: action.data.length < 6 }
              }
            }
          });
        }
      }
      return state; // case문에는 break포인트가 있어야 하기에 써놓음.
    case types.LIST_ITEM_GET_FAILURE:
      return update(state, {
        [action.item]: {
          list: {
            status: { $set: 'FAILURE'}
          }
        }
      });
    default:
      return state;
  }
}
