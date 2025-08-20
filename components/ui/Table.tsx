import * as React from 'react';
export function Table({ children }: { children: React.ReactNode }) { return <div className="overflow-x-auto"><table className="w-full table-fixed border-collapse">{children}</table></div>; }
export function THead({ children }: { children: React.ReactNode }) { return <thead className="bg-gray-100 text-left text-xs text-gray-600">{children}</thead>; }
export function TRow({ children }: { children: React.ReactNode }) { return <tr className="border-b last:border-0">{children}</tr>; }
export function TH({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <th className={`px-3 py-2 font-medium ${className}`}>{children}</th>; }
export function TD({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <td className={`px-3 py-2 text-sm ${className}`}>{children}</td>; }
