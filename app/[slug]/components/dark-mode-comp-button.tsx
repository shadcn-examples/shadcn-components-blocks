"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useDarkModeStore } from "@/stores/darkModeStore";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type ComponentIframeProps = {
  id: string;
  url?: string;
};

export default function DarkModeCompButton({ id }: ComponentIframeProps) {
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm" onClick={() => toggleDarkMode(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brightness">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 3l0 18" />
            <path d="M12 9l4.65 -4.65" />
            <path d="M12 14.3l7.37 -7.37" />
            <path d="M12 19.6l8.85 -8.85" />
          </svg>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Dark/Light</p>
      </TooltipContent>
    </Tooltip>
  );
}
