import _ from 'lodash';
import {
  GET_ROLES_SUCCESS,
  POST_ROLES_SUCCESS,
  PUT_ROLES_SUCCESS,
  DELETE_ROLES_SUCCESS,
  GET_ROLE_SUCCESS,
} from '../actions';

const defaultState = {
  roles: {},
  role: {},
};

export const roleReducer = (state = defaultState, action) => {
  if (!action) return state;

  switch (action.type) {
  case GET_ROLES_SUCCESS: {
    return {
      ...state,
      roles: _.mapKeys(action.response, 'id'),
    };
  }

  case GET_ROLE_SUCCESS: {
    const role = action.response;
    const roles = {
      ...state.roles,
      [role.id]: role,
    };

    return {
      ...state,
      role,
      roles,
    };
  }

  case POST_ROLES_SUCCESS: {
    const roles = {
      ...state.roles,
      [action.response.id]: action.response,
    };

    return {
      ...state,
      roles,
      role: {},
    };
  }

  case PUT_ROLES_SUCCESS: {
    const role = action.payload.data;
    const roles = {
      ...state.roles,
      [role.id]: role,
    };

    return {
      ...state,
      roles,
      role: {},
    };
  }

  case DELETE_ROLES_SUCCESS: {
    const roleId = action.payload.payload;
    const roles = _.omit(state.roles, [roleId]);

    return {
      ...state,
      roles,
    };
  }

  default:
    return state;
  }
};
