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
      // Customize sitemap entries with priorities and change frequencies
      customPages: [
        // Homepage - highest priority
        "https://greencardtrips.com/",
      ],
      // Filter function to set priorities and changefreq
      serialize(item) {
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