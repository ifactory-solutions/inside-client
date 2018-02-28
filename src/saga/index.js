import { all } from 'redux-saga/effects';

import {
  loginWatcher,
  loginRequestSucceededWatcher,
  loginRequestFailsWatcher,
  logoutRequestWatcher,
} from '../features/auth/saga/index';

import { getEmployeesSagaWatcher } from '../features/people/employees/sagas';
import {
  getCountriesWatcher,
  getStatesWatcher,
  getCitiesWatcher,
} from '../features/locations/sagas';

export function* rootSaga() {
  yield all([
    loginWatcher(),
    loginRequestSucceededWatcher(),
    loginRequestFailsWatcher(),
    logoutRequestWatcher(),

    getEmployeesSagaWatcher(),

    getCountriesWatcher(),
    getStatesWatcher(),
    getCitiesWatcher(),
  ]);
}
