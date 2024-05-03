'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --totalLife: #025951;
        --currentLife: #0CF25D;

        --totalMana: #023059;
        --currentMana: #1C66A6;

        --background: #242423;
        --text-color: #BFBFBF;
    }
    *{
        margin: 0;
        padding: 0;

        html{
            @media (max-width: 1080px) {
                font-size: 93.75%;
            }
            @media (max-width: 720px) {
                font-size: 87.5%;
            }
        }

        body{
            color: var(--text-color);
            background-color: var(--background);
            -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, h4, h5, h6, strong{
            font-weight: 600;
        }

        button{
            cursor: pointer;
        }

        [disabled]{
            opacity: 0.6;
            cursor: not-allowed;
        }

        .react-modal-overlay {
            background: rgba(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .react-modal-content {
            width: 100%;
            max-width: 476px;
            background: var(--background);
            padding: 3rem;
            position: relative;
            border-radius: 0.24rem;
            display: flex;
            flex-direction: column-reverse
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`;
