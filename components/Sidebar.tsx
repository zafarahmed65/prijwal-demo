'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Receipt, MapPinned, BadgeDollarSign, Wrench, Hammer,
  Wallet, Megaphone, Briefcase, ShoppingBag, PiggyBank, Coins, FileText
} from 'lucide-react';

export type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SECTIONS: { title: string; items: NavItem[] }[] = [
  {
    title: 'MAIN',
    items: [{ href: '/feaso-summary', label: 'FEASO SUMMARY', icon: LayoutDashboard }],
  },
  {
    title: 'WORKBOOK',
    items: [
      { href: '#', label: 'FINANCE CASHFLOW', icon: Receipt },
      { href: '#', label: 'LAND PURCHASE', icon: MapPinned },
      { href: '#', label: 'STATUTORY FEES', icon: BadgeDollarSign },
      { href: '#', label: 'SERVICE CONSULTANTS', icon: Wrench },
      { href: '#', label: 'BUILDING COST', icon: Hammer },
      { href: '#', label: 'SALES & COMMISSIONS', icon: ShoppingBag },
      { href: '#', label: 'LEGAL / ACCOUNTING', icon: Briefcase },
      { href: '#', label: 'MARKETING & BRANDING', icon: Megaphone },
      { href: '#', label: 'HOLDING COSTS', icon: Wallet },
      { href: '#', label: 'SUNDRIES & MISC', icon: PiggyBank },
      { href: '#', label: 'FINANCE & LOAN INTEREST', icon: Coins },
    ],
  },
  {
    title: 'REPORTS',
    items: [{ href: '#', label: 'EXPORTS', icon: FileText }],
  },
];

function Section({ title, items }: { title: string; items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <div>
      <div className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">{title}</div>
      <nav className="space-y-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                active ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function SidebarImpl() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-64 shrink-0 rounded-2xl border bg-white p-3 md:block">
      <div className="flex h-full flex-col gap-5 overflow-y-auto">
        {SECTIONS.map((s) => (
          <Section key={s.title} title={s.title} items={s.items} />
        ))}
      </div>
    </aside>
  );
}

export const Sidebar = SidebarImpl;
export default SidebarImpl;
