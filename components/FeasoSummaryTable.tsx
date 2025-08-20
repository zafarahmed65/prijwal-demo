import Card from './ui/Card';
import { Table, THead, TH, TRow, TD } from './ui/Table';
import { formatCurrency } from '@/lib/format';
import type { FeasoSummary, Model } from '@/types';

export default function FeasoSummaryTable({ model, summary }: { model: Model; summary: FeasoSummary }) {
  const rows = [
    { label: 'LAND PURCHASE', total: model.costs.landPurchase },
    { label: 'STATUTORY FEES', total: model.costs.statutoryFees },
    { label: 'SERVICE CONSULTANTS AND MANAGEMENT', total: model.costs.serviceConsultants },
    { label: 'BUILDER COST ALTERNATIVE OPTION', total: model.costs.builderCost },
    { label: 'CONSTRUCTION CONTINGENCY', total: summary.constructionContingency },
    { label: 'LEGAL / ACCOUNTING / HOLDING', total: model.costs.legalAccountingHolding },
    { label: 'SALES AND COMMISSIONS', total: model.costs.salesAndCommission },
    { label: 'MARKETING AND BRANDING', total: model.costs.marketingBranding },
    { label: 'HOLDING COSTS', total: model.costs.holdingCosts },
    { label: 'SUNDRIES AND MISC', total: model.costs.sundriesAndMisc },
    { label: 'FINANCING AND LOAN INTEREST', total: model.costs.financingAndLoanInterest },
  ];

  return (
    <Card className="p-4">
      <h2 className="mb-3 text-lg font-semibold">Costs Summary</h2>
      <Table>
        <THead>
          <TRow>
            <TH className="w-1/2">Category</TH>
            <TH className="w-1/4 text-right">Per Unit</TH>
            <TH className="w-1/4 text-right">Total</TH>
          </TRow>
        </THead>
        <tbody>
          {rows.map((r) => (
            <TRow key={r.label}>
              <TD className="whitespace-normal break-words pr-3">{r.label}</TD>
              <TD className="text-right">{formatCurrency(r.total / (model.units || 1))}</TD>
              <TD className="text-right font-medium">{formatCurrency(r.total)}</TD>
            </TRow>
          ))}
          <TRow>
            <TD className="font-semibold">TOTAL COSTS (EXC GST)</TD>
            <TD className="text-right font-semibold">{formatCurrency(summary.totalCosts / (model.units || 1))}</TD>
            <TD className="text-right font-semibold">{formatCurrency(summary.totalCosts)}</TD>
          </TRow>
        </tbody>
      </Table>
    </Card>
  );
}
