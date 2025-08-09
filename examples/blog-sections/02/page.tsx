import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function BlogSection() {
  const blogPosts = [
    {
      category: "Technology",
      title: "The Future of Web Development: Trends to Watch",
      description:
        "Discover the exciting new trends shaping the web development landscape, from AI integration to new framework paradigms.",
      date: "August 1, 2024",
      author: "Alex Johnson",
      href: "#"
    },
    {
      category: "Design",
      title: "Mastering Responsive Design for All Devices",
      description:
        "A comprehensive guide to creating fluid and adaptable designs that look great on any screen size.",
      date: "July 25, 2024",
      author: "Sarah Lee",
      href: "#"
    },
    {
      category: "Cloud",
      title: "Understanding Serverless Architectures: A Deep Dive",
      description:
        "Explore the benefits, challenges, and best practices of building applications with serverless technologies.",
      date: "July 18, 2024",
      author: "Michael Chen",
      href: "#"
    },
    {
      category: "Security",
      title: "Essential Cybersecurity Tips for Developers",
      description:
        "A practical guide to implementing robust security measures in your development workflow.",
      date: "July 10, 2024",
      author: "Jessica Kim",
      href: "#"
    }
  ];

  return (
    <section className="py-16 lg:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Latest Articles
            </h2>
            <p className="text-muted-foreground max-w-[800px] md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
              Stay informed with our in-depth articles, guides, and thought leadership.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <Link href="#" className="group">
              <Card key={index} className="flex flex-col rounded-lg">
                <CardContent>
                  <div className="text-primary mb-2 text-sm font-medium">{post.category}</div>
                  <Link className="block" href={post.href}>
                    <CardTitle className="mb-2 text-2xl leading-tight font-bold group-hover:underline">
                      {post.title}
                    </CardTitle>
                  </Link>
                  <p className="text-muted-foreground mb-4 text-base dark:text-gray-300">
                    {post.description}
                  </p>
                  <div className="text-muted-foreground mt-auto flex items-center justify-between text-sm">
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
