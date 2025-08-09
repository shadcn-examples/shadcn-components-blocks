import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button disabled>
        <LoaderCircleIcon className="animate-spin" />
        Loading...
      </Button>
      <Button size="icon" disabled>
        <LoaderCircleIcon className="animate-spin" />
      </Button>
      <Button variant="destructive" disabled>
        <LoaderCircleIcon className="animate-spin" />
        Deleting
      </Button>
    </div>
  );
}
