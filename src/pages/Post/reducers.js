import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { POST, POST_SUCCESS } from './constants';
import { STATUS } from '../../redux/constants';
import { updatePosts } from './actions';

export const initialState = {
  posts: [],
  status: STATUS.IDLE,
}

export default handleActions(
  {
    [POST]: state =>immutable(state, {
      status: { $set: STATUS.RUNNING },
    }),
    [POST_SUCCESS]: state => immutable(state, {
      status: { $set: STATUS.READY }
    }),
    [updatePosts]: (state, action) =>  ({
      ...state,
      posts: action.payload.data,
    }),
  },
  initialState,
)
