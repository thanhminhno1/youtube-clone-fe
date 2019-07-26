import { createActionTypes } from '../../redux/utils/createReduxActions';

export const context = 'post';
export const [
  POST,
  POST_FAIL,
  POST_SUCCESS
] = createActionTypes(context);
export const UPDATE_POSTS = 'updatePost';
