// Simple IRR via Newton–Raphson; returns annualized rate (e.g., 0.18 = 18%)
export function irr(cashflows: number[], guess = 0.1): number {
  const maxIters = 50;
  const tol = 1e-7;
  let r = guess;

  for (let k = 0; k < maxIters; k++) {
    let f = 0;
    let df = 0;
    for (let t = 0; t < cashflows.length; t++) {
      const denom = Math.pow(1 + r, t);
      f += cashflows[t] / denom;
      df += denom === 0 ? 0 : (-t * cashflows[t]) / (denom * (1 + r));
    }
    if (Math.abs(df) < 1e-12) break;
    const next = r - f / df;
    if (Math.abs(next - r) < tol) return next;
    r = next;
  }
  return r;
}
