import { useMemo, useState } from 'react';

import { DARK_THEME } from '@/consts';
import type { ThemeData } from '@/@types/themeData';
import { dark, light } from '@/style/Theme.styled';

import isVercelLoading from './isVercelLoading';

const THEME_KEY = 'current-theme';

const useSavedTheme = (): [ThemeData, () => void] => {
  const localStorageTheme = useMemo(() => {
    if (isVercelLoading()) return light;
    const theme = localStorage.getItem(THEME_KEY);
    return theme === DARK_THEME ? dark : light;
  }, []);

  const [savedTheme, setSavedTheme] = useState(localStorageTheme);

  const toggleTheme = () => {
    const newTheme = savedTheme.name === DARK_THEME ? light : dark;
    setSavedTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme.name);
  };

  return [savedTheme, toggleTheme];
};

export default useSavedTheme;
