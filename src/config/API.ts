export const apiUrl = {
  COIN_BY_ID: "https://api.coingecko.com/api/v3/coins",
  COIN_BY_SEARCH: "https://api.coingecko.com/api/v3/search",
  COINS_LIST: "https://api.coingecko.com/api/v3/coins/markets",
};

export const headers: RequestInit["headers"] = {
  accept: "application/json",
  "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
};
