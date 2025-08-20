export function formatCurrency(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}
export function formatPercent(n: number) {
  return (n * 100).toFixed(2) + '%';
}
export function formatCurrencyShort(n: number) {
  const abs = Math.abs(n), sign = n < 0 ? '-' : '';
  if (abs >= 1_000_000_000) return `${sign}$${(abs / 1_000_000_000).toFixed(1)}B`;
  if (abs >= 1_000_000)     return `${sign}$${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000)         return `${sign}$${(abs / 1_000).toFixed(1)}K`;
  return `${sign}${formatCurrency(abs)}`;
}
export function tickCompact(v: number) {
  if (Math.abs(v) >= 1_000_000_000) return (v/1_000_000_000).toFixed(1)+'B';
  if (Math.abs(v) >= 1_000_000)     return (v/1_000_000).toFixed(1)+'M';
  if (Math.abs(v) >= 1_000)         return (v/1_000).toFixed(0)+'K';
  return v.toFixed(0);
}
