import axios from 'axios';
import { /* take, */ call, put, select } from 'redux-saga/effects';
import {
  pageStartLoadingAction,
  pageStopLoadingAction,
} from '../layouts/actions/pageActions';

const BASE_URL = 'http://localhost:5000';

/**
 * create the api saga.
 * it will use axios, hit the api and return
 * the answer in the state data.
 *
 * @param  {string} actionString the action const name: FETCH_PRODUCT
 * @param  {Object} httpSpecParam the http data:
 * {path: "/products", method: "get"}
 * @return {}
 */
export default (actionString, httpSpecParam) =>
  function* apiSaga(action) {
    yield put(pageStartLoadingAction());

    let httpSpec = httpSpecParam;
    if (typeof httpSpecParam === 'function') {
      const currentState = yield select();
      httpSpec = httpSpecParam(action, currentState);
    }

    try {
      const response = yield call(axios, {
        url: `${BASE_URL}${httpSpec.path}`,
        method: httpSpec.method || 'GET',
        data: action.data,
        params: action.params,
        validateStatus: status => status > 0 && status <= 500,
      });

      if (response.status >= 200 && response.status < 300) {
        yield put({
          type: `${actionString}/done`,
          response: response.data,
          payload: action,
        });
      } else {
        yield put({
          type: `${actionString}/fail`,
          response: response.data,
          payload: action,
        });
      }
      // stop loading
      yield put(pageStopLoadingAction());
    } catch (error) {
      // stop loading
      yield put(pageStopLoadingAction());
      yield put({
        type: `${actionString}/fail`,
        response: error,
        payload: action,
      });
    }
  };
