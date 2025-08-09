import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 lg:gap-6">
          <h1 className="text-4xl font-bold lg:text-5xl">
            Simplify Your Workflow with Our SaaS Platform
          </h1>
          <p className="text-muted-foreground text-balance lg:text-lg">
            Manage users, track analytics, automate tasks, and grow your business with a single
            platform designed for modern SaaS teams.
          </p>
        </div>

        <Button asChild size="lg" className="mt-10">
          <a href="#">Start Your Free Trial</a>
        </Button>

        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                alt="User 1"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp"
                alt="User 2"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                alt="User 3"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp"
                alt="User 4"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp"
                alt="User 5"
              />
            </Avatar>
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="size-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="mr-1 font-semibold">4.9</span>
            </div>
            <p className="text-muted-foreground text-start text-sm font-medium">
              from 500+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
