'use client';

import Card from './ui/Card';
import { formatCurrency, formatCurrencyShort, formatPercent } from '@/lib/format';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

type Kind = 'money' | 'percent';

export default function KPICard({
  label,
  value,
  kind = 'money',
  series = [3, 3.3, 3.6, 3.9, 4.2, 4.6],
  accent = 'border-blue-200',
}: {
  label: string;
  value: number;
  kind?: Kind;
  series?: number[];
  accent?: string;
}) {
  const display = kind === 'percent' ? formatPercent(value) : formatCurrencyShort(value);
  const data = series.map((y, i) => ({ x: i, y }));

  return (
    <Card className={`p-4 ${accent}`}>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="mt-1 text-3xl font-extrabold tracking-tight leading-tight truncate">
        {display}
      </div>
      <div className="mt-3 h-10 w-full">
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <Area type="monotone" dataKey="y" stroke="#111827" fill="#11182710" strokeWidth={1.6} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/* Full value on hover */}
      <div className="mt-2 hidden text-xs text-gray-500 md:block" title={formatCurrency(value)}>
        {kind === 'percent' ? '' : formatCurrency(value)}
      </div>
    </Card>
  );
}
