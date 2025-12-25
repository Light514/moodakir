'use client';

import { useState, useCallback } from 'react';

export function useCounter(initialCount: number = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => Math.max(0, prev - 1)); // Don't go below 0
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const setCustomCount = useCallback((newCount: number) => {
    setCount(Math.max(0, newCount)); // Ensure non-negative
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    setCustomCount,
  };
}
