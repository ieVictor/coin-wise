interface Coin {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export type CryptocurrencyBySearch = {
  coins: Array<Coin>;
  pagination: {
    total: number;
    pages: number;
    current: number;
  };
};
