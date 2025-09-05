import { Suspense } from "react";
import DemoPageGenerator from "@/app/preview/[...slug]/demo-page-generator";
import { Metadata } from "next";
import data from "@/config/component-tree.json";
import navData from "@/config/nav.json";
import componentTree from "@/config/component-tree.json";
import { capitalizeFirstLetter } from "@/lib/utils";


export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const [category] = slug;

  const nav = navData
    .flatMap((section) => section.items ?? [])
    .find((item) => item.url.replace("/", "") === category);

  const currentComponentData = componentTree.find((e) => e.url === slug);

  if (!nav || !currentComponentData) return {};

  return {
    title: `${nav.title} - Shadcn ${capitalizeFirstLetter(currentComponentData.type)}s`,
    description: nav.meta.description,
    openGraph: {
      images: ["/og-image.png"]
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [category, component] = slug;

  const getCategory = data.find((item) => item.url === category);
  if (!getCategory) return {};

  const getComponent = getCategory?.components?.find((item) => item.key === component);
  if (!getComponent) return {};

  return (
    <Suspense>
      <DemoPageGenerator category={getCategory} component={getComponent} />
    </Suspense>
  );
}
