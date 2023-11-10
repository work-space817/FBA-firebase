import { useCallback, useRef } from "react";

interface DebounceFunction {
  (...args: any[]): void;
}

export default function useDebounce(
  callback: DebounceFunction,
  delay: number
): DebounceFunction {
  const timer = useRef<number | null>(null);

  const debounceCallback: DebounceFunction = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debounceCallback;
}
