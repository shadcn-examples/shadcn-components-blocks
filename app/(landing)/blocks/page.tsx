import { Metadata } from "next";
import BlockSection from "@/components/sections/block-section";

export const metadata: Metadata = {
  title: "The ultimate blocks for Shadcn UI & Tailwind CSS",
  description:
    "100+ real-world UI components for shadcn/ui, Tailwind, and React. Expert-designed, fully responsive, and ready to use in any modern web project.",
  openGraph: {
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return (
    <main className="space-y-10 py-10 lg:space-y-20 lg:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-10 px-6 text-center">
        <h1 className=" text-3xl font-heading text-balance lg:text-5xl">
          The ultimate blocks for Shadcn UI & Tailwind CSS
        </h1>
      </div>
      <BlockSection />
    </main>
  );
}
