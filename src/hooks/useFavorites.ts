import FavoritesContext from '@Contexts/FavoritesContext';
import { useContext } from 'react';

export default function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error('useFavorites must be used inside a FavoritesProvider!');
  return context;
}
