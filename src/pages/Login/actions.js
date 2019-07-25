import { createReduxActions } from '../../redux/utils/createReduxActions';
import { createAction } from 'redux-actions'

import { context } from './constants';

export const [
  login,
  loginFail,
  loginSuccess,
] = createReduxActions(context);

export const loginAction = createAction('login');
