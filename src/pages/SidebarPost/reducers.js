import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { CATEGORY, CATEGORY_SUCCESS } from './constants';
import { STATUS } from '../../redux/constants';
import { updateCategories } from './actions';

export const initialState = {
  categories: [],
  status: STATUS.IDLE,
}

export default handleActions(
  {
    [CATEGORY]: state =>immutable(state, {
      status: { $set: STATUS.RUNNING },
    }),
    [CATEGORY_SUCCESS]: state => immutable(state, {
      status: { $set: STATUS.READY }
    }),
    [updateCategories]: (state, action) => ({
      ...state,
      categories: action.payload.data,
    }),
  },
  initialState,
)
