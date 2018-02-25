import axios from 'axios';
import { hasToken, getToken } from './token';

axios.interceptors.request.use(config => {
  const settings = { ...config };
  if (hasToken()) {
    settings.headers.common.Authorization = `Bearer ${getToken()}`;
  }

  settings.headers.common.Accept = 'application/json';
  settings.headers.common['Content-Type'] = 'application/json';
  return settings;
});
