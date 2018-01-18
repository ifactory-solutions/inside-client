import { combineReducers } from 'redux';

import testReducer from './testReducer';

import loginReducer from '../features/login/reducers/loginReducer';

// Components Reducers
import menu from '../components/sideMenu/reducer';

const rootReducer = combineReducers({
  testReducer,
  menu,

  auth: loginReducer,
});

export default rootReducer;
