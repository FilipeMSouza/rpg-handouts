'use client';
import React, { useMemo, useState } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/style/global';

import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '@/style/Theme.styled';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeButton } from '@/app/style';
import { DARK_THEME } from '@/consts';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localTheme = useMemo(() => {
    const theme = localStorage.getItem('current-theme');
    if (theme === DARK_THEME) {
      return dark;
    } else {
      return light;
    }
  }, []);
  const [selectedTheme, setSelectedTheme] = useState(localTheme);

  const HandleThemeChange = (theme: any) => {
    setSelectedTheme(theme);
    localStorage.setItem('current-theme', theme.name);
  };

  return (
    <html lang='en'>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          {selectedTheme.name === DARK_THEME ? (
            <ThemeButton
              color={'light'}
              onClick={() => HandleThemeChange(light)}
            >
              <FaSun />
            </ThemeButton>
          ) : (
            <ThemeButton color={'dark'} onClick={() => HandleThemeChange(dark)}>
              <FaMoon />
            </ThemeButton>
          )}
          <ThemeProvider theme={selectedTheme}>
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
