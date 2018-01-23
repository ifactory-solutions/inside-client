// LOGIN SAGA ACTIONS
export const LOGIN_REQUEST = '[LOGIN] USER REQUEST LOGIN';
export const LOGIN_REQUEST_SUCCEEDED = '[LOGIN] LOGIN REQUEST SUCEEDED';
export const LOGIN_REQUEST_FAILS = '[LOGIN] LOGIN REQUEST FAILS';

// LOGIN REDUX ACTIONS
export const LOGIN_PROCESSING = '[LOGIN] LOGIN PROCESSING';
export const LOGIN_SUCCEEDED = '[LOGIN] LOGIN SUCEEDED';
export const LOGIN_ERROR = '[LOGIN] LOGIN ERROR';

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
