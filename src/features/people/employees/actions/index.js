import { getActionNames } from 'utils/actionNames';

const actionNames = getActionNames('get', 'employees');
export const GET_EMPLOYEES = actionNames.action;
export const GET_EMPLOYEES_SUCCESS = actionNames.success;
export const GET_EMPLOYEES_FAILS = actionNames.fail;

export const TOGGLE_LIST_MODE = 'TOGGLE LIST MODE';

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

export const toggleListMode = () => ({
  type: TOGGLE_LIST_MODE,
});
