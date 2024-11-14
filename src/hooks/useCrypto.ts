import { Cryptocurrency } from '@Types/Cryptocurrency';
import { useFetch } from './useFetch';
import { apiUrl } from 'src/config/API';

export function useCryptoList(
  per_page: number,
  vs_currency?: string,
  page?: number
) {
  return useFetch<Cryptocurrency[]>(
    `${apiUrl.COINS_LIST}?vs_currency=${
      vs_currency || 'USD'
    }&per_page=${per_page}&page=${page}`
  );
}

export function useCryptoById(id: string) {
  return useFetch<Cryptocurrency>(`${apiUrl.COIN_BY_ID}/${id}`);
}