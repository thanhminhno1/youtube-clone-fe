import { all, call, put, takeLatest } from 'redux-saga/effects';

import { HOME } from './constants';
import { updateVideos, homeFail } from './actions';
import { listVideos } from '../../services/graphql/videos';

export function* fetchAllVideos() {
  try {
    const response = yield call(listVideos);
    yield put(updateVideos(response));
  } catch (err) {
    yield put(homeFail(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(HOME, fetchAllVideos),
  ]);
}
