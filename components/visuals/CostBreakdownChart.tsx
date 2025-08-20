'use client';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import type { Model, FeasoSummary } from '@/types';

const COLORS = ['#111827','#6B7280','#94A3B8','#1F2937','#9CA3AF','#374151','#4B5563','#D1D5DB','#0ea5e9','#f97316','#22c55e'];

export function CostBreakdownChart({ model, summary }: { model: Model; summary: FeasoSummary }) {
  const data = [
    { name: 'Land', value: model.costs.landPurchase },
    { name: 'Statutory', value: model.costs.statutoryFees },
    { name: 'Consultants', value: model.costs.serviceConsultants },
    { name: 'Builder', value: model.costs.builderCost },
    { name: 'Contingency', value: summary.constructionContingency },
    { name: 'Legal/Holding', value: model.costs.legalAccountingHolding },
    { name: 'Sales & Comm', value: model.costs.salesAndCommission },
    { name: 'Marketing', value: model.costs.marketingBranding },
    { name: 'Holding', value: model.costs.holdingCosts },
    { name: 'Sundries', value: model.costs.sundriesAndMisc },
    { name: 'Finance', value: model.costs.financingAndLoanInterest },
  ].filter(d => d.value > 0);

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={120} innerRadius={60} paddingAngle={2}>
            {data.map((_, i) => (<Cell key={i} fill={COLORS[i % COLORS.length]} />))}
          </Pie>
          <Tooltip formatter={(v: number) => v.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
