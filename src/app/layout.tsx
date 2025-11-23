import type { Metadata } from 'next';
import LayoutWrapper from '@/components/layout-wrapper';

export const metadata: Metadata = {
  title: 'Sawradip Saha',
  description: 'Sawradip Saha is an AI engineer who specializes in Deep Learning Models and Machine Learning tools',
  keywords: ['AI engineer', 'Machine Learning', 'Deep Learning', 'Portfolio'],
  authors: [{ name: 'Sawradip Saha' }],
  openGraph: {
    title: 'Sawradip Saha',
    description: 'Sawradip Saha is an AI engineer who specializes in Deep Learning Models and Machine Learning tools',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@sawradip',
    title: 'Sawradip Saha',
    description: 'Sawradip Saha is an AI engineer who specializes in Deep Learning Models and Machine Learning tools',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
