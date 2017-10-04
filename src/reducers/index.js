import { combineReducers } from 'redux';

import testReducer from './testReducer';

const rootReducer = combineReducers({
  testReducer,
});

export default rootReducer;
