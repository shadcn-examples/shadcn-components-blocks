import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Component() {
  return (
    <div className="flex w-full flex-col justify-center gap-4 p-4 md:flex-row">
      <Link href="#" className="min-w-0 flex-1">
        <Card className="hover:bg-muted/50 py-0">
          <CardContent className="flex h-full flex-col justify-between p-4">
            <div className="text-foreground flex items-center gap-2 text-sm font-medium">
              <ChevronLeft className="h-4 w-4" />
              Installation
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              How to install dependencies and structure your app.
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link href="#" className="min-w-0 flex-1">
        <Card className="hover:bg-muted/50 py-0">
          <CardContent className="flex h-full flex-col justify-between p-4 text-right">
            <div className="text-foreground flex items-center justify-end gap-2 text-sm font-medium">
              Avatar
              <ChevronRight className="h-4 w-4" />
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              An image element with a fallback for representing the user.
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
