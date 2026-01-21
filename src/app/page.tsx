import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProductShowcase />
    </>
  );
}
