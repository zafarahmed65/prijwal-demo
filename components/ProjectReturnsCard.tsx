import { Card } from './ui/Card';
import { formatCurrency, formatPercent } from '@/lib/format';
import type { FeasoSummary } from '@/types';

export default function ProjectReturnsCard({ summary }: { summary: FeasoSummary }) {
  return (
    <Card className="p-4">
      <h2 className="mb-3 text-lg font-semibold">On Completion / Project Returns</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border p-3">
          <div className="text-xs text-gray-500">Gross Realisation</div>
          <div className="text-xl font-semibold">{formatCurrency(summary.grossRealisation)}</div>
        </div>
        <div className="rounded-xl border p-3">
          <div className="text-xs text-gray-500">Less GST (Margin Scheme)</div>
          <div className="text-xl font-semibold">{formatCurrency(summary.gstMarginScheme)}</div>
        </div>
        <div className="rounded-xl border p-3">
          <div className="text-xs text-gray-500">Net Realisation</div>
          <div className="text-xl font-semibold">{formatCurrency(summary.netRealisation)}</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border p-3">
          <div className="text-xs text-gray-500">Project Profit</div>
          <div className="text-xl font-semibold">{formatCurrency(summary.projectProfit)}</div>
        </div>
        <div className="rounded-xl border p-3">
          <div className="text-xs text-gray-500">% Return on Cost</div>
          <div className="text-xl font-semibold">{formatPercent(summary.returnOnCost)}</div>
        </div>
        <div className="rounded-xl border p-3">
          <div className="text-xs text-gray-500">% Return on Equity</div>
          <div className="text-xl font-semibold">{formatPercent(summary.returnOnEquity)}</div>
        </div>
      </div>
      <div className="mt-4 rounded-xl border p-3 text-xs text-gray-500">
        IRR will be calculated when the Finance Cashflow schedule is implemented.
      </div>
    </Card>
  );
}
