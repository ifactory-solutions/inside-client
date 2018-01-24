import { takeEvery, put } from 'redux-saga/effects';

import { LOGIN_REQUEST_FAILS, loginErrorAction } from '../actions/authActions';
import { pageStopLoadingAction } from '../../../layouts/actions/pageActions';

function* loginRequestFailsSaga(action) {
  const error = action.payload;
  const stopLoadingAction = pageStopLoadingAction();

  yield put(loginErrorAction(error));
  yield put(stopLoadingAction);
}

export function* loginRequestFailsWatcher() {
  yield takeEvery(LOGIN_REQUEST_FAILS, loginRequestFailsSaga);
}
