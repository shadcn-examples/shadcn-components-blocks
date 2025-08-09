import { useId } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Component() {
  const task1 = useId();
  const task2 = useId();
  const task3 = useId();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id={task1} defaultChecked />
        <Label
          htmlFor={task1}
          className="peer-data-[state=checked]:line-through peer-data-[state=checked]:opacity-60">
          Buy milk from the market
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id={task2} defaultChecked />
        <Label
          htmlFor={task2}
          className="peer-data-[state=checked]:line-through peer-data-[state=checked]:opacity-60">
          Take out the trash
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id={task3} defaultChecked />
        <Label
          htmlFor={task3}
          className="peer-data-[state=checked]:line-through peer-data-[state=checked]:opacity-60">
          Take a coffee break
        </Label>
      </div>
    </div>
  );
}
