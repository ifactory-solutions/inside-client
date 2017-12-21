import { combineReducers } from 'redux';

import testReducer from './testReducer';

// Components Reducers
import menu from '../components/sideMenu/reducer';

const rootReducer = combineReducers({
  testReducer,
  menu,
});

export default rootReducer;
