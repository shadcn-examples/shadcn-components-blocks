import { useId } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Component() {
  const id = useId();

  return (
    <Label
      htmlFor={id}
      className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
      <Checkbox
        id={id}
        defaultChecked
        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
      />
      <div className="grid gap-1.5 font-normal">
        <p className="text-sm leading-none font-medium">Enable notifications</p>
        <p className="text-muted-foreground text-sm">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </Label>
  );
}
