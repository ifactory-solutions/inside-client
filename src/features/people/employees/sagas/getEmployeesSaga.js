import { takeEvery } from 'redux-saga/effects';

import createApiSaga from 'utils/createApiSaga';
import { GET_EMPLOYEES } from '../actions';

function* getEmployeesSaga(action) {
  const companyId = action.payload;
  const getEmployees = yield createApiSaga(GET_EMPLOYEES, {
    path: `/company/${companyId}/users`,
    method: 'get',
  });

  yield getEmployees(action);
}

export function* getEmployeesSagaWatcher() {
  yield takeEvery(GET_EMPLOYEES, getEmployeesSaga);
}
