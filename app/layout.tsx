import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import en from './translations/en.json';
const display = localFont({ src: '../public/fonts/barlow-condensed-black.ttf', variable: '--font-display', display: 'swap' });
const body = localFont({ src: '../public/fonts/dm-sans-regular.ttf', variable: '--font-body', display: 'swap' });
export const metadata: Metadata = {
  title: en.metadata.title,
  description: en.metadata.description,
  openGraph: { title: en.metadata.ogTitle, description: en.metadata.ogDescription, locale: 'en_US', type: 'website' },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>; }
