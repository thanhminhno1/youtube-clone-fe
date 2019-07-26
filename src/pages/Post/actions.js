import { createReduxActions } from '../../redux/utils/createReduxActions';
import { createAction } from 'redux-actions';

import { context, POST } from './constants';

export const [
  post,
  postFail,
  postSuccess
] = createReduxActions(context);

export const updatePosts = createAction('updatePosts');
export const fetchPosts = createAction(POST);
