import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Karan Bhosale",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#2563EB",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
