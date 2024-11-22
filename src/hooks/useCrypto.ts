import { Cryptocurrency } from '@Types/Cryptocurrency';
import { useFetch } from './useFetch';
import { apiUrl } from 'src/config/API';
import { CryptocurrencyById } from '@Types/CryptocurrencyById';
import { useLocation } from 'react-router-dom';
import { CryptocurrencyBySearch } from '@Types/CryptocurrencyBySearch';

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

export function useCryptoListWithIds(
  ids: Cryptocurrency['id'][] | null | undefined,
  vs_currency?: string,
  refetchTrigger: number = 0
) {
  const url = ids?.length
    ? `${apiUrl.COINS_LIST}?vs_currency=${vs_currency}&ids=${encodeURIComponent(
        ids.join(',')
      )}`
    : null;

  return useFetch<Cryptocurrency[]>(url || '', refetchTrigger);
}

export function useCryptoListBySearch(search?: string) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query') || search || '';

  const url = `${apiUrl.COIN_BY_SEARCH}?query=${encodeURIComponent(query)}`;

  const { data, isLoading, isError } = useFetch<CryptocurrencyBySearch>(url);

  return { data, isLoading, isError };
}

export function useCryptoById(id: string) {
  return useFetch<CryptocurrencyById>(`${apiUrl.COIN_BY_ID}/${id}`);
}
