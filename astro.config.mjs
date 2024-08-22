import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://creativetimofficial.github.io",
  base: "/",
  image: {
    domains: ["astro.build"],
  },
  output: "server",
  adapter: vercel({
    functionPerRoute: true,
  }),
});
