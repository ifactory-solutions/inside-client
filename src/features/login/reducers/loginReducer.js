import {
  LOGIN_SUCCEEDED,
  LOGIN_ERROR,
  LOGIN_PROCESSING,
} from '../actions/loginActions';

export default function loginReducer(state = {}, action) {
  if (!action) return state;

  switch (action.type) {
  case LOGIN_PROCESSING: {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }

  case LOGIN_SUCCEEDED: {
    const { token } = action.payload;
    const error = null;

    return {
      ...state,
      loading: false,
      loaded: true,
      token,
      error,
    };
  }

  case LOGIN_ERROR: {
    const token = null;
    const error = action.payload;

    return {
      ...state,
      loading: false,
      loaded: false,
      token,
      error,
    };
  }

  default:
    return state;
  }
}
