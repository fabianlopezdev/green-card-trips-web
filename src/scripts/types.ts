/**
 * Shared TypeScript types for vanilla JavaScript interactivity system
 */

/** Initializer function signature */
export type Initializer = (root: HTMLElement) => void;

/** Cleanup function returned by initializers for teardown */
export type Cleanup = () => void;

/** Animation directions */
export type AnimationDirection = "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right";

/** Animation timing options */
export interface AnimationOptions {
  /** Animation direction/type */
  animation?: AnimationDirection;
  /** Delay in milliseconds before animation starts */
  delay?: number;
  /** Animation duration in milliseconds */
  duration?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
  /** Run animation only once */
  once?: boolean;
}

/** Stagger animation options for lists */
export interface StaggerOptions {
  /** Delay between each item in milliseconds */
  delay: number;
  /** Animation type for staggered items */
  animation?: AnimationDirection;
  /** Start delay before first item */
  startDelay?: number;
}

/** Parallax effect options */
export interface ParallaxOptions {
  /** Speed multiplier (0-1, where 0.5 = half speed) */
  speed: number;
  /** Direction of parallax effect */
  direction?: "vertical" | "horizontal";
}

/** Intersection observer options with caching support */
export interface ObserverOptions {
  /** Threshold value (0-1) */
  threshold?: number | number[];
  /** Root margin string */
  rootMargin?: string;
  /** Root element (null = viewport) */
  root?: Element | null;
}

/** RAF-based scroll listener options */
export interface ScrollOptions {
  /** Throttle delay in milliseconds */
  throttle?: number;
  /** Use passive event listener */
  passive?: boolean;
}

/** Event delegation options */
export interface DelegationOptions {
  /** Selector for event target matching */
  selector: string;
  /** AbortController signal for cleanup */
  signal?: AbortSignal;
  /** Event listener options */
  options?: AddEventListenerOptions;
}

/** Theme options */
export type Theme = "light" | "dark";

/** Data attribute helpers */
export interface DatasetOptions {
  /** Parse as number */
  asNumber?: boolean;
  /** Parse as boolean */
  asBoolean?: boolean;
  /** Default value if attribute missing */
  defaultValue?: string | number | boolean;
}
