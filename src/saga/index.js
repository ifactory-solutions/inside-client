import { all } from 'redux-saga/effects';

import {
  loginWatcher,
  loginRequestSucceededWatcher,
  loginRequestFailsWatcher,
} from '../features/login/saga/index';

export function* rootSaga() {
  yield all([
    loginWatcher(),
    loginRequestSucceededWatcher(),
    loginRequestFailsWatcher(),
  ]);
}
