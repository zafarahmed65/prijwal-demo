import { create } from 'zustand';
import type { Model } from '@/types';

const initial: Model = {
  units: 32,
  contingencyPct: 0.075,
  costs: {
    landPurchase: 21380525.0,
    statutoryFees: 1941883.7,
    serviceConsultants: 4511000.07,
    builderCost: 74642400.2,
    legalAccountingHolding: 468700.03,
    salesAndCommission: 5901000.0,
    marketingBranding: 869500.03,
    holdingCosts: 153870.02,
    sundriesAndMisc: 60500.16,
    financingAndLoanInterest: 23459312.67,
  },
  sales: { grossRealisation: 196700000.0, gstMarginScheme: 16063636.36 },
  partners: [
    { name: 'PARTNER 1', equity: 1600000 },
    { name: 'PARTNER 2', equity: 1200000 },
    { name: 'PARTNER 3', equity: 800000 },
    { name: 'PARTNER 4', equity: 400000 },
  ],
};

interface Store { model: Model; setModel: (patch: Partial<Model>) => void; }
export const useModelStore = create<Store>((set, get) => ({
  model: initial,
  setModel: (patch) => set({ model: { ...get().model, ...patch } }),
}));
// Optional alias for old imports:
export const useFeasoStore = useModelStore;
