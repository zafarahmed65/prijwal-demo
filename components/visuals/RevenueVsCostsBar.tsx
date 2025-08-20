'use client';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { FeasoSummary } from '@/types';
import { tickCompact } from '@/lib/format';

export default function RevenueVsCostBar({ s }: { s: FeasoSummary }) {
  const data = [
    { name: 'Net Realisation', value: s.netRealisation },
    { name: 'Total Costs', value: s.totalCosts },
    { name: 'Profit', value: s.projectProfit },
  ];
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <BarChart data={data} barSize={36} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={tickCompact} />
          <Tooltip formatter={(v: number) => v.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
