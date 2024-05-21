'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;

    html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }
      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body {
      background-color: ${({ theme }) => theme.colors.background};
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }

    button {
      cursor: pointer;
      font-weight: 600;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }


    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
