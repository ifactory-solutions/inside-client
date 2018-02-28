import _ from 'lodash';
import { GET_EMPLOYEES_SUCCESS, TOGGLE_LIST_MODE } from '../actions';

const defaultState = {
  showAsTable: false,
  employees: {},
  employee: {},
};

export const employeesReducer = (state = defaultState, action) => {
  if (!action) return state;

  switch (action.type) {
  case GET_EMPLOYEES_SUCCESS: {
    return {
      ...state,
      employees: _.mapKeys(action.response, 'id'),
    };
  }

  case TOGGLE_LIST_MODE: {
    return {
      ...state,
      showAsTable: !state.showAsTable,
    };
  }

  default: {
    return state;
  }
  }
};
