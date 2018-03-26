import { getActionNames, makeActionCreator } from 'utils/actionNames';

export const {
  GET_USER_ME,
  GET_USER_ME_SUCCESS,
  GET_USER_ME_FAILS,
} = getActionNames('get', 'user_me');

export const getUserMe = makeActionCreator(GET_USER_ME);
export const getUserMeSuccess = makeActionCreator(GET_USER_ME_SUCCESS, 'data');
export const getUserMeFails = makeActionCreator(GET_USER_ME_FAILS, 'error');
