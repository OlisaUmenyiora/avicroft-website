import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Avicroft's mission to build simple, affordable software for small businesses. We believe every business deserves powerful tools that are easy to use.",
  alternates: {
    canonical: "https://avicroft.com/about",
  },
  openGraph: {
    title: "About Avicroft | Our Mission & Values",
    description: "We're building simple, affordable software for small businesses worldwide. Learn about our mission and the values that guide everything we build.",
    url: "https://avicroft.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
