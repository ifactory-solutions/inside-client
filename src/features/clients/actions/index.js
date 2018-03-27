import { getActionNames } from 'utils/actionNames';

export const {
  GET_CLIENTS,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAILS,
} = getActionNames('get', 'clients');

export const getClients = companyId => ({
  type: GET_CLIENTS,
  payload: companyId,
});

export const getClientsSuccess = result => ({
  type: GET_CLIENTS_SUCCESS,
  payload: result,
});

export const getClientsFails = error => ({
  type: GET_CLIENTS_FAILS,
  payload: error,
});
