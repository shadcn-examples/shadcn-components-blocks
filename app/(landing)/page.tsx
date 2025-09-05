import HeroSection from "@/components/sections/hero-sections";
import ComponentSection from "@/components/sections/component-section";
import { Metadata } from "next";
import BlockSection from "@/components/sections/block-section";

export const metadata: Metadata = {
  title: "Shadcn Components: Pre-built UI components and blocks for faster project building",
  description:
    "100+ real-world UI components for shadcn/ui, Tailwind, and React. Expert-designed, fully responsive, and ready to use in any modern web project.",
  openGraph: {
    images: ["/og-image.png"]
  }
};

export default function HomePage() {
  return (
    <main className="space-y-10 py-10 lg:space-y-20 lg:py-20">
      <HeroSection />
      <ComponentSection />
      <BlockSection />
    </main>
  );
}
