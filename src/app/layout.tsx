'use client';
import React, { useEffect, useState } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/style/global';

import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '@/style/Theme.styled';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeButton } from '@/app/style';

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
  const [isDark, setIsDark] = useState(true);
  const HandleThemeChange = () => {
    setIsDark(!isDark);
    localStorage.setItem(
      'current-theme',
      JSON.stringify(isDark ? dark : light)
    );
  };
  useEffect(() => {
    const currentTheme = localStorage.getItem('current-theme');
    if (currentTheme === 'dark') {
      setIsDark(true);
    }
    setIsDark(false);
  }, []);
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <ThemeButton
            color={isDark ? 'light' : 'dark'}
            onClick={HandleThemeChange}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </ThemeButton>
          <ThemeProvider theme={isDark ? dark : light}>
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
