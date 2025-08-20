import type { Model, FeasoSummary } from '@/types';

export function computeFeasoSummary(model: Model): FeasoSummary {
  const { units, contingencyPct, costs, sales, partners } = model;
  const constructionContingency = r2(costs.builderCost * contingencyPct);
  const totalCosts = r2(
    costs.landPurchase + costs.statutoryFees + costs.serviceConsultants + costs.builderCost +
    constructionContingency + costs.legalAccountingHolding + costs.salesAndCommission +
    costs.marketingBranding + costs.holdingCosts + costs.sundriesAndMisc + costs.financingAndLoanInterest
  );
  const netRealisation = r2(sales.grossRealisation - sales.gstMarginScheme);
  const projectProfit = r2(netRealisation - totalCosts);
  const totalEquity = partners.reduce((a, p) => a + p.equity, 0);
  return {
    units,
    constructionContingency,
    totalCosts,
    grossRealisation: sales.grossRealisation,
    gstMarginScheme: sales.gstMarginScheme,
    netRealisation,
    projectProfit,
    returnOnCost: totalCosts ? projectProfit / totalCosts : 0,
    returnOnEquity: totalEquity ? projectProfit / totalEquity : 0,
  };
}
const r2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;
