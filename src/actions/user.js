/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants';

export const { userLogin: login, userLogout: logOut } = createActions({
  [ActionTypes.USER_LOGIN]: () => ({}),
  [ActionTypes.USER_LOGOUT]: () => ({}),
});
