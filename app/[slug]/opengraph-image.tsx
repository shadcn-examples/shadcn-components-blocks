import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import navData from "@/config/nav.json";

export const size = {
  width: 1200,
  height: 630
};

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const binary = String.fromCharCode(...new Uint8Array(buffer));
  return `data:image/png;base64,${Buffer.from(binary, "binary").toString("base64")}`;
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const nav = navData
    .flatMap((section) => section.items ?? [])
    .find((item) => item.url.replace("/", "") === slug);

  const interSemiBold = await readFile(join(process.cwd(), "assets/Inter/Inter_28pt-SemiBold.ttf"));

  const logoSrc = await fetch(new URL("logo.png", process.env.BASE_URL)).then((res) =>
    res.arrayBuffer()
  );

  const logoBase64 = arrayBufferToBase64(logoSrc);

  if (!nav) return null;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          backgroundColor: "hsla(20, 89%, 89%, 1)",
          paddingLeft: "50px",
          paddingRight: "50px",
          background:
            " linear-gradient(90deg, hsla(20, 89%, 89%, 1) 0%, hsla(324, 57%, 77%, 1) 50%, hsla(278, 54%, 81%, 1) 100%)"
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: 40,
            left: 50,
            opacity: 0.7,
            gap: 15
          }}>
          <div style={{ display: "flex" }}>
            <img width={48} height={48} src={logoBase64} alt="..." />
          </div>
          <span style={{ fontSize: 28 }}>Shadcn Components</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontStyle: "normal",
            color: "black",
            marginTop: 30,
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
          <b>{nav.title}</b>
          <div tw="flex">
            <a tw="flex gap-3 h-20 items-center justify-center rounded-full bg-black px-12 py-4 text-2xl font-medium text-white">
              View Demo <span style={{ display: "flex", marginLeft: "15px" }}>&#8594;</span>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontStyle: "normal",
            color: "#666",
            lineHeight: 1.8,
            whiteSpace: "pre-wrap"
          }}>
          <b>{nav.description}</b>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400
        }
      ]
    }
  );
}
