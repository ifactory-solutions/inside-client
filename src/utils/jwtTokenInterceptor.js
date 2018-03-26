import axios from 'axios';
import { hasToken, getToken } from './token';
import { store } from '../utils/store';

axios.interceptors.request.use(config => {
  const settings = { ...config };
  const { users } = store.getState();
  const extras = {
    companyId: users.currentCompany.id,
  };

  if (hasToken()) {
    settings.headers.common.Authorization = `Bearer ${getToken()}`;
    settings.headers.common.Extras = JSON.stringify(extras);
  }
  settings.headers.common.Accept = 'application/json';
  settings.headers.common['Content-Type'] = 'application/json';
  return settings;
});
