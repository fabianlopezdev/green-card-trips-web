/**
 * RequestAnimationFrame-based utilities for efficient event handling
 *
 * These utilities ensure smooth 60fps performance by coalescing
 * expensive operations (scroll, resize, etc.) using RAF.
 */

/**
 * Memoize a function to run at most once per animation frame
 *
 * Useful for scroll/resize handlers to prevent layout thrashing
 * and ensure smooth 60fps performance.
 *
 * @param fn - Function to memoize
 * @returns Memoized function
 *
 * @example
 * ```ts
 * const handleScroll = memoizeFrame(() => {
 *   const scrollY = window.scrollY;
 *   // Expensive DOM reads/writes here
 * });
 *
 * window.addEventListener("scroll", handleScroll, { passive: true });
 * ```
 */
export function memoizeFrame<T extends (...args: any[]) => void>(
  fn: T
): (...args: Parameters<T>) => void {
  let scheduled = false;

  return (...args: Parameters<T>): void => {
    if (scheduled) return;

    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      fn(...args);
    });
  };
}

/**
 * Throttle a function using RAF with a minimum delay
 *
 * Combines RAF with time-based throttling for more control
 * over execution frequency.
 *
 * @param fn - Function to throttle
 * @param delay - Minimum delay between executions in milliseconds
 * @returns Throttled function
 *
 * @example
 * ```ts
 * const handleResize = throttleFrame(() => {
 *   console.log("Resize happened");
 * }, 150);
 *
 * window.addEventListener("resize", handleResize);
 * ```
 */
export function throttleFrame<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastTime = 0;
  let rafId: number | null = null;

  return (...args: Parameters<T>): void => {
    const now = performance.now();

    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }

    if (now - lastTime >= delay) {
      lastTime = now;
      fn(...args);
    } else {
      rafId = requestAnimationFrame(() => {
        lastTime = performance.now();
        fn(...args);
        rafId = null;
      });
    }
  };
}

/**
 * Debounce a function using RAF
 *
 * Delays execution until the animation frame after the last invocation.
 *
 * @param fn - Function to debounce
 * @returns Debounced function
 *
 * @example
 * ```ts
 * const handleInput = debounceFrame((value: string) => {
 *   console.log("Search for:", value);
 * });
 *
 * input.addEventListener("input", (e) => handleInput(e.target.value));
 * ```
 */
export function debounceFrame<T extends (...args: any[]) => void>(
  fn: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null;

  return (...args: Parameters<T>): void => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
      fn(...args);
      rafId = null;
    });
  };
}

/**
 * Schedule multiple operations in a single animation frame
 *
 * Batches multiple DOM read/write operations for efficiency.
 *
 * @example
 * ```ts
 * const queue = createRAFQueue();
 *
 * queue.read(() => {
 *   const height = element.offsetHeight; // DOM read
 * });
 *
 * queue.write(() => {
 *   element.style.height = "100px"; // DOM write
 * });
 * ```
 */
export function createRAFQueue() {
  const reads: Array<() => void> = [];
  const writes: Array<() => void> = [];
  let scheduled = false;

  function flush() {
    // Execute all reads first (avoid layout thrashing)
    for (const read of reads) {
      read();
    }
    reads.length = 0;

    // Then execute all writes
    for (const write of writes) {
      write();
    }
    writes.length = 0;

    scheduled = false;
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(flush);
  }

  return {
    read(fn: () => void) {
      reads.push(fn);
      schedule();
    },
    write(fn: () => void) {
      writes.push(fn);
      schedule();
    },
    clear() {
      reads.length = 0;
      writes.length = 0;
      scheduled = false;
    },
  };
}
