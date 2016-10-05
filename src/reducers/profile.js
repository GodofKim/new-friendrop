import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  get: {
    status: 'INIT',
    error: -1
  },
  edit: {
    status: 'INIT',
    error: -1
  },
  data: {},

  other: {
    get: {
      status: 'INIT',
      error: -1
    },
    edit: {
      status: 'INIT',
      error: -1
    },
    data: {}
  }
};

export default function profile(state, action) {
  if(typeof state === "undefined"){
    state = initialState;
  }

  switch(action.type){
    /*Profile*/
    case types.PROFILE_GET:
      return update(state, {
        get: {
          status: { $set: 'WAITING'}
        }
      });
    case types.PROFILE_GET_SUCCESS:
      console.log("PROFILE GET SUCCESS ",action.data);
      return update(state, {
        get: {
          status: { $set: 'SUCCESS'}
        },
        data: { $set: action.data.profile }
      });
    case types.PROFILE_GET_FAILURE:
      return update(state, {
        get: {
          status: { $set: 'FAILURE'}
        }
      });

      case types.PROFILE_OTHER_GET:
        return update(state, {
          other: {
            get: {
              status: { $set: 'WAITING'}
            }
          }
        });
      case types.PROFILE_OTHER_GET_SUCCESS:
        console.log("PROFILE GET SUCCESS ",action.data);
        return update(state, {
          other: {
            get: {
              status: { $set: 'SUCCESS'}
            },
            data: { $set: action.data.profile }
          }
        });
      case types.PROFILE_OTHER_GET_FAILURE:
        return update(state, {
          other: {
            get: {
              status: { $set: 'FAILURE'}
            }
          }
        });
    default:
      return state;
  }
}
