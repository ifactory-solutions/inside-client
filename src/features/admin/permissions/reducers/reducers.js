import _ from 'lodash';
import {
  GET_USER_ROLES_SUCCESS,
  GET_USER_ROLE_SUCCESS,
  PUT_USER_ROLES_SUCCESS,
} from '../actions';

const defaultState = {
  roles: {},
  user: {},
  users: {},
};

export const userRolesReducer = (state = defaultState, action) => {
  if (!action) return state;

  switch (action.type) {
  case GET_USER_ROLES_SUCCESS: {
    return {
      ...state,
      users: _.mapKeys(action.response, 'id'),
    };
  }

  case GET_USER_ROLE_SUCCESS: {
    const { users } = state;
    const user = action.response;
    return {
      ...state,
      users: {
        ...users,
        [user.id]: user,
      },
      user,
    };
  }

  case PUT_USER_ROLES_SUCCESS: {
    const user = action.payload.data;
    const users = {
      ...state.users,
      [user.id]: user,
    };

    return {
      ...state,
      user: {},
      users,
    };
  }

  default: {
    return state;
  }
  }
};
