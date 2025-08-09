import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

export default function BadgeDemo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Badge variant="outline">
        <CheckIcon className="size-3 text-green-700" />
        Completed
      </Badge>
    </div>
  );
}
