// app/layout.js
import "./globals.css";
import { Roboto } from 'next/font/google';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from './_context/CartProvider';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/paw.png" />
          <title>Fluffy Shop</title>
        </head>
        <body className={`${roboto.variable} antialiased`}>
          <CartProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
