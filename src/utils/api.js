import axios from 'axios';

const BASE_URL = 'http://10.1.2.35:5000';
const headerSettings = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export function doLogin(userData) {
  const URL = `${BASE_URL}/login`;
  return axios
    .post(URL, userData, headerSettings)
    .then(response => response.data)
    .catch(error => {
      throw error.response.data;
    });
}
