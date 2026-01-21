import { Metadata } from "next";
import { LocalBusinessJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Avicroft. Have questions about our wellness or education software? We're here to help. Email us at hello@avicroft.com or fill out our contact form.",
  alternates: {
    canonical: "https://avicroft.com/contact",
  },
  openGraph: {
    title: "Contact Avicroft | Get in Touch",
    description: "Have questions about Avicroft's software? Contact us via email or our contact form. We typically respond within 24 hours.",
    url: "https://avicroft.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LocalBusinessJsonLd />
      <FAQJsonLd category="general" />
      {children}
    </>
  );
}
