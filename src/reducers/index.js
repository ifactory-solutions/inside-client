import { combineReducers } from 'redux';

import testReducer from './testReducer';

import { clientsReducer } from '../features/clients/reducers';
import { pageReducer } from '../layouts/reducers/pageReducers';
import authReducer from '../features/auth/reducers/authReducer';
import { projectsReducer } from '../features/projects/reducers';
import { employeesReducer } from '../features/people/employees/reducers';
import { locationReducer } from '../features/locations/reducers';
import { roleReducer } from '../features/admin/roles/reducers';
import { userReducer } from '../features/admin/users/reducers';
// Components Reducers
import menu from '../components/sideMenu/reducer';

const rootReducer = combineReducers({
  testReducer,
  menu,

  page: pageReducer,
  login: authReducer,
  clients: clientsReducer,
  projects: projectsReducer,
  locations: locationReducer,
  employees: employeesReducer,
  roles: roleReducer,
  loggedUser: userReducer,
});

export default rootReducer;
