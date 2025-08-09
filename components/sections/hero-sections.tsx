export default function HeroSection() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-10 px-6 text-center">
      <div className="space-y-4">
        <h1 className="font-display text-3xl font-bold text-balance lg:text-5xl lg:leading-14">
          The ultimate blocks and components for Shadcn UI & Tailwind CSS
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
