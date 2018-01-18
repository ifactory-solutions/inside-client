import { all } from 'redux-saga/effects';

import { loginWatcher } from '../features/login/saga/loginSaga';

export function* rootSaga() {
  yield all([loginWatcher()]);
}
