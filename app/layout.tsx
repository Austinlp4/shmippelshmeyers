import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shmipple Shmeyers Beans - Specialty Coffee Roasters",
  description: "Discover exceptional specialty coffee beans roasted to perfection. Artisanal coffee roasting with unique flavors and premium quality beans.",
  keywords: "specialty coffee, coffee beans, artisanal roasting, premium coffee, coffee roasters",
  openGraph: {
    title: "Shmipple Shmeyers Beans - Specialty Coffee Roasters",
    description: "Discover exceptional specialty coffee beans roasted to perfection. Artisanal coffee roasting with unique flavors and premium quality beans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
