import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants/storageKeys';

export type ThemeMode = 'system' | 'dark' | 'light';

type ThemeContextValue = {
  /** Kullanıcı seçimi: sistem / koyu / açık */
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  /** Uygulamanın gerçekte kullandığı tema (sistem seçiliyse cihaz ayarı) */
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [theme, setThemeState] = useState<ThemeMode>('system');

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEYS.THEME).then((saved) => {
      if (saved === 'system' || saved === 'dark' || saved === 'light') {
        setThemeState(saved);
      }
    });
  }, []);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
    AsyncStorage.setItem(STORAGE_KEYS.THEME, mode);
  }, []);

  const isDark = useMemo(() => {
    if (theme === 'system') {
      return systemColorScheme === 'dark';
    }
    return theme === 'dark';
  }, [theme, systemColorScheme]);

  const value: ThemeContextValue = {
    theme,
    setTheme,
    isDark,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
