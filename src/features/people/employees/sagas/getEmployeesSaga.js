import createApiSaga from 'utils/createApiSaga';
import { GET_EMPLOYEES } from '../actions';

export function* getEmployeesSaga(action) {
  const companyId = action.payload;
  const getEmployees = yield createApiSaga(GET_EMPLOYEES, {
    path: `/company/${companyId}/users`,
    method: 'get',
  });

  yield getEmployees(action);
}
