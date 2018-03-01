import { getActionNames } from 'utils/actionNames';

export const {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILS,
} = getActionNames('get', 'employees');

export const {
  POST_EMPLOYEES,
  POST_EMPLOYEES_SUCCESS,
  POST_EMPLOYEES_FAILS,
} = getActionNames('post', 'employees');

export const TOGGLE_LIST_MODE = '[EMPLOYEE] TOGGLE LIST MODE';
export const GO_PREVIOUS_STEP = '[EMPLOYEE] GO TO PREVIOUS STEP';
export const GO_NEXT_STEP = '[EMPLOYEE] GO TO NEXT STEP';
export const MOVE_TO_STEP = '[EMPLOYEE] MOVE TO STEP';

export const getEmployees = companyId => ({
  type: GET_EMPLOYEES,
  payload: companyId,
});

export const getEmployeesSuccess = result => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload: result,
});

export const getEmployeesFails = error => ({
  type: GET_EMPLOYEES_FAILS,
  payload: error,
});

export const postEmployees = employee => ({
  type: POST_EMPLOYEES,
  data: employee,
});

export const postEmployeesSuccess = result => ({
  type: POST_EMPLOYEES_SUCCESS,
  payload: result,
});

export const postEmployeesFails = error => ({
  type: POST_EMPLOYEES_FAILS,
  payload: error,
});

export const toggleListMode = () => ({
  type: TOGGLE_LIST_MODE,
});

export const goToPreviousStep = employee => ({
  type: GO_PREVIOUS_STEP,
  payload: employee,
});

export const goToNextStep = payload => ({
  type: GO_NEXT_STEP,
  payload,
});

export const moveToStep = payload => ({
  type: MOVE_TO_STEP,
  payload,
});
