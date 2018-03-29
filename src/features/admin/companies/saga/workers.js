import createApiSaga from 'utils/createApiSaga';

import {
  GET_COMPANIES,
} from '../actions';

export const getCompaniesWorker = createApiSaga(GET_COMPANIES, {
  path: '/companies',
  method: 'get',
});
