export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const apiUrl = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  REFRESH_TOKEN: `${API_BASE_URL}/auth/refresh`,
  AUTH_CHECK: `${API_BASE_URL}/auth/check`,
  COIN_BY_ID: `${API_BASE_URL}/coins`,
  COIN_BY_SEARCH: `${API_BASE_URL}/coins`,
  COINS_LIST: `${API_BASE_URL}/coins`,
  ADD_COIN: `${API_BASE_URL}/coins`,
};

export const headers: RequestInit['headers'] = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'x-cg-demo-api-key': import.meta.env.VITE_API_KEY,
};
