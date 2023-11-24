import { TTooken } from '../types/token';

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

function getToken() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
}

function saveToken(token: TTooken) {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
}

function dropToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
}

export { getToken, saveToken, dropToken };
