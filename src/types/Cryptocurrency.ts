export type CoinsPagination = {
  coins: Array<Cryptocurrency>;
  pagination: {
    total: number;
    pages: number;
    current: number;
  };
};

export type Cryptocurrency = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string; // ISO date string
  atl: number;
  atl_change_percentage: number;
  atl_date: string; // ISO date string
  roi: null; // ROI field is explicitly null in the provided data
  last_updated: string; // ISO date string
};

export type Cryptocurrency_Add_Inputs = {
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  atl: number;
};

export type Cryptocurrency_Add_Codes =
  | 'VALIDATION_ERROR'
  | 'SUCCESS'
  | 'UNKNOWN_ERROR';

export type Cryptocurrency_Add_Response = {
  success: boolean;
  message: string;
  code?: Cryptocurrency_Add_Codes;
  errors?: Partial<Record<keyof Cryptocurrency_Add_Inputs, string>>;
};
