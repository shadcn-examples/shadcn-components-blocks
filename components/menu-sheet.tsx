"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { GithubIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MenuSheet() {
  const [open, setOpen] = useState(false);

  const handleClick = (state: boolean) => {
    setOpen(state);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col">
          <Button variant="ghost" onClick={() => handleClick(false)} asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" onClick={() => handleClick(false)} asChild>
            <Link href="/components">Components</Link>
          </Button>
          <Button variant="ghost" onClick={() => handleClick(false)} asChild>
            <Link href="/blocks">Blocks</Link>
          </Button>
          <Button variant="ghost" onClick={() => handleClick(false)} asChild>
            <Link href="https://shadcnexamples.com/" target="_blank">Examples</Link>
          </Button>
          <Button variant="ghost" onClick={() => handleClick(false)} asChild>
            <Link href="https://shadcnuidashboard.com/" target="_blank">Admin Dashboard</Link>
          </Button>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button asChild>
              <Link href="https://github.com/shadcn-examples/shadcn-components" target="_blank">
                <GithubIcon /> Github
              </Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
