import createApiSaga from 'utils/createApiSaga';
import browserHistory from 'utils/browserHistory';
import { POST_EMPLOYEES } from '../actions';

export function* postEmployeeSaga(action) {
  const { companyId, employee } = action.data;
  const createEmployee = yield createApiSaga(POST_EMPLOYEES, {
    path: `/company/${companyId}/users`,
    method: 'post',
    data: employee,
  });

  const postAction = {
    ...action,
    data: employee,
  };

  yield createEmployee(postAction);
}

export function* postEmployeeSuccessSaga() {
  yield browserHistory.push('/employees');
}
