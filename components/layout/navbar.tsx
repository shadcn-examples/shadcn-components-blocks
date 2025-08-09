import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { GithubIcon } from "lucide-react";
import { HeaderSearch } from "@/components/search";
import { MenuSheet } from "@/components/menu-sheet";

export default function Navbar() {
  return (
    <nav
      style={{ height: "calc(var(--spacing) * 14)" }}
      className="group-has-data-[collapsible=icon] bg-background/40 sticky top-0 z-50 flex shrink-0 items-center gap-2 px-4 backdrop-blur-md transition-[width,height] ease-linear">
      <div className="flex grow grid-cols-3 items-center justify-between lg:block lg:grid">
        <Logo />

        <div className="mx-auto hidden max-w-96 lg:block">
          <HeaderSearch />
        </div>

        <div className="ms-auto flex lg:hidden">
          <div className="ms-auto flex items-center">
            <HeaderSearch />
            <MenuSheet />
          </div>
        </div>

        <div className="ms-auto hidden items-center lg:flex">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/components">Components</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blocks">Blocks</Link>
          </Button>
          <Button className="ms-2" asChild>
            <Link
              href="https://github.com/shadcn-examples/shadcn-components-blocks"
              target="_blank">
              <GithubIcon /> Github
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
