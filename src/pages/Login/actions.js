import { createReduxActions } from '../../redux/utils/createReduxActions'; 
import { context } from './constants';

export const [
  login,
  loginFail,
  loginSuccess,
] = createReduxActions(context);
