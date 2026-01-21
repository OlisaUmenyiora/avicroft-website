import { Metadata } from "next";
import { AllProductsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Avicroft's software products: Wellness for salons, spas, and beauty businesses, and Education for schools and academies. Simple, affordable, and built to grow with you.",
  alternates: {
    canonical: "https://avicroft.com/products",
  },
  openGraph: {
    title: "Avicroft Products | Wellness & Education Software",
    description: "Simple, affordable software for wellness businesses and schools. Online booking, client management, payments, and more—all with your own custom domain.",
    url: "https://avicroft.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AllProductsJsonLd />
      {children}
    </>
  );
}
