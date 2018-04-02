import { message } from 'antd';
import browserHistory from 'utils/browserHistory';
import createApiSaga from 'utils/createApiSaga';

import { GET_USER_ROLES, GET_USER_ROLE, PUT_USER_ROLES } from '../actions';

export const getUserRolesWorker = createApiSaga(GET_USER_ROLES, {
  path: '/users',
  mathod: 'get',
});

export const getUserRoleWorker = createApiSaga(GET_USER_ROLE, {
  path: '/users/me',
  method: 'get',
});

export const putUserRoleWorker = createApiSaga(PUT_USER_ROLES, {
  path: '/users',
  method: 'put',
});

export const putUserRoleSuccessWorker = function* putUserRoleFails() {
  browserHistory.push('/permissions');
  yield message.error('Permissões salvas com sucesso');
};

export const putUserRoleFailsWorker = function* putUserRoleFails() {
  yield message.error('Não foi possível salvar as permissões');
};
