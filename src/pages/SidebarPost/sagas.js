import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CATEGORY } from './constants';
import { updateCategories, categoryFail } from './actions';
import { CategoryApi } from '../../services/restful/categoryApi'

export function* fetchCategories() {
  try {
    const response = yield call(CategoryApi.fetchCaregories);
    yield put(updateCategories(response));
  } catch {
    yield put(categoryFail);
  }
}

export default function* root() {
  yield all([
    takeLatest(CATEGORY, fetchCategories),
  ])
}
