import {
  LOGIN_SUCCEEDED,
  LOGIN_ERROR,
  LOGOUT_SUCCEEDED,
} from '../actions/authActions';

export default function authReducer(state = {}, action) {
  if (!action) return state;

  switch (action.type) {
  case LOGIN_SUCCEEDED: {
    const { token } = action.payload;
    const error = null;

    return {
      ...state,
      token,
      error,
    };
  }

  case LOGIN_ERROR: {
    const token = null;
    const error = action.payload;

    return {
      ...state,
      token,
      error,
    };
  }

  case LOGOUT_SUCCEEDED: {
    return {
      ...state,
      token: null,
      error: null,
    };
  }

  default:
    return state;
  }
}
