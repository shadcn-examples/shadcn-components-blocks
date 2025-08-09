import { ExternalLinkIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Buttons() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button>
        <PlusIcon />
        Add New
      </Button>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add New</p>
        </TooltipContent>
      </Tooltip>
      <Button variant="secondary">
        Preview
        <ExternalLinkIcon />
      </Button>
    </div>
  );
}
