"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const categories = [
  {
    name: "Elements",
    href: "/elements",
    key: "/elements",
    items: [
      {
        name: "Button",
        url: "/buttons",
      },
      {
        name: "Badges",
        url: "/badges",
      },
    ]
  },
]

export function NavCategories() {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Categories</SidebarGroupLabel>
      <SidebarMenu>
        {categories.map((category) => (
          <SidebarMenuItem key={category.name}>
            <SidebarMenuButton asChild>
              <a href={category.key}>
                <span>{category.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
