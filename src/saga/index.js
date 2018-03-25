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

import {
  getRolesWatcher,
  getRoleWatcher,
  postRoleWatcher,
  postRoleSuccessWatcher,
  postRoleFailsWatcher,
  putRoleWatcher,
  putRoleSuccessWatcher,
  putRoleFailsWatcher,
  deleteRoleWatcher,
  deleteRoleSuccessWatcher,
  deleteRoleFailsWatcher,
} from '../features/admin/roles/saga';

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

    getRolesWatcher(),
    getRoleWatcher(),
    postRoleWatcher(),
    postRoleSuccessWatcher(),
    postRoleFailsWatcher(),
    putRoleWatcher(),
    putRoleSuccessWatcher(),
    putRoleFailsWatcher(),
    deleteRoleWatcher(),
    deleteRoleSuccessWatcher(),
    deleteRoleFailsWatcher(),
  ]);
}
