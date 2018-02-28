import { getActionNames } from 'utils/actionNames';

export const {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILS,
} = getActionNames('get', 'countries');

export const {
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAILS,
} = getActionNames('get', 'states');

export const {
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILS,
} = getActionNames('get', 'cities');

export const getCountries = () => ({
  type: GET_COUNTRIES,
});

export const getCountriesSuccess = result => ({
  type: GET_COUNTRIES_SUCCESS,
  payload: result,
});

export const getCountriesFails = error => ({
  type: GET_COUNTRIES_FAILS,
  payload: error,
});

export const getStates = country => ({
  type: GET_STATES,
  payload: country,
});

export const getStatesSuccess = result => ({
  type: GET_STATES_SUCCESS,
  payload: result,
});

export const getStatesFails = error => ({
  type: GET_STATES_FAILS,
  payload: error,
});

export const getCities = state => ({
  type: GET_CITIES,
  payload: state,
});

export const getCitiesSuccess = result => ({
  type: GET_CITIES_SUCCESS,
  payload: result,
});

export const getCitiesFails = error => ({
  type: GET_CITIES_FAILS,
  payload: error,
});
