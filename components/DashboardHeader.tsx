'use client';

import { Clock, CalendarRange, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function DashboardHeader() {
  const [scenario] = useState('Base Case');
  const [granularity] = useState<'Monthly' | 'Quarterly' | 'Yearly'>('Quarterly');

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold tracking-tight">Feaso Summary</h1>
        <div className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600">
          <Clock className="h-3.5 w-3.5" />
          Saved 2m ago
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className="inline-flex items-center gap-1 rounded-xl border bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
          {scenario} <ChevronDown className="h-4 w-4" />
        </button>
        <button className="inline-flex items-center gap-1 rounded-xl border bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
          <CalendarRange className="h-4 w-4" />
          {granularity} <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
