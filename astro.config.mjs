import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://creativetimofficial.github.io",
  base: "/astro-launch-ui-pro/",
  image: {
    domains: ["astro.build"],
  }
});