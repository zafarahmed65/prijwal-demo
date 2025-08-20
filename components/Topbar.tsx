'use client';

import { Building2, Save, Share2, Download } from 'lucide-react';
import Image from 'next/image';
import { useModelStore } from '@/store/model';

export function Topbar() {
  const units = useModelStore((s) => s.model.units);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            <Building2 size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold leading-4 text-gray-900">FinanceModel Pro</div>
            <div className="text-xs text-gray-500">Units: {units}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">
            <Share2 className="mr-1 inline h-4 w-4" />
            Share
          </button>
          <button className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">
            <Download className="mr-1 inline h-4 w-4" />
            Export
          </button>
          <button className="rounded-xl bg-black px-3 py-1.5 text-sm text-white hover:bg-gray-900">
            <Save className="mr-1 inline h-4 w-4" />
            Save
          </button>
          <div className="ml-1 h-8 w-8 overflow-hidden rounded-full">
            {/* dummy avatar */}
            <Image src={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjEyIiByPSI4IiBmaWxsPSIjZTRlN2VmIi8+PHJlY3QgeD0iOCIgeT0iMjIiIHdpZHRoPSIxNiIgaGVpZ2h0PSI4IiByeD0iNCIgZmlsbD0iI2U0ZTdlZiIvPjwvc3ZnPg==`} alt="" width={32} height={32} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
