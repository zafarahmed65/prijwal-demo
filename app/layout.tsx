import './globals.css';
import type { Metadata } from 'next';
import { Topbar } from '@/components/Topbar';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Feaso – Development Feasibility',
  description: 'Excel-parity feasibility model',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-50 to-white antialiased">
        <Topbar />
        <div className="mx-auto flex max-w-[1400px] gap-6 px-4 pb-10 pt-4 md:pt-8">
          <Sidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
