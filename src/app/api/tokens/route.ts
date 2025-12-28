
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    Array.from({ length: 12 }, (_, i) => ({
      id: String(i),
      name: `Token ${i + 1}`,
      price: Number((Math.random() * 10).toFixed(4)),
      liquidity: Math.floor(Math.random() * 100000),
      status: i % 3 === 0 ? 'New' : i % 3 === 1 ? 'Final Stretch' : 'Migrated'
    }))
  );
}
