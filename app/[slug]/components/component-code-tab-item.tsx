"use client";

import React, { useEffect } from "react";
import { useCodeCopyStore } from "@/store/use-copy-code";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = { file: { name: string; path: string }; code: string };

export default function ComponentCodeTabItem({ file, code }: Props) {
  const { selectedTab, setCode, setSelectedTab } = useCodeCopyStore();

  const handleClick = (code: string, file: { name: string }) => {
    setCode(code);
    setSelectedTab(file.name);
  };

  useEffect(() => {
    if (code) {
      setCode(code);
      setSelectedTab("page.tsx");
    }
  }, [code]);

  return (
    <Button
      className={cn(
        "w-full justify-start rounded-none ps-5 text-xs text-white/75! hover:bg-white/15",
        {
          "bg-white/15": selectedTab === file.name
        }
      )}
      variant="ghost"
      onClick={() => handleClick(code, file)}>
      {file.name}
    </Button>
  );
}
