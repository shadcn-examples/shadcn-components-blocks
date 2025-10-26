export default function HeroSection() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-10 px-6 text-center">
      <div className="space-y-4">
        <h1 className="font-heading md:text-4xl text-balance lg:text-5xl">
          Pre-built UI components and blocks for faster project building
        </h1>

        <p className="text-muted-foreground leading-relaxed text-balance lg:text-xl">
          Explore 100+ real-world UI components, expertly designed by professional designers—not AI.
          Each block is crafted for shadcn/ui, Tailwind CSS, and React, blending practical use cases
          with polished design for seamless integration into your projects.
        </p>
      </div>
    </div>
  );
}
