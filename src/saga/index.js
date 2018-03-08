import { all } from 'redux-saga/effects';

import {
  loginWatcher,
  loginRequestSucceededWatcher,
  loginRequestFailsWatcher,
  logoutRequestWatcher,
} from '../features/auth/saga/index';

import {
  getCountriesWatcher,
  getStatesWatcher,
  getCitiesWatcher,
} from '../features/locations/sagas';

import {
  getEmployeesWatcher,
  postEmployeeWatcher,
  postEmployeeSuccessWatcher,
} from '../features/people/employees/sagas';

import { getProjectsSagaWatcher } from '../features/projects/sagas';

export function* rootSaga() {
  yield all([
    loginWatcher(),
    loginRequestSucceededWatcher(),
    loginRequestFailsWatcher(),
    logoutRequestWatcher(),

    getCountriesWatcher(),
    getStatesWatcher(),
    getCitiesWatcher(),

    getEmployeesWatcher(),
    postEmployeeWatcher(),
    postEmployeeSuccessWatcher(),

    getProjectsSagaWatcher(),
  ]);
}
