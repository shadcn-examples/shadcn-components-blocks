"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import { useDarkModeStore } from "@/stores/darkModeStore";

type ComponentIframeProps = {
  categoryData: {
    url: string;
    type: string;
  };
  compData: {
    key: string;
  };
  url?: string;
};

export default function ComponentIframe({ categoryData, compData }: ComponentIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const darkComponents = useDarkModeStore((state) => state.darkComponents);
  const isDark = darkComponents[`${categoryData.url}-${compData.key}`];
  const [height, setHeight] = useState("400px");

  const iframeSrc = useMemo(() => {
    const baseUrl = `/preview/${categoryData.url}/${compData.key}`;
    const params = new URLSearchParams();
    params.set("id", `${categoryData.url}-${compData.key}`);
    if (isDark) params.set("dark", "true");
    return `${baseUrl}?${params.toString()}`;
  }, [categoryData.url, compData.key, isDark]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data?.type === "setHeight" &&
        typeof event.data.height === "number" &&
        event.data.iframeId === `${categoryData.url}-${compData.key}`
      ) {
        setHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [categoryData.url]);

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage(
      {
        type: "theme",
        value: theme
      },
      "*"
    );
  }, [theme]);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full overflow-visible rounded-lg border-e-0">
      <ResizablePanel defaultSize={100} minSize={34} className="rounded-lg border">
        <iframe ref={iframeRef} src={iframeSrc} className="w-full border-0" style={{ height }} />
      </ResizablePanel>
      {!isMobile && categoryData.type !== "component" && (
        <ResizableHandle withHandle className="bg-transparent" />
      )}
      <ResizablePanel defaultSize={0}></ResizablePanel>
    </ResizablePanelGroup>
  );
}
