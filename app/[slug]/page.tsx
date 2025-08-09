import data from "../../config/component-tree.json";
import { Metadata } from "next";
import ExampleDetail from "./components/example-detail";
import { Example } from "@/types/example";
import navData from "@/config/nav.json";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const nav = navData
    .flatMap((section) => section.items ?? [])
    .find((item) => item.url.replace("/", "") === slug);

  if (!nav) return {};

  return {
    title: `${nav.title} - Shadcn UI & Tailwind CSS Components and Blocks`,
    description: nav.meta.description
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const exampleData: Example | undefined = data.find((item) => item.url === slug);

  if (!exampleData) return null;

  return <ExampleDetail example={exampleData} />;
}
