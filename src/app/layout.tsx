'use client';
import React, { useState } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/style/global';

import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '@/style/Theme.styled';
import { FaMoon, FaSun } from 'react-icons/fa';

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

  return (
    <html lang='en'>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <ThemeProvider theme={isDark ? dark : light}>
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
