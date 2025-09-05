import Link from "next/link";
import Logo from "@/components/logo";
import componentTree from "@/config/component-tree.json";
import navData from "@/config/nav.json";

export default function Footer() {
  const nav = navData.flatMap((section) => section.items ?? []);

  const filteredComponents = componentTree.filter((e) => e.type === "component");
  const filteredBlocks = componentTree.filter((e) => e.type === "block");

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl space-y-10 px-8 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
          <div className="lg:col-span-1">
            <Logo />
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            <div>
              <h4 className="text-foreground mb-4 font-semibold">Components</h4>
              <ul className="text-muted-foreground space-y-3 text-sm grid md:grid-cols-2">
                {filteredComponents.map((item, i) => (
                  <li key={i}>
                    <Link href={item.url} className="hover:text-foreground hover:underline">
                      {nav.find((e) => e.url.replace("/", "") === item.url)?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground mb-4 font-semibold">Blocks</h4>
              <ul className="text-muted-foreground space-y-3 text-sm">
                {filteredBlocks.map((item, i) => (
                  <li key={i}>
                    <Link href={item.url} className="hover:text-foreground hover:underline">
                      {nav.find((e) => e.url.replace("/", "") === item.url)?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground mb-4 font-semibold">Resource</h4>
              <ul className="text-muted-foreground space-y-3 text-sm">
                <li>
                  <Link href="/components" className="hover:text-foreground hover:underline">
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="/blocks" className="hover:text-foreground hover:underline">
                    Blocks
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shadcnexamples.com/"
                    className="hover:text-foreground hover:underline"
                    target="_blank">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-foreground hover:underline" target="_blank">
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/ShadcnExamples"
                    className="hover:text-foreground hover:underline">
                    X (Twitter)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
