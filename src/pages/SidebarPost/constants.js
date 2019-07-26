import { createActionTypes } from '../../redux/utils/createReduxActions';

export const context = 'post';
export const [
  CATEGORY,
  CATEGORY_FAIL,
  CATEGORY_SUCCESS
] = createActionTypes(context);
export const UPDATE_CATEGORYS = 'updateCategories';
