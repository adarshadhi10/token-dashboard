'use client';

import { useEffect, useState } from 'react';
import { useTokens } from '../domain/tokens/api';
import { TokenTable } from '../domain/tokens/ui/TokenTable';
import { Token } from '../domain/tokens/types';

export default function Page() {
  const { data, isLoading, error } = useTokens();
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    if (data) {
      setTokens(data);
    }
  }, [data]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = event => {
      const update = JSON.parse(event.data);
      setTokens(prev =>
        prev.map(t =>
          t.id === update.id ? { ...t, price: update.price } : t
        )
      );
    };

    return () => ws.close();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load tokens</div>;

  return (
    <main style={{ padding: 20 }}>
      <h1>Token Dashboard (Live)</h1>
      <TokenTable tokens={tokens} />
    </main>
  );
}
