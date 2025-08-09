import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch",
      description: "Discover the exciting new trends shaping the web development landscape.",
      date: "August 1, 2024",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1646736722280-17b990b46195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Mastering React Hooks: A Comprehensive Guide",
      description: "Dive deep into React Hooks and learn how to build more efficient components.",
      date: "July 25, 2024",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1751646563987-d5720fb773cb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Serverless Architectures: Benefits and Best Practices",
      description: "Explore the advantages of serverless and how to implement it effectively.",
      date: "July 18, 2024",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="py-16 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Latest Blog Posts</h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay up-to-date with our latest news, insights, and stories.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="pt-0">
              <Link className="group grid gap-4" href={post.href}>
                <Image
                  alt="Blog post cover"
                  className="aspect-video w-full overflow-hidden rounded-t-lg object-cover transition-opacity group-hover:opacity-90"
                  height={225}
                  width={400}
                  src={post.imageSrc}
                />
                <CardHeader className="grid gap-2">
                  <CardTitle className="text-lg font-semibold group-hover:underline">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-none">{post.description}</p>
                </CardHeader>
                <CardContent className="text-muted-foreground flex items-center gap-2 text-sm">
                  <span>{post.date}</span>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
