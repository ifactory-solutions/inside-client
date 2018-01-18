import {
  USER_REQUEST_LOGIN,
  LOGIN_PROCESSING,
  LOGIN_SUCCEEDED,
  userLoginRequestAction,
  loginProcessingAction,
  loginSucceedAction,
  LOGIN_ERROR,
  loginErrorAction,
} from './loginActions';

describe('test login action creators', () => {
  it('creates the "userLoginRequest" action', () => {
    const userCredentials = {
      email: 'francis@test.un',
      password: '$2a$04$RIiyaGeelKxwSqtzb05qHeY64efHhbMVVqBCuancRMjEfu9HLfGV6',
    };

    const action = {
      type: USER_REQUEST_LOGIN,
      payload: userCredentials,
    };

    const createdAction = userLoginRequestAction(userCredentials);

    expect(createdAction).toEqual(action);
  });

  it('creates the "loginProcessing action"', () => {
    const action = {
      type: LOGIN_PROCESSING,
    };

    const createdAction = loginProcessingAction();

    expect(createdAction).toEqual(action);
  });

  it('creates the "login succeed" action', () => {
    const userCredentials = {
      token: 'eyJhbGciOiJIUzI1NiI',
    };

    const action = {
      type: LOGIN_SUCCEEDED,
      payload: userCredentials,
    };

    const createdAction = loginSucceedAction(userCredentials);

    expect(createdAction).toEqual(action);
  });

  it('creates the "login error" action', () => {
    const error = {
      statusCode: 400,
      error: 'Bad Request',
      message: 'Email ou senha inválido. Tente novamente por favor.',
    };

    const action = {
      type: LOGIN_ERROR,
      payload: error,
    };

    const createdAction = loginErrorAction(error);

    expect(createdAction).toEqual(action);
  });
});
