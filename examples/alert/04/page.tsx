import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function AlertDemo() {
  return (
    <Alert className="flex">
      <div className="grow">
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
        <Button size="sm" variant="outline" className="mt-2">
          Go it!
        </Button>
      </div>
      <CheckCircle2Icon className="mt-0.5 shrink-0" />
    </Alert>
  );
}
