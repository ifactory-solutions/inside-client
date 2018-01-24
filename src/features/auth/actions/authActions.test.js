import {
  LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  loginRequestAction,
  loginSucceedAction,
  LOGIN_ERROR,
  loginErrorAction,
} from './authActions';

describe('test login action creators', () => {
  it('creates the "userLoginRequest" action', () => {
    const userCredentials = {
      email: 'francis@test.un',
      password: '$2a$04$RIiyaGeelKxwSqtzb05qHeY64efHhbMVVqBCuancRMjEfu9HLfGV6',
    };

    const action = {
      type: LOGIN_REQUEST,
      payload: userCredentials,
    };

    const createdAction = loginRequestAction(userCredentials);

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
