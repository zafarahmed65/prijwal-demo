'use client';

import { useModelStore } from '@/store/model';
import { computeFeasoSummary } from '@/lib/calculations';

import KPICard from '@/components/KPICard';
import FeasoSummaryTable from '@/components/FeasoSummaryTable';
import ProjectReturnsCard from '@/components/ProjectReturnsCard';
import PartnerSplitTable from '@/components/PartnerSplitTable';

import Card from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

import RevenueVsCostBar from '@/components/visuals/RevenueVsCostsBar';
import { CostBreakdownChart } from '@/components/visuals/CostBreakdownChart';
import ProfitWaterfall from '@/components/visuals/ProfitWaterfall';
import CashflowLine from '@/components/visuals/CashflowLine';

export default function FeasoSummaryPage() {
  const model = useModelStore((s) => s.model);
  const setModel = useModelStore((s) => s.setModel);
  const s = computeFeasoSummary(model);

  return (
    <div className="mx-auto max-w-screen-2xl space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Feaso Summary</h1>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <KPICard label="Total Revenue" value={s.grossRealisation} accent="border-blue-200" />
        <KPICard label="Project Profit" value={s.projectProfit} accent="border-emerald-200" />
        <KPICard label="% Return on Cost" value={s.returnOnCost} kind="percent" />
        <KPICard label="% Return on Equity" value={s.returnOnEquity} kind="percent" />
      </div>

      {/* Inputs */}
      <Card className="p-4">
        <div className="mb-3 text-sm font-medium text-gray-900">Project Inputs</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="min-w-[180px]">
            <Label>Total Units</Label>
            <Input type="number" value={model.units} min={0}
              onChange={(e) => setModel({ units: Number(e.target.value) || 0 })}/>
          </div>
          <div className="min-w-[220px]">
            <Label>% Construction Contingency</Label>
            <Input type="number" step="0.01" value={model.contingencyPct * 100}
              onChange={(e) => setModel({ contingencyPct: (Number(e.target.value) || 0) / 100 })}/>
          </div>
          <div className="min-w-[240px]">
            <Label>Gross Realisation</Label>
            <Input type="number" value={model.sales.grossRealisation}
              onChange={(e) => setModel({ sales: { ...model.sales, grossRealisation: Number(e.target.value) || 0 } })}/>
          </div>
          <div className="min-w-[260px]">
            <Label>Less GST (Margin Scheme)</Label>
            <Input type="number" value={model.sales.gstMarginScheme}
              onChange={(e) => setModel({ sales: { ...model.sales, gstMarginScheme: Number(e.target.value) || 0 } })}/>
          </div>
          <div className="min-w-[220px]">
            <Label>Builder Cost (Base)</Label>
            <Input type="number" value={model.costs.builderCost}
              onChange={(e) => setModel({ costs: { ...model.costs, builderCost: Number(e.target.value) || 0 } })}/>
          </div>
        </div>
      </Card>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="p-4">
          <div className="mb-3 text-lg font-semibold">Revenue vs Costs</div>
          <RevenueVsCostBar s={s} />
        </Card>
        <Card className="p-4">
          <div className="mb-3 text-lg font-semibold">Cost Breakdown</div>
          <CostBreakdownChart model={model} summary={s} />
        </Card>
        <Card className="p-4">
          <div className="mb-3 text-lg font-semibold">Cash Flow</div>
          <CashflowLine />
        </Card>
      </div>

      {/* Table + Waterfall */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <FeasoSummaryTable model={model} summary={s} />
        <Card className="p-4">
          <div className="mb-3 text-lg font-semibold">Profit Waterfall</div>
          <ProfitWaterfall s={s} />
        </Card>
      </div>

      <ProjectReturnsCard summary={s} />
      <PartnerSplitTable model={model} summary={s} />
    </div>
  );
}
