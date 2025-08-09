"use client";

import { LockIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";

type CodePreviewProps = {
  children: React.ReactNode;
  isPro?: boolean;
};

export default function CodePreview({ children, isPro = true }: CodePreviewProps) {
  const [tokenCheck, setTokenCheck] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyLicense = async () => {
    try {
      const response = await axios.post("/api/license-key/verify");
      setTokenCheck(response.data.success || false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isPro) {
      verifyLicense();
    } else {
      setLoading(false);
    }
  }, [isPro]);

  if (loading) {
    return (
      <div className="flex h-60 items-center justify-center">
        <svg
          className="text-foreground mr-3 -ml-1 h-5 w-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  if ((isPro && !tokenCheck) || (!isPro && tokenCheck)) {
    return (
      <figure className="relative h-80 overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black/50 backdrop-blur-xs lg:space-y-8">
          <div className="max-w-(--breakpoint-md) space-y-4 px-4 text-center">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-white lg:gap-4 lg:text-4xl">
              <LockIcon className="size-5 opacity-80 lg:size-8" /> Get access to source code
            </div>
            <div className="max-w-(--breakpoint-sm) text-sm text-white/80 lg:text-lg">
              If you don&#39;t have access to Shadcn UI Kit Pro or premium components, you can
              purchase now. If you&#39;ve purchased before, request access.
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-2">
            <Button size="lg" className="bg-white! text-black!" variant="secondary">
              <Link href="/pricing" className="flex items-center space-x-2" target="_blank">
                <LockIcon className="me-2 size-4" /> Get Code
              </Link>
            </Button>
            <Button size="lg" className="text-white!" variant="link" asChild>
              <Link href={"/activate-license-key"} target="_blank">
                Request Access
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src="/code-preview.png"
          width={500}
          height={400}
          className="aspect-square w-full object-cover"
          alt="code preview image"
        />
      </figure>
    );
  }

  return <>{children}</>;
}
