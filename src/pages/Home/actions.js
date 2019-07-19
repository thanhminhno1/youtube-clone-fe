import { createReduxActions } from '../../redux/utils/createReduxActions'; 
import { createAction } from 'redux-actions'

import { context, HOME } from './constants';


export const [
  home,
  homeFail,
  homeSuccess,
] = createReduxActions(context);

export const updateVideos = createAction('updateVideos');
export const fetchVideos = createAction(HOME);
