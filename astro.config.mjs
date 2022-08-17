import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://szegedia.github.io",
  base: "/szegedia.com",
  integrations: [tailwind(), image()],
});
