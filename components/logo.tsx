import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({
  className,
  logoClassName,
  responsiveLogo
}: {
  className?: string;
  logoClassName?: string;
  responsiveLogo?: boolean;
}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <img className={cn("size-5", logoClassName)} src="/logo.png" alt="shadcn components logo" />
      <span className={cn("font-display text-base", { "hidden lg:inline": responsiveLogo })}>
        Shadcncomponents
      </span>
    </Link>
  );
}
