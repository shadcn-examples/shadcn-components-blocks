"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CopyToClipboard({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Kopyalama başarısız:", err);
    }
  };

  return (
    <Button className="bg-transparent!" onClick={handleCopy}>
      {copied ? (
        <Check className="h-4 w-4 text-white/50" />
      ) : (
        <Clipboard className="h-4 w-4 text-white/50" />
      )}
    </Button>
  );
}
