import { combineReducers } from 'redux';
import { clientsReducer } from '../features/clients/reducers';
import { pageReducer } from '../layouts/reducers/pageReducers';
import { projectsReducer } from '../features/projects/reducers';
import { employeesReducer } from '../features/people/employees/reducers';
import { locationReducer } from '../features/locations/reducers';
import { roleReducer } from '../features/admin/roles/reducers';
import { userReducer } from '../features/admin/users/reducers';
import { companiesReducer } from '../features/admin/companies/reducers';
import { userRolesReducer } from '../features/admin/userRoles/reducers';
import authReducer from '../features/auth/reducers/authReducer';
import menu from '../components/sideMenu/reducer';

const rootReducer = combineReducers({
  menu,
  page: pageReducer,
  login: authReducer,
  clients: clientsReducer,
  projects: projectsReducer,
  locations: locationReducer,
  employees: employeesReducer,
  roles: roleReducer,
  loggedUser: userReducer,
  companies: companiesReducer,
  userRoles: userRolesReducer,
});

export default rootReducer;
