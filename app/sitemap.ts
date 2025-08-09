import components from "@/config/component-tree.json";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const componentLinks: MetadataRoute.Sitemap = [];

  components.forEach((comp) => {
    componentLinks.push({
      url: `${process.env.BASE_URL}/${comp.url}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    });
  });

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: `${process.env.BASE_URL}/components`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: `${process.env.BASE_URL}/blocks`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    ...componentLinks
  ];
}
