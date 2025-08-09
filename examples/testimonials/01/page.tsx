import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This product has revolutionized the way we work. The intuitive interface and powerful features have significantly boosted our productivity.",
      name: "Sarah Chen",
      title: "CEO, Tech Solutions",
      avatar: "https://bundui-images.netlify.app/avatars/01.png"
    },
    {
      quote:
        "Outstanding customer support and a truly robust platform. We've seen remarkable improvements since integrating this into our workflow.",
      name: "Michael Lee",
      title: "Lead Developer, Innovate Corp",
      avatar: "https://bundui-images.netlify.app/avatars/02.png"
    },
    {
      quote:
        "A game-changer for our business! The scalability and reliability are unmatched, allowing us to focus on growth without technical worries.",
      name: "Jessica Kim",
      title: "Marketing Director, Global Brands",
      avatar: "https://bundui-images.netlify.app/avatars/03.png"
    },
    {
      quote:
        "The best investment we've made this year. It's incredibly user-friendly and has exceeded all our expectations.",
      name: "David Miller",
      title: "Operations Manager, Future Systems",
      avatar: "https://bundui-images.netlify.app/avatars/04.png"
    },
    {
      quote:
        "Seamless integration and powerful analytics. This tool has given us insights we never had before.",
      name: "Emily White",
      title: "Data Scientist, Analytics Hub",
      avatar: "https://bundui-images.netlify.app/avatars/05.png"
    }
  ];

  return (
    <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear directly from the people who have experienced the impact of our product.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="flex h-full flex-col">
                    <CardContent className="flex flex-grow flex-col items-center justify-center p-6 text-center">
                      <blockquote className="text-lg leading-snug lg:leading-normal">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="mt-6 flex flex-col items-center">
                        <Avatar className="size-12 border">
                          <AvatarImage
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={`Avatar of ${testimonial.name}`}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="mt-4">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
