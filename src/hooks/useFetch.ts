import { useCallback, useState } from 'react';

interface FetchData<T, P> {
  data: T | null;
  setData: React.Dispatch<React.SetStateAction<T | null>>;
  loading: boolean;
  error: Error | null;
  fetchData: (...params: P[]) => Promise<T | null>;
}

export function useFetch<T, P>(
  service: (...params: P[]) => Promise<T>,
): FetchData<T, P> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(
    async (...params: P[]): Promise<T | null> => {
      try {
        setError(null);
        setLoading(true);

        const response = await service(...params);
        setData(response);
        return response;
      } catch (error: unknown) {
        setError(error as Error);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [service],
  );

  return { data, setData, loading, error, fetchData };
}
