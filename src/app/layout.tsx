import type { Metadata } from 'next';
import { overusedGroteskFont } from '../fonts';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Iconec - Coming Soon',
  description: 'Affordable luxury',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overusedGroteskFont.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
