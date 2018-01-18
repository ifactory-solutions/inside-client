export const USER_REQUEST_LOGIN = '[LOGIN] USER REQUEST LOGIN';
export const LOGIN_PROCESSING = '[LOGIN] LOGIN PROCESSING';
export const LOGIN_SUCCEEDED = '[LOGIN] LOGIN SUCEEDED';
export const LOGIN_ERROR = '[LOGIN] LOGIN ERROR';

export function userLoginRequestAction(userLoginCredentials) {
  return {
    type: USER_REQUEST_LOGIN,
    payload: userLoginCredentials,
  };
}

export function loginProcessingAction() {
  return {
    type: LOGIN_PROCESSING,
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
