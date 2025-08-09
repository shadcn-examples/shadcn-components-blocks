import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit" variant="outline">
        Subscribe
      </Button>
    </div>
  );
}
