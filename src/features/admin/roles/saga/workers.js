import { message } from 'antd';
import browserHistory from 'utils/browserHistory';
import createApiSaga from 'utils/createApiSaga';

import {
  GET_ROLES,
  GET_ROLE,
  POST_ROLES,
  PUT_ROLES,
  DELETE_ROLES,
} from '../actions';

export const getRolesWorker = createApiSaga(GET_ROLES, {
  path: '/roles',
  method: 'get',
});

export const getRoleWorker = function* getRole(action) {
  const id = action.payload;
  const getRoleGen = yield createApiSaga(GET_ROLE, {
    path: `/roles/${id}`,
    method: 'get',
  });

  yield getRoleGen(action);
};

export const postRoleWorker = createApiSaga(POST_ROLES, {
  path: '/roles',
  method: 'post',
});

export const postRoleSuccessWorker = function* postRoleSuccess() {
  message.success('Perfil salvo com sucesso');
  yield browserHistory.push('/roles');
};

export const postRoleFailsWorker = function* postRoleFails() {
  yield message.error('Não foi possível salvar o perfil');
};

export const putRoleWorker = function* putRole(action) {
  const id = action.payload;
  const putRoleGen = yield createApiSaga(PUT_ROLES, {
    path: `/roles/${id}`,
    method: 'put',
  });

  yield putRoleGen(action);
};

export const putRoleSuccessWorker = function* putRoleSuccess() {
  message.success('Perfil salvo com sucesso');
  yield browserHistory.push('/roles');
};

export const putRoleFailsWorker = function* putRoleFails() {
  yield message.error('Não foi possível salvar o perfil');
};

export const deleteRoleWorker = function* deleteRole(action) {
  const id = action.payload;
  const deleteRoleGen = yield createApiSaga(DELETE_ROLES, {
    path: `/roles/${id}`,
    method: 'delete',
  });

  yield deleteRoleGen(action);
};

export const deleteRoleSuccessWorker = function* deleteRoleSuccess() {
  message.success('Perfil removido com sucesso');
  yield browserHistory.push('/roles');
};

export const deleteRoleFailsWorker = function* deleteRoleFails() {
  yield message.error('Não foi possível remover o perfil');
};
