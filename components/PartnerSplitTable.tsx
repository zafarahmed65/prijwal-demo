import { Card } from './ui/Card';
import { Table, THead, TH, TRow, TD } from './ui/Table';
import { formatCurrency, formatPercent } from '@/lib/format';
import type { FeasoSummary, Model } from '@/types';

export default function PartnerSplitTable({ model, summary }: { model: Model; summary: FeasoSummary }) {
  const totalEquity = model.partners.reduce((acc, p) => acc + p.equity, 0);
  return (
    <Card className="p-4">
      <h2 className="mb-3 text-lg font-semibold">Partner % Split</h2>
      <Table>
        <THead>
          <TRow>
            <TH className="w-1/4">Partner</TH>
            <TH className="w-1/4">% Share</TH>
            <TH className="w-1/4">Equity</TH>
            <TH className="w-1/4">Profit</TH>
            <TH className="w-1/4">ROEI</TH>
          </TRow>
        </THead>
        <tbody>
          {model.partners.map((p, idx) => {
            const share = totalEquity ? p.equity / totalEquity : 0;
            const profitShare = summary.projectProfit * share;
            const roei = p.equity ? profitShare / p.equity : 0;
            return (
              <TRow key={idx}>
                <TD className="font-medium">{p.name}</TD>
                <TD>{formatPercent(share)}</TD>
                <TD>{formatCurrency(p.equity)}</TD>
                <TD>{formatCurrency(profitShare)}</TD>
                <TD>{formatPercent(roei)}</TD>
              </TRow>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
}
