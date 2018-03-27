import { GET_CLIENTS_SUCCESS } from '../actions';

const defaultState = {
  clients: [],
};

export const clientsReducer = (state = defaultState, action) => {
  if (!action) return state;

  switch (action.type) {
  case GET_CLIENTS_SUCCESS:
    return {
      ...state,
      clients: action.response,
    };
  default:
    return state;
  }
};
