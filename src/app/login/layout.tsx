import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Bardos Mudos RPG System',
  description: 'Login Page',
};

export default function LoginPageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
