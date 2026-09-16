import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/_index.scss';
import { Footer, Header } from '@/features/navigation/components';
import { getFooterNavigation, getHeaderNavigation } from '@/features/navigation/api';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ISUZU Motors South Africa | Bakkies, SUVs & Trucks',
  description:
    'Explore the latest Isuzu vehicle range, special offers, finance options, and dealer locations.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch live navigation data in parallel on the server
  const [headerMenuItems, footerColumns] = await Promise.all([
    getHeaderNavigation(),
    getFooterNavigation(),
  ]);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header menuItems={headerMenuItems} />
        <main>{children}</main>
        <Footer columns={footerColumns} />
      </body>
    </html>
  );
}
