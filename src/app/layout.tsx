import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avicroft | Software Products Built to Grow with YOU!",
  description: "Avicroft builds software products that help businesses grow. From salon management to education systems to e-commerce platforms.",
  keywords: ["software", "saas", "salon", "education", "ecommerce", "africa", "business"],
  openGraph: {
    title: "Avicroft | Software Products Built to Grow with YOU!",
    description: "Avicroft builds software products that help businesses grow.",
    url: "https://avicroft.com",
    siteName: "Avicroft",
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
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
