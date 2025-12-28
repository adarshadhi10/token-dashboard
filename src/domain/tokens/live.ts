
import { useEffect } from 'react';
import { Token } from './types';

export function useLivePrices(tokens: Token[] | undefined, update: (t: Token) => void) {
  useEffect(() => {
    if (!tokens) return;
    const id = setInterval(() => {
      const t = tokens[Math.floor(Math.random() * tokens.length)];
      update({ ...t, price: +(t.price * (1 + (Math.random()-0.5)/50)).toFixed(4) });
    }, 1200);
    return () => clearInterval(id);
  }, [tokens, update]);
}
