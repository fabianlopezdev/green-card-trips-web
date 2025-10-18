import { initLenis } from "./lenis.client.ts";

if (typeof window !== "undefined") {
  if (!(window as unknown as { __lenisLoader?: boolean }).__lenisLoader) {
    (window as unknown as { __lenisLoader?: boolean }).__lenisLoader = true;
    initLenis();
  }
}
