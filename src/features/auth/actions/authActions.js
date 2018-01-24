// LOGIN SAGA ACTIONS
export const LOGIN_REQUEST = '[AUTH] USER REQUEST LOGIN';
export const LOGIN_REQUEST_SUCCEEDED = '[AUTH] LOGIN REQUEST SUCEEDED';
export const LOGIN_REQUEST_FAILS = '[AUTH] LOGIN REQUEST FAILS';
export const LOGOUT_REQUEST = '[AUTH] LOGOUT REQUEST';

// LOGIN REDUX ACTIONS
export const LOGIN_SUCCEEDED = '[AUTH] LOGIN SUCEEDED';
export const LOGIN_ERROR = '[AUTH] LOGIN ERROR';
export const LOGOUT_SUCCEEDED = '[AUTH] LOGOUT SUCCEEDED';

export function loginRequestAction(userLoginCredentials) {
  return {
    type: LOGIN_REQUEST,
    payload: userLoginCredentials,
  };
}

export function loginRequestSucceededAction(result) {
  return {
    type: LOGIN_REQUEST_SUCCEEDED,
    payload: result,
  };
}

export function loginRequestFailsAction(error) {
  return {
    type: LOGIN_REQUEST_FAILS,
    payload: error,
  };
}

export function loginSucceedAction(credentials) {
  return {
    type: LOGIN_SUCCEEDED,
    payload: credentials,
  };
}

export function loginErrorAction(error) {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
}

export function logoutRequestAction() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function logoutSucceededAction() {
  return {
    type: LOGOUT_SUCCEEDED,
  };
}
