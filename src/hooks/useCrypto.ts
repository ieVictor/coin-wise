import {
  CoinsPagination,
  Cryptocurrency,
  Cryptocurrency_Add_Inputs,
  Cryptocurrency_Add_Response,
} from '@Types/Cryptocurrency';
import { useFetch } from './useFetch';
import { apiUrl, headers } from 'src/config/API';
import { CryptocurrencyById } from '@Types/CryptocurrencyById';
import { useLocation } from 'react-router-dom';
import { CryptocurrencyBySearch } from '@Types/CryptocurrencyBySearch';

export function useCryptoList(per_page: number, page?: number) {
  return useFetch<CoinsPagination>(
    `${apiUrl.COINS_LIST}?per_page=${per_page}&page=${page}&order_by=market_cap_rank`
  );
}

export function useCryptoListWithIds(
  ids: Cryptocurrency['id'][] | null | undefined,
  refetchTrigger: number = 0
) {
  const url = ids?.length
    ? `${apiUrl.COINS_LIST}&ids=${encodeURIComponent(ids.join(','))}`
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

export async function addCrypto(
  data: Cryptocurrency_Add_Inputs,
  accessToken: string | null
): Promise<Cryptocurrency_Add_Response> {
  try {
    const rawResponse = await fetch(apiUrl.ADD_COIN, {
      method: 'POST',
      credentials: 'include',
      headers: { ...headers, Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ ...data }),
    });
    const _data: Cryptocurrency_Add_Response = await rawResponse.json();
    return _data;
  } catch (error) {
    return {
      success: false,
      message: 'Error: ' + error,
      code: 'UNKNOWN_ERROR',
      errors: {},
    };
  }
}
