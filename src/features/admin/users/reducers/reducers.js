import { GET_USER_ME_SUCCESS } from '../actions';

const defaultState = {
  currentCompany: {},
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
  case GET_USER_ME_SUCCESS: {
    const { companies } = action.response;
    const currentCompany = companies.length === 1 ? companies[0] : {};
    return {
      ...state,
      ...action.response,
      currentCompany,
    };
  }

  default: {
    return state;
  }
  }
};
