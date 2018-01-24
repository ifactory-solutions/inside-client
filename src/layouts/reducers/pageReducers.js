import { PAGE_START_LOADING, PAGE_STOP_LOADING } from '../actions/pageActions';

export function pageReducer(state = {}, action) {
  if (!action) return state;

  switch (action.type) {
  case PAGE_START_LOADING: {
    return {
      ...state,
      loading: true,
    };
  }

  case PAGE_STOP_LOADING: {
    return {
      ...state,
      loading: false,
    };
  }

  default:
    return state;
  }
}
