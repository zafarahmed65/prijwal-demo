'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

export default function CashflowLine({
  data = [
    { t: 'Q1', balance: 1.6e6 },
    { t: 'Q2', balance: 2.1e6 },
    { t: 'Q3', balance: 2.8e6 },
    { t: 'Q4', balance: 3.6e6 },
  ],
}: {
  data?: Array<{ t: string; balance: number }>;
}) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="t" />
          <YAxis tickFormatter={(v) => (v / 1_000_000).toFixed(1) + 'M'} />
          <Tooltip formatter={(v: number) => v.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} />
          <Area type="monotone" dataKey="balance" />
          <Line type="monotone" dataKey="balance" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
