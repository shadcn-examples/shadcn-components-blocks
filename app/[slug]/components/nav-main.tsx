"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import navData from "@/config/nav.json";
import componentTree from "@/config/component-tree.json";
import Link from "next/link";

export function NavMain() {
  return (
    <>
      {navData.map((nav, key) => {
        return (
          <SidebarGroup key={key}>
            <SidebarGroupContent className="flex flex-col gap-2">
              <SidebarGroupLabel className="text-[11px] tracking-widest uppercase">
                {nav.title}
              </SidebarGroupLabel>
              <SidebarMenu>
                {nav?.items?.map((item) => {
                  const componentsCount = componentTree.find(
                    (e) => e.url === item.url.replace("/", "")
                  )?.components.length;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton tooltip={item.title} asChild>
                        <Link href={item.url}>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                      <SidebarMenuBadge className="opacity-60">
                        {componentsCount ?? null}
                      </SidebarMenuBadge>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        );
      })}
    </>
  );
}
