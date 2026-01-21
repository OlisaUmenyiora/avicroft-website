import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

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
  metadataBase: new URL("https://avicroft.com"),
  title: {
    default: "Avicroft | Affordable, All-in-One Software for Small Businesses",
    template: "%s | Avicroft",
  },
  description: "Simple, affordable business software for wellness and education. Manage bookings, clients, staff, and payments with a minimalist platform that includes your own custom domain. Free to start.",
  keywords: [
    "salon booking software",
    "spa management software",
    "wellness business software",
    "school management system",
    "affordable business software",
    "easy to use booking software",
    "appointment scheduling",
    "client management",
    "small business software",
    "minimalist booking platform",
  ],
  authors: [{ name: "Avicroft" }],
  creator: "Avicroft",
  publisher: "Avicroft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Avicroft | Affordable, All-in-One Software for Small Businesses",
    description: "Simple, affordable business software for wellness and education. Manage bookings, clients, staff, and payments with a minimalist platform. Free to start.",
    url: "https://avicroft.com",
    siteName: "Avicroft",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avicroft - Software Built to Grow with You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avicroft | Affordable Software for Small Businesses",
    description: "Simple, minimalist business software for wellness and education. Free to start.",
    site: "@avicroft",
    creator: "@avicroft",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://avicroft.com",
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
