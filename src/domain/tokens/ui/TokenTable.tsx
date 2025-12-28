
'use client';

import { Token } from '../types';

export function TokenTable({ tokens }: { tokens: Token[] }) {
  return (
    <div>
      {tokens.map(t => (
        <div key={t.id} style={{ display: 'flex', gap: 16, padding: 8 }}>
          <span>{t.name}</span>
          <span>${t.price}</span>
          <span>{t.liquidity}</span>
          <span>{t.status}</span>
        </div>
      ))}
    </div>
  );
}
