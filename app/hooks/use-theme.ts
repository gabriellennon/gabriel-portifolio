'use client';

import { useEffect } from 'react';
import { usePersistedPreference } from './use-persisted-preference';

type Theme = 'light' | 'dark';

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark';
}

export function useTheme() {
  const [theme, setTheme] = usePersistedPreference('gl-theme', 'light', isTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return {
    isDark: theme === 'dark',
    toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
  };
}
