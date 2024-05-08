import React, { useMemo, useState } from 'react';
import { DARK_THEME } from '@/consts';
import { FaMoon, FaSun } from 'react-icons/fa';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { dark, light } from '@/style/Theme.styled';

interface ThemeSelectorProps {
  themeSelected: any;
}

const ThemeSelector = ({ themeSelected }: ThemeSelectorProps) => {
  const isVercelLoading = () => typeof window === 'undefined';

  const localTheme = useMemo(() => {
    if (isVercelLoading()) return light;
    const theme = localStorage.getItem('current-theme');
    return theme === DARK_THEME ? dark : light;
  }, []);

  const [selectedTheme, setSelectedTheme] = useState(localTheme);

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme === DARK_THEME ? light : dark);
    localStorage.setItem('current-theme', theme);
    themeSelected(selectedTheme);
  };
  return (
    <IconButton
      onClick={() => {
        handleThemeChange(selectedTheme.name);
      }}
      icon={selectedTheme.name === DARK_THEME ? <FaMoon /> : <FaSun />}
    />
  );
};

export default ThemeSelector;
