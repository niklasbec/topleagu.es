import type { Metadata } from "next";
import { Geist, Geist_Mono, Bungee, Inter } from "next/font/google";
import "./globals.css";
import Store from "@/store/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bungeeSans = Bungee({
  variable: "--font-bungee-sans",
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top 5 Leagues",
  description: "Get latest scores for the top 5 leagues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${bungeeSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Store>{children}</Store>
      </body>
    </html>
  );
}
