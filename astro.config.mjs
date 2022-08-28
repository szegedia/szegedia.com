import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import image from "@astrojs/image"

// https://astro.build/config
export default defineConfig({
  site: "https://szegedia.github.io",
  // base: "/szegedia.com",
  integrations: [react(), tailwind(), image()],
  syntaxHighlight: "prism"
})
