const LENS_TOKEN_KEY = 'lens/token';
const LENS_TOKEN_EXPIRES = 'lens/expires';

/**
 * set the token with an expiration date
 *
 * @param {String} tokenString
 * @param {Long} expiresAt
 */
export function setToken(tokenString, expiresAt) {
  localStorage.setItem(LENS_TOKEN_KEY, tokenString);
  localStorage
    .setItem(LENS_TOKEN_EXPIRES, String(expiresAt + new Date().getDate()));
}

/**
 * get the token
 *
 * @return {String}
 */
export function getToken() {
  return localStorage.getItem(LENS_TOKEN_KEY) || '';
}

/**
 * check whether has the token or not
 *
 * @return {Boolean}
 */
export function hasToken() {
  const tokenString = !!localStorage.getItem(LENS_TOKEN_KEY);
  const expiresAt = localStorage.getItem(LENS_TOKEN_EXPIRES);

  if (tokenString && !expiresAt) {
    return true;
  }

  return tokenString && (new Date().getDate() < expiresAt);
}

/**
 * remove the token
 *
 * @return {}
 */
export function dropToken() {
  localStorage.removeItem(LENS_TOKEN_KEY);
  localStorage.removeItem(LENS_TOKEN_EXPIRES);
}
