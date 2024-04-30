import React from "react";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "./style/global";

import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: ["400", "600", "700"], subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
            {children}
            <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
