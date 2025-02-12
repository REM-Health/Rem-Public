import { useEffect, RefObject } from "react";

type Event = MouseEvent | TouchEvent;

/**
 * Custom hook that triggers a callback when a click or touch event
 * occurs outside the specified element.
 *
 * @param ref - A ref to the target element.
 * @param handler - A function to execute when clicking outside the element.
 */
export const useOnClickOutside = (ref: RefObject<HTMLDivElement | null>, handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;

      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
