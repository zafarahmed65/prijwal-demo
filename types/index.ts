export type Costs = {
  landPurchase: number;
  statutoryFees: number;
  serviceConsultants: number;
  builderCost: number;
  legalAccountingHolding: number;
  salesAndCommission: number;
  marketingBranding: number;
  holdingCosts: number;
  sundriesAndMisc: number;
  financingAndLoanInterest: number;
};
export type Sales = { grossRealisation: number; gstMarginScheme: number };
export type Partner = { name: string; equity: number };

export type Model = {
  units: number;
  contingencyPct: number;
  costs: Costs;
  sales: Sales;
  partners: Partner[];
};

export type FeasoSummary = {
  units: number;
  constructionContingency: number;
  totalCosts: number;
  grossRealisation: number;
  gstMarginScheme: number;
  netRealisation: number;
  projectProfit: number;
  returnOnCost: number;
  returnOnEquity: number;
};
