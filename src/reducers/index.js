import { combineReducers } from 'redux';

import testReducer from './testReducer';

import { pageReducer } from '../layouts/reducers/pageReducers';
import authReducer from '../features/auth/reducers/authReducer';

// Components Reducers
import menu from '../components/sideMenu/reducer';

const rootReducer = combineReducers({
  testReducer,
  menu,

  page: pageReducer,
  login: authReducer,
});

export default rootReducer;
