"use client";

import componentTree from "@/config/component-tree.json";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function BlockSection() {
  const covers = [
    {
      name: "Hero Sections",
      url: "hero-sections",
      component: (
        <div className="w-48 items-center space-y-2 text-center">
          <div className="flex flex-col items-center gap-3 p-3 text-center">
            <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="block h-2 w-10/12 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="flex justify-center gap-2">
            <div className="bg-primary inline-flex items-center justify-center gap-2 rounded-md p-2 shadow/5">
              <div className="block h-2 w-8 rounded-full bg-white/30 dark:bg-white/10" />
            </div>
            <div className="bg-background inline-flex items-center justify-center gap-2 rounded-md p-2 shadow/5">
              <div className="block h-2 w-8 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "CTA Sections",
      url: "cta-sections",
      component: (
        <div className="bg-background flex w-48 items-center justify-between space-y-2 rounded-md p-3 text-center shadow/5">
          <div className="flex grow flex-col gap-3 text-center">
            <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="block h-2 w-10/12 rounded-full bg-black/10 dark:bg-white/10" />
          </div>

          <div className="bg-primary inline-flex items-center justify-center gap-2 rounded-md p-2 shadow/5">
            <div className="block h-2 w-8 rounded-full bg-white/30 dark:bg-white/10" />
          </div>
        </div>
      )
    },
    {
      name: "Pricing Sections",
      url: "pricing-sections",
      component: (
        <div className="flex w-48 gap-4">
          <div className="bg-background grow space-y-4 rounded-md p-3 shadow/5">
            <div className="text-sm">$19</div>
            <div className="flex flex-col gap-3">
              <div className="block h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="block h-2 w-9/12 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="block h-2 w-6/12 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
            <div className="bg-primary items-center justify-center gap-2 rounded-md p-2 shadow/5">
              <div className="block h-2 w-full rounded-full bg-white/30 dark:bg-white/10" />
            </div>
          </div>
          <div className="bg-background grow space-y-4 rounded-md p-3 shadow/5">
            <div className="text-sm">$29</div>
            <div className="flex flex-col gap-3">
              <div className="block h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="block h-2 w-9/12 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="block h-2 w-6/12 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
            <div className="bg-primary items-center justify-center gap-2 rounded-md p-2 shadow/5">
              <div className="block h-2 w-full rounded-full bg-white/30 dark:bg-white/10" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Newsletter Sections",
      url: "newsletter-sections",
      component: (
        <div className="flex w-48 gap-4">
          <div className="bg-background grow space-y-4 rounded-md p-3 shadow/5">
            <div className="block h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
            <Input className="pointer-events-none h-6 rounded-sm" />
            <div className="text-end">
              <div className="bg-primary inline-flex items-center justify-center gap-2 rounded-md p-2 shadow/5">
                <div className="block h-2 w-8 rounded-full bg-white/30 dark:bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Testimonials",
      url: "testimonials",
      component: (
        <div className="flex w-48 gap-4">
          <div className="grow space-y-3 rounded-md shadow/5">
            <div className="ms-auto me-auto size-10 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="ms-auto me-auto h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="h-2 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="grow space-y-3 rounded-md shadow/5">
            <div className="ms-auto me-auto size-10 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="ms-auto me-auto h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="h-2 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="grow space-y-3 rounded-md shadow/5">
            <div className="ms-auto me-auto size-10 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="ms-auto me-auto h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="h-2 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
        </div>
      )
    },
    {
      name: "Blog Sections",
      url: "blog-sections",
      component: (
        <div className="flex w-48 flex-col gap-4">
          <div className="flex grow flex-col gap-3">
            <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="block h-2 w-9/12 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="flex gap-2">
            <div className="bg-background grow space-y-4 rounded-md p-3 shadow/5">
              <div className="flex flex-col gap-3">
                <div className="block h-2 w-9/12 rounded-full bg-black/10 dark:bg-white/10" />
                <div className="block h-2 w-6/12 rounded-full bg-black/10 dark:bg-white/10" />
              </div>
              <div className="bg-primary items-center justify-center gap-2 rounded-md p-2 shadow/5">
                <div className="block h-2 w-full rounded-full bg-white/30 dark:bg-white/10" />
              </div>
            </div>
            <div className="bg-background grow space-y-4 rounded-md p-3 shadow/5">
              <div className="flex flex-col gap-3">
                <div className="block h-2 w-9/12 rounded-full bg-black/10 dark:bg-white/10" />
                <div className="block h-2 w-6/12 rounded-full bg-black/10 dark:bg-white/10" />
              </div>
              <div className="bg-primary items-center justify-center gap-2 rounded-md p-2 shadow/5">
                <div className="block h-2 w-full rounded-full bg-white/30 dark:bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Team Sections",
      url: "team-sections",
      component: (
        <div className="flex w-48 gap-4">
          <div className="bg-background grow space-y-3 rounded-md p-3 shadow/5">
            <div className="ms-auto me-auto size-10 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="ms-auto me-auto h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="flex justify-center gap-4">
              <div className="h-2 w-4 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="h-2 w-4 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
          </div>
          <div className="bg-background grow space-y-3 rounded-md p-3 shadow/5">
            <div className="ms-auto me-auto size-10 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="ms-auto me-auto h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="flex justify-center gap-4">
              <div className="h-2 w-4 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="h-2 w-4 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
          </div>
        </div>
      )
    }
  ];

  const filteredBlocks = componentTree.filter((e) => e.type === "block");
  const blocksCount = filteredBlocks.reduce((acc, item) => {
    acc += item.components.length;
    return acc;
  }, 0);

  return (
    <div className="container mx-auto max-w-7xl space-y-4 px-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Blocks</h3>
        <div className="text-muted-foreground">Total {blocksCount} blocks</div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredBlocks.map((item, i) => {
          const cover = covers.find((c) => c.url === item.url);
          if (!cover) return null;
          return (
            <Link href={`/${item.url}`} key={i} className="group space-y-3">
              <div className="bg-muted hover:bg- flex aspect-3/2 items-center justify-center overflow-hidden rounded-md border group-hover:border-gray-300">
                {cover.component}
              </div>
              <div className="flex flex-col items-center justify-center gap-1 text-sm">
                {cover.name}
                <span className="text-muted-foreground text-xs">
                  {item.components.length} component{item.components.length > 1 ? "s" : ""}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
