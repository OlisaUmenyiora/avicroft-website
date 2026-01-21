import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Avicroft | Simple, Affordable Software for Wellness & Education",
  description: "Avicroft builds minimalist, easy-to-use software for small businesses. Manage bookings, clients, staff, and payments—with your own custom domain included. Free to start.",
  alternates: {
    canonical: "https://avicroft.com",
  },
  openGraph: {
    title: "Avicroft | Simple, Affordable Software for Wellness & Education",
    description: "Minimalist business software for salons, spas, and schools. Manage everything in one place with your own custom domain. Free to start.",
    url: "https://avicroft.com",
  },
};

export default function Home() {
  return (
    <>
      <FAQJsonLd category="general" />
      <Hero />
      <StatsSection />
      <ProductShowcase />
    </>
  );
}
