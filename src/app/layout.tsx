import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VDU Portal - Real-time Features',
  description: 'A demonstration of real-time features including live leaderboards, notifications, presence tracking, and team collaboration.',
  keywords: ['vdu', 'portal', 'real-time', 'collaboration', 'leaderboard', 'notifications'],
  authors: [{ name: 'VDU Portal Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}