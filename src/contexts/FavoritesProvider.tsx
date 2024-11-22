import React, { useState } from 'react';
import { Cryptocurrency } from '@Types/Cryptocurrency';
import FavoritesContext from './FavoritesContext';

type FavoritesProviderProps = {
  children: React.ReactNode;
};

export function FavoritesProvider(props: FavoritesProviderProps) {
  const [cryptos, setCryptos] = useState<Cryptocurrency['id'][]>([]);

  return (
    <FavoritesContext.Provider value={{ cryptos, setCryptos }}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
