import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import compression from "vite-plugin-compression";

// https://astro.build/config
export default defineConfig({
  output: "static",
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
    plugins: [
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 1024,
        deleteOriginFile: false,
      }),
      compression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 1024,
        deleteOriginFile: false,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
        "@i18n": fileURLToPath(new URL("./src/i18n", import.meta.url)),
        "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
      },
    },
  },
  integrations: [
    tailwind(),
    compress({
      CSS: true,
      HTML: true,
      Image: false, // Don't compress images, they're already optimized
      JavaScript: true,
      SVG: false, // Don't compress SVGs to preserve animations
    }),
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
      // Customize sitemap entries with priorities and change frequencies
      customPages: [
        // Homepage - highest priority
        "https://greencardtrips.com/",
      ],
      // Filter function to set priorities, changefreq, and lastmod
      serialize(item) {
        // Add lastmod (last modified date) to all URLs for better crawl efficiency
        item.lastmod = new Date().toISOString();

        // Homepage - highest priority, updated weekly
        if (item.url === "https://greencardtrips.com/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        }
        // Language-specific homepages - high priority
        else if (item.url.match(/https:\/\/greencardtrips\.com\/(es|tl|vi|zh-cn)\/?$/)) {
          item.priority = 0.9;
          item.changefreq = "weekly";
        }
        // Legal pages - lower priority, rarely change
        else if (
          item.url.includes("/privacy-policy") ||
          item.url.includes("/terms-and-conditions") ||
          item.url.includes("/cookies-policy") ||
          item.url.includes("/politica-de-privacidad") ||
          item.url.includes("/terminos-y-condiciones") ||
          item.url.includes("/politica-de-cookies") ||
          item.url.includes("/patakaran-sa-privacy") ||
          item.url.includes("/mga-tuntunin-at-kundisyon") ||
          item.url.includes("/patakaran-sa-cookies") ||
          item.url.includes("/chinh-sach-bao-mat") ||
          item.url.includes("/dieu-khoan-va-dieu-kien") ||
          item.url.includes("/chinh-sach-cookies") ||
          item.url.includes("/yinsi-zhengce") ||
          item.url.includes("/tiaokuan-he-tiaozheng") ||
          item.url.includes("/cookies-zhengce")
        ) {
          item.priority = 0.3;
          item.changefreq = "monthly";
        }
        // App page and other pages - medium priority
        else {
          item.priority = 0.7;
          item.changefreq = "weekly";
        }
        return item;
      },
    }),
  ],
});
