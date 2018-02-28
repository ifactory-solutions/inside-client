import _ from 'lodash';
import {
  GET_COUNTRIES_SUCCESS,
  GET_STATES_SUCCESS,
  GET_CITIES_SUCCESS,
} from '../actions';

const defaultState = {
  countries: {},
  states: {},
  cities: {},
};

export const locationReducer = (state = defaultState, action) => {
  if (!action) return state;

  switch (action.type) {
  case GET_COUNTRIES_SUCCESS: {
    return {
      ...state,
      countries: _.mapKeys(action.response, 'id'),
    };
  }

  case GET_STATES_SUCCESS: {
    const countryId = action.payload.id;
    const statesList = action.response;

    return {
      ...state,
      states: {
        ...state.states,
        [countryId]: _.mapKeys(statesList, 'id'),
      },
    };
  }

  case GET_CITIES_SUCCESS: {
    const stateId = action.payload.id;
    const citiesList = action.response;

    return {
      ...state,
      cities: {
        ...state.cities,
        [stateId]: _.mapKeys(citiesList, 'id'),
      },
    };
  }

  default:
    return state;
  }
};
