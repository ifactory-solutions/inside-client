import {
  getActionNames,
  makeActionCreator,
} from 'utils/actionNames';

export const {
  GET_COMPANIES,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILS,
} = getActionNames(
  'get',
  'companies'
);

export const getCompanies = makeActionCreator(GET_COMPANIES);

export const getCompaniesSuccess =
makeActionCreator(GET_COMPANIES_SUCCESS, 'data');

export const getCompaniesFails =
makeActionCreator(GET_COMPANIES_FAILS, 'error');
