import type { Metadata } from 'next';
import { Geist, Geist_Mono, Bungee, Inter } from 'next/font/google';
import './globals.css';
import Store from '@/store/store';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: false,
});

const bungeeSans = Bungee({
  variable: '--font-bungee-sans',
  weight: ['400'],
  preload: false,
});

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: false,
});

export const metadata: Metadata = {
  title: 'Top 5 Leagues',
  description: 'Get latest scores for the top 5 leagues',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script defer data-domain="topleagu.es" src="https://plausible.io/js/script.js" />
      <body className={`${geistSans.variable} ${bungeeSans.variable} ${geistMono.variable} ${inter.variable} antialiased 2xl:flex 2xl:justify-center`}>
        <Store>{children}</Store>
      </body>
    </html>
  );
}
