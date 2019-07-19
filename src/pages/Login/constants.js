import { createActionTypes } from '../../redux/utils/createReduxActions'; 

export const context = 'login';
export const [
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS
] = createActionTypes(context);
export const [
  LOGOUT,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS
] = createActionTypes('logout');
