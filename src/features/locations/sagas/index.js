import { takeEvery } from 'redux-saga/effects';
import createApiSaga from 'utils/createApiSaga';

import { GET_COUNTRIES, GET_STATES, GET_CITIES } from '../actions';

const getCountriesSaga = createApiSaga(GET_COUNTRIES, {
  path: 'locations/countries',
  method: 'get',
});

function* getStatesSaga(action) {
  const countryId = action.payload.id;
  const getStates = yield createApiSaga(GET_STATES, {
    path: `location/countries/${countryId}/states`,
    method: 'get',
  });

  yield getStates(action);
}

function* getCitiesSaga(action) {
  const stateId = action.payload.id;
  const getCities = yield createApiSaga(GET_STATES, {
    path: `location/states/${stateId}/cities`,
    method: 'get',
  });

  yield getCities(action);
}

export function* getCountriesWatcher() {
  yield takeEvery(GET_COUNTRIES, getCountriesSaga);
}

export function* getStatesWatcher() {
  yield takeEvery(GET_STATES, getStatesSaga);
}

export function* getCitiesWatcher() {
  yield takeEvery(GET_CITIES, getCitiesSaga);
}
