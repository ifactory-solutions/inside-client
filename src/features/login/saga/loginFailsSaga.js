import { takeEvery, put } from 'redux-saga/effects';

import { LOGIN_REQUEST_FAILS, loginErrorAction } from '../actions/loginActions';

function* loginRequestFailsSaga(action) {
  const error = action.payload;

  yield put(loginErrorAction(error));
}

export function* loginRequestFailsWatcher() {
  yield takeEvery(LOGIN_REQUEST_FAILS, loginRequestFailsSaga);
}
