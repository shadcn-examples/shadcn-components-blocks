import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ButtonDemo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="outline">
        Notifications
        <Badge className="size-5 rounded-full p-0">5</Badge>
      </Button>
      <Button variant="ghost">
        Chats
        <Badge variant="outline" className="border-green-600 text-green-500">
          New
        </Badge>
      </Button>
      <Button variant="outline" size="icon" className="relative">
        <BellIcon />
        <Badge className="absolute -end-2 -top-2 size-5 rounded-full p-0">5</Badge>
      </Button>
    </div>
  );
}
