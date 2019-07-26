import { createReduxActions } from '../../redux/utils/createReduxActions';
import { createAction } from 'redux-actions';

import { context, CATEGORY } from './constants';

export const [
  category,
  categoryFail,
  categorySuccess
] = createReduxActions(context);

export const updateCategories = createAction('updateCategories');
export const fetchCategories = createAction(CATEGORY);
