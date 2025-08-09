import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewsletterSection() {
  return (
    <section className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 py-12 text-white md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 text-center md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-lg text-purple-100 md:text-xl">
            Subscribe to our newsletter to get the latest updates, exclusive content, and special
            offers directly in your inbox.
          </p>
        </div>
        <div className="w-full max-w-md">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Subscribe to our Newsletter</CardTitle>
              <CardDescription>
                Stay up-to-date with our latest news and exclusive offers.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
