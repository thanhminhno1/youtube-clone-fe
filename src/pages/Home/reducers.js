import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { HOME, HOME_SUCCESS } from './constants';
import { STATUS } from '../../redux/constants';
import { updateVideos } from './actions';

export const initialState = {
  videos: [],
  status: STATUS.IDLE,
};

export default handleActions(
  {
    [HOME]: state => immutable(state, {
      status: { $set: STATUS.RUNNING },
    }),
    [HOME_SUCCESS]: state => immutable(state, {
      status: { $set: STATUS.READY },
    }),
    [updateVideos]: (state, action) => ({
      ...state,
      videos: action.payload.videos,
    }),
  },
  initialState,
);
