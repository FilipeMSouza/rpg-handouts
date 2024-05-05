import React from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from './style/global';

import { Poppins } from 'next/font/google';

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
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
