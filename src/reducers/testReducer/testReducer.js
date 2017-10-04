import { createAction, handleActions } from 'redux-actions';

export const actionTypes = {
  REQUEST: 'inside_client/test/REDUX_WORKING',
};

const doTestRequest = createAction(actionTypes.REQUEST);

const defaultState = {
  isReduxOn: false,
};

const testReducer = handleActions({
  [actionTypes.REQUEST](state) {
    return {
      ...state,
      isReduxOn: true,
    };
  },
}, defaultState);

export const doTest = () => doTestRequest();

export default testReducer;
