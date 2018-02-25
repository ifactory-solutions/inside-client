import { all } from 'redux-saga/effects';

import {
  loginWatcher,
  loginRequestSucceededWatcher,
  loginRequestFailsWatcher,
  logoutRequestWatcher,
} from '../features/auth/saga/index';

import { getEmployeesSagaWatcher } from '../features/people/employees/sagas';

export function* rootSaga() {
  yield all([
    loginWatcher(),
    loginRequestSucceededWatcher(),
    loginRequestFailsWatcher(),
    logoutRequestWatcher(),

    getEmployeesSagaWatcher(),
  ]);
}
