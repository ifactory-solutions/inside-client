import { takeEvery } from 'redux-saga/effects';

import {
  GET_EMPLOYEES,
  POST_EMPLOYEES,
  POST_EMPLOYEES_SUCCESS,
} from '../actions';
import { getEmployeesSaga } from './getEmployeesSaga';
import { postEmployeeSaga, postEmployeeSuccessSaga } from './postEmployeeSga';

export function* getEmployeesWatcher() {
  yield takeEvery(GET_EMPLOYEES, getEmployeesSaga);
}

export function* postEmployeeWatcher() {
  yield takeEvery(POST_EMPLOYEES, postEmployeeSaga);
}

export function* postEmployeeSuccessWatcher() {
  yield takeEvery(POST_EMPLOYEES_SUCCESS, postEmployeeSuccessSaga);
}
