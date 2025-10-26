import ComponentIframe from "./component-iframe";

import { Example } from "@/types/example";
import CodeDialog from "./code-dialog";
import navData from "@/config/nav.json";
import DarkModeCompButton from "@/app/[slug]/components/dark-mode-comp-button";
import { cn } from "@/lib/utils";

export default function ExampleDetail({ example }: { example: Example }) {
  const nav = navData
    .flatMap((section) => section.items ?? [])
    .find((item) => item.url.replace("/", "") === example.url);

  return (
    <div className="container mx-auto space-y-8 px-4">
      <header className="max-w-3xl space-y-3 lg:space-y-3">
        <h1 className="text-2xl font-heading lg:text-4xl">{nav?.title}</h1>
        <p className="text-muted-foreground lg:text-lg">{nav?.description}</p>
      </header>

      <div
        className={cn("grid gap-4 xl:gap-8", {
          "lg:grid-cols-1": example.type === "component",
          "lg:grid-cols-2": example.grid === "2",
          "lg:grid-cols-3": example.grid === "3"
        })}>
        {example?.components?.map((comp, key) => (
          <div key={key}>
            <div className="mb-4 flex items-center justify-between">
              <div>{"title" in comp ? comp.title : ""}</div>
              <div className="space-x-2">
                <CodeDialog category={example} component={comp} />
                <DarkModeCompButton id={`${example.url}-${comp.key}`} />
              </div>
            </div>
            <div>
              <ComponentIframe categoryData={example} compData={comp} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
