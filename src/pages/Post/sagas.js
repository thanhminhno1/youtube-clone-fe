import { all, call, put, takeLatest } from 'redux-saga/effects';

import { POST } from './constants';
import { updatePosts, postFail } from './actions';
import { PostApi } from '../../services/restful/postApi'

export function* fetchPosts() {
  try {
    const response = yield call(PostApi.fetchPost);
    debugger
    yield put(updatePosts(response));
  } catch {
    yield put(postFail);
  }
}

export default function* root() {
  yield all([
    takeLatest(POST, fetchPosts),
  ])
}
