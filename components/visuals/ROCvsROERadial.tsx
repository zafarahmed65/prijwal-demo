'use client';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import type { FeasoSummary } from '@/types';

export function ROCvsROERadial({ summary }: { summary: FeasoSummary }) {
  const data = [
    { name: 'ROC', value: summary.returnOnCost * 100, fill: '#0ea5e9' },
    { name: 'ROE', value: summary.returnOnEquity * 100, fill: '#22c55e' },
  ];
  const max = Math.max(data[0].value, data[1].value, 100);

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <RadialBarChart innerRadius="30%" outerRadius="90%" data={data} startAngle={90} endAngle={-270}>
          <PolarAngleAxis type="number" domain={[0, max]} tick={false} />
          <RadialBar minAngle={15} background clockWise dataKey="value" />
          <Legend />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
