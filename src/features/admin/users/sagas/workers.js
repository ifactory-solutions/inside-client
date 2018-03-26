import createApiSaga from 'utils/createApiSaga';
import { GET_USER_ME } from '../actions';

export const getUsuarioMe = createApiSaga(GET_USER_ME, {
  path: '/users/me',
  method: 'get',
});
