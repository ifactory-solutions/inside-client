import _ from 'lodash';
import { GET_USER_ME_SUCCESS } from '../actions';

const defaultState = {
  currentCompany: {},
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
  case GET_USER_ME_SUCCESS: {
    const { companies, roles } = action.response;

    const permissions = _.chain(roles)
      .flatMap(role => role.permissions)
      .unionBy('id')
      .value();

    const currentCompany = companies.length === 1 ? companies[0] : {};

    return {
      ...state,
      ...action.response,
      currentCompany,
      permissions,
    };
  }

  default: {
    return state;
  }
  }
};
