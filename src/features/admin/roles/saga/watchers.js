import { makeSagaWatcher } from 'utils/saga';

import {
  getRolesWorker,
  getRoleWorker,
  postRoleWorker,
  postRoleSuccessWorker,
  postRoleFailsWorker,
  putRoleWorker,
  putRoleSuccessWorker,
  putRoleFailsWorker,
  deleteRoleWorker,
  deleteRoleSuccessWorker,
  deleteRoleFailsWorker,
  getPermissionsWorker,
} from './workers';

import {
  GET_ROLES,
  GET_ROLE,
  POST_ROLES,
  POST_ROLES_SUCCESS,
  POST_ROLES_FAILS,
  PUT_ROLES,
  PUT_ROLES_SUCCESS,
  PUT_ROLES_FAILS,
  DELETE_ROLES,
  DELETE_ROLES_SUCCESS,
  DELETE_ROLES_FAILS,
  GET_PERMISSIONS,
} from '../actions';

export const getRolesWatcher = makeSagaWatcher(GET_ROLES, getRolesWorker);
export const getRoleWatcher = makeSagaWatcher(GET_ROLE, getRoleWorker);

export const postRoleWatcher = makeSagaWatcher(POST_ROLES, postRoleWorker);
export const postRoleSuccessWatcher = makeSagaWatcher(
  POST_ROLES_SUCCESS,
  postRoleSuccessWorker
);
export const postRoleFailsWatcher = makeSagaWatcher(
  POST_ROLES_FAILS,
  postRoleFailsWorker
);

export const putRoleWatcher = makeSagaWatcher(PUT_ROLES, putRoleWorker);
export const putRoleSuccessWatcher = makeSagaWatcher(
  PUT_ROLES_SUCCESS,
  putRoleSuccessWorker
);
export const putRoleFailsWatcher = makeSagaWatcher(
  PUT_ROLES_FAILS,
  putRoleFailsWorker
);

export const deleteRoleWatcher = makeSagaWatcher(
  DELETE_ROLES,
  deleteRoleWorker
);
export const deleteRoleSuccessWatcher = makeSagaWatcher(
  DELETE_ROLES_SUCCESS,
  deleteRoleSuccessWorker
);
export const deleteRoleFailsWatcher = makeSagaWatcher(
  DELETE_ROLES_FAILS,
  deleteRoleFailsWorker
);

export const getPermissionsWatcher = makeSagaWatcher(
  GET_PERMISSIONS,
  getPermissionsWorker
);
