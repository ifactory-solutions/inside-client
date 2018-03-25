import { combineReducers } from 'redux';

import testReducer from './testReducer';

import { pageReducer } from '../layouts/reducers/pageReducers';
import authReducer from '../features/auth/reducers/authReducer';
import { projectsReducer } from '../features/projects/reducers';
import { employeesReducer } from '../features/people/employees/reducers';
import { locationReducer } from '../features/locations/reducers';
import { roleReducer } from '../features/admin/roles/reducers';

// Components Reducers
import menu from '../components/sideMenu/reducer';

const rootReducer = combineReducers({
  testReducer,
  menu,

  page: pageReducer,
  login: authReducer,
  projects: projectsReducer,
  locations: locationReducer,
  employees: employeesReducer,
  roles: roleReducer,
});

export default rootReducer;
