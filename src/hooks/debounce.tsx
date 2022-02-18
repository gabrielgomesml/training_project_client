import { useRef } from 'react';

export function useDebounceCallback(callback, delay) {
  const timeOutRef = useRef<ReturnType<typeof setTimeout>>();

  function debouncedFunction(...args) {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    timeOutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  return debouncedFunction;
}
