import { takeEvery } from 'redux-saga/effects';

import createApiSaga from 'utils/createApiSaga';
import { GET_EMPLOYEES, POST_EMPLOYEES } from '../actions';

function* getEmployeesSaga(action) {
  const companyId = action.payload;
  const getEmployees = yield createApiSaga(GET_EMPLOYEES, {
    path: `/company/${companyId}/users`,
    method: 'get',
  });

  yield getEmployees(action);
}

function* postEmployeeSaga(action) {
  const { companyId, employee } = action.payload;
  const createEmployee = yield createApiSaga(POST_EMPLOYEES, {
    path: `/company/${companyId}/users`,
    method: 'post',
    data: employee,
  });

  yield createEmployee(action);
}

export function* getEmployeesWatcher() {
  yield takeEvery(GET_EMPLOYEES, getEmployeesSaga);
}

export function* postEmployeeWatcher() {
  yield takeEvery(POST_EMPLOYEES, postEmployeeSaga);
}
