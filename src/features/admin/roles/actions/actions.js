import {
  getActionNames,
  makeActionCreator,
  makeDataActionCreator,
} from 'utils/actionNames';

export const { GET_ROLES, GET_ROLES_SUCCESS, GET_ROLES_FAILS } = getActionNames(
  'get',
  'roles'
);

export const { GET_ROLE, GET_ROLE_SUCCESS, GET_ROLE_FAILS } = getActionNames(
  'get',
  'role'
);

export const {
  POST_ROLES,
  POST_ROLES_SUCCESS,
  POST_ROLES_FAILS,
} = getActionNames('post', 'roles');

export const { PUT_ROLES, PUT_ROLES_SUCCESS, PUT_ROLES_FAILS } = getActionNames(
  'put',
  'roles'
);

export const {
  DELETE_ROLES,
  DELETE_ROLES_SUCCESS,
  DELETE_ROLES_FAILS,
} = getActionNames('delete', 'roles');

export const getRoles = makeActionCreator(GET_ROLES);
export const getRolesSuccess = makeActionCreator(GET_ROLES_SUCCESS, 'data');
export const getRolesFails = makeActionCreator(GET_ROLES_FAILS, 'error');

export const getRole = makeActionCreator(GET_ROLE, 'id');
export const getRoleSuccess = makeActionCreator(GET_ROLE_SUCCESS, 'data');
export const getRoleFails = makeActionCreator(GET_ROLE_FAILS, 'error');

export const postRoles = makeDataActionCreator(POST_ROLES);
export const postRolesSuccess = makeActionCreator(POST_ROLES_SUCCESS, 'data');
export const postRolesFails = makeActionCreator(POST_ROLES_FAILS, 'error');

export const putRoles = makeDataActionCreator(PUT_ROLES);
export const putRolesSuccess = makeActionCreator(PUT_ROLES_SUCCESS, 'data');
export const putRolesFails = makeActionCreator(PUT_ROLES_FAILS, 'error');

export const deleteRoles = makeActionCreator(DELETE_ROLES, 'id');
export const deleteRolesFails = makeActionCreator(DELETE_ROLES_FAILS, 'error');
export const deleteRolesSuccess = makeActionCreator(
  DELETE_ROLES_SUCCESS,
  'data'
);
