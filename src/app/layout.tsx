import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Pedro\'s Content Studio - Professional Dental Practice Platform',
  description: 'Advanced content management platform for dental practices featuring team collaboration, performance analytics, and professional content creation tools.',
  keywords: ['dental', 'practice', 'content-management', 'healthcare', 'professional', 'analytics', 'team-collaboration'],
  authors: [{ name: 'Dr. Pedro\'s Practice Team' }],
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