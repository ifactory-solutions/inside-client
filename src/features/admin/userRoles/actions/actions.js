import {
  getActionNames,
  makeActionCreator,
  makeDataActionCreator,
} from 'utils/actionNames';

// get users from companies
export const {
  GET_USER_ROLES,
  GET_USER_ROLES_SUCCESS,
  GET_USER_ROLES_FAILS,
} = getActionNames('get', 'user_roles');

// get an user from company
export const {
  GET_USER_ROLE,
  GET_USER_ROLE_SUCCESS,
  GET_USER_ROLE_FAILS,
} = getActionNames('get', 'user_role');

export const {
  PUT_USER_ROLES,
  PUT_USER_ROLES_SUCCESS,
  PUT_USER_ROLES_FAILS,
} = getActionNames('put', 'user_roles');

export const getUserRoles = makeActionCreator(GET_USER_ROLES);
export const getUserRolesSuccess = makeActionCreator(
  GET_USER_ROLES_SUCCESS,
  'data'
);
export const getUserRolesFails = makeActionCreator(
  GET_USER_ROLES_FAILS,
  'error'
);

export const getUserRole = makeActionCreator(GET_USER_ROLE);
export const getUserRoleSuccess = makeActionCreator(
  GET_USER_ROLE_SUCCESS,
  'data'
);

export const putUserRoles = makeDataActionCreator(PUT_USER_ROLES);
export const putUserRolesSuccess = makeActionCreator(
  PUT_USER_ROLES_SUCCESS,
  'data'
);
export const putUserRolesFails = makeActionCreator(
  PUT_USER_ROLES_FAILS,
  'error'
);
