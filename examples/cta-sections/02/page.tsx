import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-4 lg:py-32">
      <div className="container mx-auto px-4 text-center lg:text-start">
        <div className="bg-muted flex w-full flex-col-reverse gap-6 rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:px-10 lg:py-6">
          <div className="grow space-y-6">
            <h3 className="text-3xl font-bold md:text-4xl">Ready to Supercharge Your SaaS?</h3>
            <p className="text-muted-foreground lg:text-lg">
              Start your free trial today and discover how our platform can help you streamline your
              operations, boost productivity, and grow faster.
            </p>
            <Button asChild variant="default" size="lg">
              <a href="#">Start Free Trial</a>
            </Button>
          </div>
          <div className="m-auto flex shrink-0 flex-col gap-4 sm:flex-row lg:m-0">
            <figure className="relative aspect-square w-36 lg:w-52">
              <Image src="/asset-1.png" fill alt="..." />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
