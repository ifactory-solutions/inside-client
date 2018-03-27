import axios from 'axios';
import { hasToken, getToken } from './token';
import { COMPANY_ID, getValue } from './storageService';

axios.interceptors.request.use(config => {
  const settings = { ...config };
  const extras = {
    companyId: getValue(COMPANY_ID),
  };

  if (hasToken()) {
    settings.headers.common.Authorization = `Bearer ${getToken()}`;
  }

  settings.headers.common.Extras = JSON.stringify(extras);
  settings.headers.common.Accept = 'application/json';
  settings.headers.common['Content-Type'] = 'application/json';
  return settings;
});
