import _ from 'lodash';
import {
  GET_EMPLOYEES_SUCCESS,
  TOGGLE_LIST_MODE,
  GO_NEXT_STEP,
  GO_PREVIOUS_STEP,
  MOVE_TO_STEP,
  POST_EMPLOYEES_SUCCESS,
} from '../actions';

const defaultState = {
  showAsTable: false,
  currentStep: 0,
  employees: {},
  employee: {
    personalInfo: {
      gender: 'masculino',
      maritalStatus: 'solteiro',
    },
    address: {},
    contacts: {},
    documentation: {},
    bankAccount: {},
  },
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

  case POST_EMPLOYEES_SUCCESS: {
    return {
      ...state,
      employee: defaultState,
    };
  }

  case TOGGLE_LIST_MODE: {
    return {
      ...state,
      showAsTable: !state.showAsTable,
    };
  }

  case GO_NEXT_STEP: {
    return {
      ...state,
      currentStep: state.currentStep + 1,
      employee: action.payload,
    };
  }

  case GO_PREVIOUS_STEP: {
    return {
      ...state,
      currentStep: state.currentStep - 1,
      employee: action.payload,
    };
  }

  case MOVE_TO_STEP: {
    return {
      ...state,
      currentStep: action.payload.currentStep,
      employee: action.payload.employee,
    };
  }

  default: {
    return state;
  }
  }
};
