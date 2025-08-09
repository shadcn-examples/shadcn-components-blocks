import * as React from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Effects from "@/app/preview/[...slug]/effects";
import { LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DemoPageGenerator({
  category,
  component
}: {
  category: { url: string; type: string };
  component: { key: string };
}) {
  const Component = dynamic(() => import(`@/examples/${category.url}/${component.key}/page.tsx`), {
    ssr: true
  });

  return (
    <Suspense
      fallback={
        <div className="flex h-[400px] items-center justify-center">
          <LoaderIcon className="text-muted-foreground animate-spin lg:size-8" />
        </div>
      }>
      <Effects />
      <div
        className={cn("bg-background", {
          "container mx-auto flex min-h-[300px] max-w-2xl items-center justify-center py-4 lg:py-10":
            category.type === "component"
        })}>
        <Component />
      </div>
    </Suspense>
  );
}
