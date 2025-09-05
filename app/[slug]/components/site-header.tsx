import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { HeaderSearch } from "@/components/search";
import { MenuSheet } from "@/components/menu-sheet";
import Logo from "@/components/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="ms-auto hidden max-w-xl w-full md:block">
        <HeaderSearch />
      </div>

      <div className="flex grow items-center justify-between gap-2 md:hidden">
        <SidebarTrigger />
        <Logo />
        <div className="ms-auto flex items-center gap-2">
          <HeaderSearch />
          <MenuSheet />
        </div>
      </div>

      <div className="ms-auto hidden items-center md:flex">
        <Button variant="ghost" asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/components">Components</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/blocks">Blocks</Link>
        </Button>
        <div className="block max-w-96 md:hidden">
          <HeaderSearch />
        </div>
        <Button className="ms-2" asChild>
          <Link href="https://github.com/shadcn-examples/shadcn-components-blocks" target="_blank">
            <GithubIcon /> Github
          </Link>
        </Button>
      </div>
    </header>
  );
}
