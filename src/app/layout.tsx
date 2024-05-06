'use client';

import React from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from './style/global';

import { Poppins } from 'next/font/google';
import { LoginPage, Navbar, Page, PageLink } from '@/app/style';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

const NavBarComponent = () => {
  return (
    <Navbar>
      <Page>
        <PageLink href={'/'}>Home</PageLink>
      </Page>
      <Page>
        <PageLink href={'/new-char'}>Create new character</PageLink>
      </Page>
      <Page>
        <PageLink href={'/database'}>Character database</PageLink>
      </Page>
      <LoginPage>
        <PageLink href={'/login'}>Login</PageLink>
      </LoginPage>
    </Navbar>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <NavBarComponent />
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
