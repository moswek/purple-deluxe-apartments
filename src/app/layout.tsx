import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://purpledeluxeapartments.com'),
  title: 'Purple Deluxe Apartments | Luxury Serviced Apartments in Kampala',
  description: "Discover Kampala's premier B&B experience at Purple Deluxe Apartments. We offer luxury furnished apartments in Kyanja for short and long-term stays. Book your royal sanctuary today!",
  keywords: ['luxury apartments kampala', 'serviced apartments kampala', 'furnished apartments kampala', 'B&B kampala', 'short term rent kampala', 'long term rent kampala', 'purple deluxe apartments', 'kyanja apartments'],
  openGraph: {
    title: 'Purple Deluxe Apartments | Luxury Serviced Apartments in Kampala',
    description: 'Your exclusive royal sanctuary in Kampala. Purple Deluxe Apartments offers exquisite B&B and furnished apartments with world-class amenities.',
    url: 'https://purpledeluxeapartments.com',
    siteName: 'Purple Deluxe Apartments',
    images: [
      {
        url: 'https://i.imgur.com/x0TA3So.jpeg', // Using a real image for better sharing
        width: 1200,
        height: 630,
        alt: 'Luxury apartment exterior of Purple Deluxe Apartments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purple Deluxe Apartments | Luxury Serviced Apartments in Kampala',
    description: 'Your exclusive royal sanctuary in Kampala. We offer luxury B&B and furnished apartments with world-class amenities.',
    images: ['https://i.imgur.com/x0TA3So.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("font-sans antialiased min-h-screen flex flex-col")}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
