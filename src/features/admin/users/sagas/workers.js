import createApiSaga from 'utils/createApiSaga';
import { COMPANY_ID, storeValue } from '../../../../utils/storageService';
import { GET_USER_ME } from '../actions';

export const getUsuarioMe = createApiSaga(GET_USER_ME, {
  path: '/users/me',
  method: 'get',
});

export const getUserMeSuccess = function* getUserMeSuccess(action) {
  const { companies } = action.response;
  const companyId = companies.length === 1 ? companies[0].id : undefined;

  yield storeValue(COMPANY_ID, companyId);
};
