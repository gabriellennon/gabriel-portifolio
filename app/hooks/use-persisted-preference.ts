'use client';

import { useCallback, useSyncExternalStore } from 'react';

const preferenceEvent = 'portfolio:preference-change';
const memoryFallback = new Map<string, string>();

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(preferenceEvent, onChange);

  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(preferenceEvent, onChange);
  };
}

/** Uses a deterministic server snapshot and stays usable when browser storage is blocked. */
export function usePersistedPreference<Value extends string>(
  key: string,
  defaultValue: Value,
  isValid: (value: unknown) => value is Value,
) {
  const getSnapshot = useCallback(() => {
    let value: unknown;

    if (memoryFallback.has(key)) {
      value = memoryFallback.get(key);
      return isValid(value) ? value : defaultValue;
    }

    try {
      value = window.localStorage.getItem(key);
    } catch {
      value = memoryFallback.get(key);
    }

    return isValid(value) ? value : defaultValue;
  }, [key, defaultValue, isValid]);

  const value = useSyncExternalStore(subscribe, getSnapshot, () => defaultValue);

  const updateValue = useCallback((nextValue: Value) => {
    try {
      window.localStorage.setItem(key, nextValue);
      memoryFallback.delete(key);
    } catch {
      // Keep the UI responsive even when storage is unavailable or its quota is exceeded.
      memoryFallback.set(key, nextValue);
    }

    window.dispatchEvent(new Event(preferenceEvent));
  }, [key]);

  return [value, updateValue] as const;
}
