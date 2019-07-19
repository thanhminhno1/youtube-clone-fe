import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { LOGIN, LOGIN_SUCCESS } from './constants';
import { STATUS } from '../../redux/constants';

export const initialState = {
  isAuthenticated: false,
  status: STATUS.IDLE,
};

export default handleActions(
  {
    [LOGIN]: state => immutable(state, {
      status: { $set: STATUS.RUNNING },
    }),
    [LOGIN_SUCCESS]: state => immutable(state, {
      isAuthenticated: { $set: true },
      status: { $set: STATUS.READY },
    }),
  },
  initialState,
);
