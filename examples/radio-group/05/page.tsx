"use client";

import { useId, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Component() {
  const id = useId();
  const [hoverRating, setHoverRating] = useState("");
  const [currentRating, setCurrentRating] = useState("");

  return (
    <fieldset className="space-y-4">
      <legend className="text-foreground text-sm leading-none font-medium">
        Rate your experience
      </legend>
      <RadioGroup className="inline-flex gap-0" onValueChange={setCurrentRating}>
        {["1", "2", "3", "4", "5"].map((value) => (
          <label
            key={value}
            className="group has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative cursor-pointer rounded p-0.5 outline-none has-focus-visible:ring-[3px]"
            onMouseEnter={() => setHoverRating(value)}
            onMouseLeave={() => setHoverRating("")}>
            <RadioGroupItem id={`${id}-${value}`} value={value} className="sr-only" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`transition-all ${
                (hoverRating || currentRating) >= value ? "text-amber-500" : "text-input"
              } group-hover:scale-110`}>
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
            </svg>
            <span className="sr-only">
              {value} star{value === "1" ? "" : "s"}
            </span>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
