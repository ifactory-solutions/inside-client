import _ from 'lodash';
import {
  GET_COMPANIES_SUCCESS,
} from '../actions';

const defaultState = {
  companies: [],
};

export const companiesReducer = (state = defaultState, action) => {
  if (!action) return state;

  switch (action.type) {
  case GET_COMPANIES_SUCCESS: {
    return {
      ...state,
      companies: _.mapKeys(action.response, 'id'),
    };
  }

  default:
    return state;
  }
};
