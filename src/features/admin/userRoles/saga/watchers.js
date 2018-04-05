import { makeSagaWatcher } from 'utils/saga';

import {
  getUserRolesWorker,
  getUserRoleWorker,
  putUserRoleWorker,
  putUserRoleSuccessWorker,
  putUserRoleFailsWorker,
} from './workers';

import {
  GET_USER_ROLES,
  GET_USER_ROLE,
  PUT_USER_ROLES,
  PUT_USER_ROLES_SUCCESS,
  PUT_USER_ROLES_FAILS,
} from '../actions';

export const getUserRolesWatcher = makeSagaWatcher(
  GET_USER_ROLES,
  getUserRolesWorker
);
export const getUserRoleWatcher = makeSagaWatcher(
  GET_USER_ROLE,
  getUserRoleWorker
);
export const putUserRoleWatcher = makeSagaWatcher(
  PUT_USER_ROLES,
  putUserRoleWorker
);
export const putUserRoleSuccessWatcher = makeSagaWatcher(
  PUT_USER_ROLES_SUCCESS,
  putUserRoleSuccessWorker
);
export const putUserRoleFailsWatcher = makeSagaWatcher(
  PUT_USER_ROLES_FAILS,
  putUserRoleFailsWorker
);
