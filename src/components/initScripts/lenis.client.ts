import Lenis from "lenis";

let lenisInstance: Lenis | undefined;
let rafId: number | undefined;

declare global {
  interface Window {
    __lenisInstance?: Lenis;
  }
}

export function initLenis() {
  if (typeof window === "undefined") return;
  if (window.__lenisInstance) return;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
    autoResize: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);
  lenisInstance = lenis;
  window.__lenisInstance = lenis;
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = undefined;
  }
  if (typeof rafId === "number") {
    cancelAnimationFrame(rafId);
    rafId = undefined;
  }
  if (typeof window !== "undefined") {
    delete window.__lenisInstance;
  }
}
