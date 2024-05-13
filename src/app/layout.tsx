'use client';
import React from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/style/global';

import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import ThemeSelector from '@/components/molecules/ThemeSelector/ThemeSelector';
import useSavedTheme from '@/hooks/useSavedTheme';
import Navbar from '@/components/organism/Navbar/Navbar';

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
  const [theme, themeToggler] = useSavedTheme();
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Navbar/>
            <ThemeSelector selectedTheme={theme} themeToggle={themeToggler}/>
            {children}
            <GlobalStyle/>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
