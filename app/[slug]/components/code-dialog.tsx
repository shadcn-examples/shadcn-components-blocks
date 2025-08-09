import React, { Fragment } from "react";
import { ChevronDownIcon, CodeIcon } from "lucide-react";
import { extractCodeFromFilePath, getFilesInDirectory } from "@/lib/code";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CodeRenderer from "@/components/code-renderer";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/code-renderer";
import CopyToClipboard from "@/components/copy-to-clipboard";
import ComponentCodeTabItem from "./component-code-tab-item";
import { Example } from "@/types/example";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import TabCodePreview from "./tab-code-preview";

type Props = { category: Example; component: { key: string } };

export default async function CodeDialog({ category, component }: Props) {
  const fileContent = extractCodeFromFilePath(`${category.url}/${component.key}/page.tsx`);
  const files = getFilesInDirectory(`${category.url}/${component.key}`);

  const packageManagers = [
    {
      name: "npm",
      code: `npx shadcn@latest add ${process.env.BASE_URL}/r/${category.url}-${component.key}.json`
    },
    {
      name: "pnpm",
      code: `pnpm dlx shadcn@latest add ${process.env.BASE_URL}/r/${category.url}-${component.key}.json`
    },
    {
      name: "yarn",
      code: `npx shadcn@latest add ${process.env.BASE_URL}/r/${category.url}-${component.key}.json`
    },
    {
      name: "ban",
      code: `bunx --bun shadcn@latest add ${process.env.BASE_URL}/r/${category.url}-${component.key}.json`
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <CodeIcon />
          Get the Code
        </Button>
      </DialogTrigger>
      <DialogContent className="border-0 p-0 md:min-w-4xl">
        <div className="min-w-0 space-y-4 p-4">
          <h3 className="text-lg leading-none font-semibold">Install via Registry</h3>
          <div className="rounded-md bg-zinc-950!">
            <Tabs defaultValue={"npm"} className="relative w-full gap-0 border-none">
              <div className="border-b-border/20 border-b p-2">
                <TabsList className="h-auto gap-2 bg-transparent">
                  {packageManagers.map((item, i) => (
                    <TabsTrigger
                      key={i}
                      className="dark:data-[state=active]:bg-secondary inline-flex rounded-md border-none text-sm font-normal text-white/50 data-[state=active]:bg-white/15 data-[state=active]:text-white/90! dark:data-[state=active]:text-black/90"
                      value={item.name}>
                      {item.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {packageManagers.map((item, i) => {
                return (
                  <TabsContent key={i} value={item.name} className="mt-0 border-none">
                    <div className="absolute end-2 top-2">
                      <CopyToClipboard text={item.code} />
                    </div>
                    <CodeBlock code={item.code} lang="bash" />
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
          <h3 className="text-lg leading-none font-semibold">Code</h3>
          <div className="overflow-hidden rounded-md bg-zinc-950!">
            <div className="grid grid-cols-[180px_1fr]">
              {files && files.length ? (
                <div className="min-h-[400px] border-e border-e-white/15">
                  {files.reverse().map((file, i) => {
                    const fileContent =
                      file.type === "file" ? extractCodeFromFilePath(file.path) : "";
                    return (
                      <Fragment key={i}>
                        {file.children && file.children.length > 0 ? (
                          <Collapsible>
                            <CollapsibleTrigger asChild className="w-full">
                              <Button
                                className="w-full justify-start rounded-none text-white/80! hover:bg-white/15"
                                variant="ghost">
                                {file.name} <ChevronDownIcon />
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="flex flex-col">
                                {file.children.map((child, i) => {
                                  const fileContent = extractCodeFromFilePath(child.path);
                                  return (
                                    <ComponentCodeTabItem key={i} file={child} code={fileContent} />
                                  );
                                })}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <ComponentCodeTabItem file={file} code={fileContent} />
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              ) : (
                <CodeRenderer code={fileContent} lang="tsx" />
              )}
              <TabCodePreview />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
