'use client';
import React from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/style/global';

import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import ThemeSelector from '@/components/molecules/ThemeSelector/ThemeSelector';
import useSavedTheme from '@/hooks/useSavedTheme';
import Navbar from '@/components/organism/Navbar/Navbar';
import { SupabaseContext } from '@/lib/supabase';
import { createClient } from '@supabase/supabase-js';

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
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );

  return (
    <html lang='en'>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <SupabaseContext.Provider value={supabase}>
              <Navbar />
              <ThemeSelector selectedTheme={theme} themeToggle={themeToggler} />
              {children}
              <GlobalStyle />
            </SupabaseContext.Provider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
