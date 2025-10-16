import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://greencardtrips.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "tl", "vi", "zh-cn"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    remotePatterns: [],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
          tl: "tl-PH",
          vi: "vi-VN",
          "zh-cn": "zh-CN",
        },
      },
    }),
  ],
});