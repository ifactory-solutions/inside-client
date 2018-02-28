import { getActionNames } from 'utils/actionNames';

export const {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILS,
} = getActionNames('get', 'employees');

export const TOGGLE_LIST_MODE = '[EMPLOYEE] TOGGLE LIST MODE';

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
