import { createActionTypes } from '../../redux/utils/createReduxActions'; 

export const context = 'home';
export const [
  HOME,
  HOME_FAIL,
  HOME_SUCCESS
] = createActionTypes(context);
export const UPDATE_VIDEOS = 'updateVideo';
