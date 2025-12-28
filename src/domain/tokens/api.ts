
import { useQuery } from '@tanstack/react-query';
import { Token } from './types';

export function useTokens() {
  return useQuery<Token[]>({
    queryKey: ['tokens'],
    queryFn: async () => {
      const res = await fetch('/api/tokens');
      if (!res.ok) throw new Error('fetch failed');
      return res.json();
    }
  });
}
