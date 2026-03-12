import type { Metadata } from 'next';
import { overusedGroteskFont } from '../fonts';
import './globals.css';
import { Fraunces } from 'next/font/google';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Iconec - Coming Soon',
  description: 'Affordable luxury',
};

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-fraunces',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overusedGroteskFont.variable} ${fraunces.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
