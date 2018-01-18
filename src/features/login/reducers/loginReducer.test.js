import loginReducer from './loginReducer';
import {
  loginProcessingAction,
  loginSucceedAction,
  loginErrorAction,
} from '../actions/loginActions';

describe('test login reducer', () => {
  it('test with an undefined state', () => {
    const state = undefined;
    const action = loginProcessingAction();

    const newState = loginReducer(state, action);
    const expectedState = { loading: true, loaded: false };

    expect(newState).toEqual(expectedState);
  });

  it('test with undefined state and action', () => {
    const state = loginReducer(undefined, undefined);
    expect(state).toEqual({});
  });

  it('test an invalid action in a valid state', () => {
    const state = {
      loading: true,
      loaded: false,
    };

    const newState = loginReducer(state, undefined);

    expect(newState).toEqual(state);
  });

  it('test login processing state', () => {
    const state = {};
    const processingAction = loginProcessingAction();

    const newState = loginReducer(state, processingAction);
    const expectedState = {
      loading: true,
      loaded: false,
    };

    expect(newState).toEqual(expectedState);
  });

  it('test login success state', () => {
    const state = {
      loading: true,
      loaded: false,
    };

    const auth = {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    };

    const action = loginSucceedAction(auth);
    const newState = loginReducer(state, action);
    const expectedState = {
      loading: false,
      loaded: true,
      token: auth.token,
      error: null,
    };

    expect(newState).toEqual(expectedState);
  });

  it('test login error state', () => {
    const state = {
      loading: true,
      loaded: false,
    };

    const error = {
      statusCode: 400,
      error: 'Bad Request',
      message: 'Email ou senha inválido. Tente novamente por favor.',
    };

    const action = loginErrorAction(error);

    const newState = loginReducer(state, action);
    const expectedState = {
      loading: false,
      loaded: false,
      token: null,
      error,
    };

    expect(newState).toEqual(expectedState);
  });
});
