import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              🚀 Launch Faster
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-5xl">
              All-in-One Platform for Managing Your SaaS
            </h1>
            <p className="text-muted-foreground mb-8 text-balance lg:text-lg">
              Streamline operations, track metrics, and scale your SaaS business with ease.
              Everything you need, in one powerful dashboard.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href="https://app.yoursaas.com/signup">Start Free Trial</a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href="https://app.yoursaas.com/demo">
                  Request a Demo
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
          <img
            src="/asset-3.png"
            alt="Dashboard interface of the SaaS platform"
            className="max-h-96 w-full rounded-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
