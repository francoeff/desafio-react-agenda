import { throwErrorByStatus } from '@src/errors';

const BASE_URL = '/api/';
export async function api<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(BASE_URL + endpoint, options);
  const data = await response.json();
  if (!response.ok) {
    throw throwErrorByStatus(
      response.status,
      data.message || response.statusText,
      data.cause ?? null
    );
  }
  return data as T;
}
