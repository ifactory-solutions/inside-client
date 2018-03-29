import { makeSagaWatcher } from 'utils/saga';

import {
  getCompaniesWorker,
} from './workers';

import {
  GET_COMPANIES,
} from '../actions';

export const getCompaniesWatcher =
makeSagaWatcher(GET_COMPANIES, getCompaniesWorker);
