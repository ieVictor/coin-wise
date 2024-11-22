import { useState, useEffect } from 'react';
import { headers } from 'src/config/API';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
}

export function useFetch<T>(
  url: string | null | undefined,
  refetchTrigger: number = 0
): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    if (!url) {
      setState({
        data: null,
        isLoading: false,
        isError: false,
      });
      return;
    }
    let isMounted = true;

    const fetchData = async () => {
      setState((prev) => ({ ...prev, isLoading: true, isError: false }));

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: { ...headers },
        });

        if (!response.ok) throw new Error(response.statusText);

        const json = await response.json();

        if (isMounted) {
          setState({ data: json, isLoading: false, isError: false });
        }
      } catch (err) {
        if (isMounted) {
          console.error(err);
          setState((prev) => ({ ...prev, isError: true, isLoading: false }));
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, refetchTrigger]);

  return state;
}
