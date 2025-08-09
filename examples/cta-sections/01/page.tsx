import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="bg-muted flex w-full flex-col gap-6 rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Supercharge Your SaaS?</h3>
            <p className="text-muted-foreground max-w-xl lg:text-lg">
              Start your free trial today and discover how our platform can help you streamline your
              operations, boost productivity, and grow faster.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Button variant="outline" asChild>
              <a href="#">Request a Demo</a>
            </Button>
            <Button asChild variant="default" size="lg">
              <a href="#">Start Free Trial</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
