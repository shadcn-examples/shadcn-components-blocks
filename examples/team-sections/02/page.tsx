import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Facebook, Linkedin } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Azunyan U. Wu",
      role: "Founder & CEO",
      bio: "Former IBM engineer with a passion for building innovative and human-centered software products.",
      image:
        "https://plus.unsplash.com/premium_photo-1754211654507-e0a561f6b9c4?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      social: {
        x: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Silverstone Gray",
      role: "Lead Designer",
      bio: "Creative strategist focused on clean UI and intuitive UX. Believes in the power of simplicity.",
      image:
        "https://images.unsplash.com/photo-1754051486494-cfdbf29a589c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      social: {
        x: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Alan D. Watts",
      role: "Lead Engineer",
      bio: "Award-winning developer with a passion for solving complex problems and building scalable systems.",
      image:
        "https://images.unsplash.com/photo-1754006320747-a90ba54b93cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      social: {
        x: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "X_AE_B-15",
      role: "Facilities Manager",
      bio: "Behind-the-scenes operator ensuring our workspace runs smoothly and efficiently.",
      image:
        "https://images.unsplash.com/photo-1598891960072-675d49bb4242?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      social: {
        x: "#",
        facebook: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="py-12 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
              We&#39;re Hiring!
            </span>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Let&#39;s Meet Our Team
            </h2>
            <p className="text-muted-foreground text-balance md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Gravida in fermentum et sollicitudin ac orci phasellus egestas. Molestie a iaculis at
              erat pellentesque adipiscing commodo.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full px-6 py-3">
              About Us
            </Button>
            <Button className="rounded-full">Job Openings</Button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <div className="relative size-20 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={`Picture of ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="font-medium text-indigo-600">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
              <div className="flex gap-3">
                <Link
                  href={member.social.x}
                  className="text-muted-foreground hover:text-gray-900"
                  prefetch={false}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">X (Twitter)</span>
                </Link>
                <Link
                  href={member.social.facebook}
                  className="text-muted-foreground hover:text-gray-900"
                  prefetch={false}>
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href={member.social.linkedin}
                  className="text-muted-foreground hover:text-gray-900"
                  prefetch={false}>
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
