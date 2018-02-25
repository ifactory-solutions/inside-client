import { combineReducers } from 'redux';

import testReducer from './testReducer';

import { pageReducer } from '../layouts/reducers/pageReducers';
import authReducer from '../features/auth/reducers/authReducer';
import { employeesReducer } from '../features/people/employees/reducers';
// Components Reducers
import menu from '../components/sideMenu/reducer';

const rootReducer = combineReducers({
  testReducer,
  menu,

  page: pageReducer,
  login: authReducer,
  employees: employeesReducer,
});

export default rootReducer;
