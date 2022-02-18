import { useRef, useEffect, useCallback } from 'react';

export function useDebounceCallback<A extends any[]>(callback, delay: number) {
  const timeOutRef = useRef<ReturnType<typeof setTimeout>>();

  // Manter a referência do callback
  const debouncedFunction = useCallback(
    (...args: A) => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }
      timeOutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  // Limpar o timeout
  useEffect(
    () => () => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }
    },
    [],
  );

  return debouncedFunction;
}
