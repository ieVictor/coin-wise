export type CryptocurrencyById = {
  id: string;
  symbol: string;
  name: string;
  categories: string[];
  image: { thumb: string; small: string; large: string };
  market_cap_rank: number;
  links: Links;
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    fully_diluted_valuation: { usd: number | null };
    total_volume: number;
    high_24h: { usd: number };
    low_24h: { usd: number };
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number | null;
    ath: { usd: number };
    ath_change_percentage: number;
    ath_date: string; // ISO date string
    atl: { usd: number };
    atl_change_percentage: number;
    atl_date: string; // ISO date string
    roi: null; // ROI field is explicitly null in the provided data
    last_updated: string; // ISO date string
  };
};

type Links = {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: string | null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: {
    github: string[];
    bitbucket: string[];
  };
};