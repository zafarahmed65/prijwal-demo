'use client';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { FeasoSummary } from '@/types';
import { tickCompact } from '@/lib/format';

export default function ProfitWaterfall({ s }: { s: FeasoSummary }) {
  const rows = [
    { name: 'Net Realisation', base: 0, delta: s.netRealisation },
    { name: 'Less Costs',     base: s.netRealisation, delta: -s.totalCosts },
    { name: 'Profit',         base: 0, delta: s.projectProfit },
  ];
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <BarChart data={rows} barSize={36} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={tickCompact} />
          <Tooltip formatter={(v: number) => v.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} />
          <Bar dataKey="base" />
          <Bar dataKey="delta" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
