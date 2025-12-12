import localFont from 'next/font/local';

export const overusedGroteskFont = localFont({
  src: [
    { path: '../public/fonts/OverusedGrotesk-VF.woff2', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-oug',
});
