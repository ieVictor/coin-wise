import { Cryptocurrency } from '@Types/Cryptocurrency';
import { createContext } from 'react';

export type FavoritesContextProps = {
  cryptos: Cryptocurrency['id'][];
  setCryptos: React.Dispatch<React.SetStateAction<Cryptocurrency['id'][]>>;
};

const FavoritesContext = createContext<FavoritesContextProps>({
  cryptos: [],
  setCryptos: () => {},
});

export default FavoritesContext;
