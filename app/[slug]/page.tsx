import data from "../../config/component-tree.json";
import { Metadata } from "next";
import ExampleDetail from "./components/example-detail";
import { Example } from "@/types/example";
import navData from "@/config/nav.json";
import componentTree from "@/config/component-tree.json";
import { capitalizeFirstLetter } from "@/lib/utils";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const nav = navData
    .flatMap((section) => section.items ?? [])
    .find((item) => item.url.replace("/", "") === slug);

  const currentComponentData = componentTree.find((e) => e.url === slug);

  if (!nav || !currentComponentData) return {};

  return {
    title: `${nav.title} - Shadcn ${capitalizeFirstLetter(currentComponentData.type)}s`,
    description: nav.meta.description
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const exampleData: Example | undefined = data.find((item) => item.url === slug);

  if (!exampleData) return null;

  return <ExampleDetail example={exampleData} />;
}
