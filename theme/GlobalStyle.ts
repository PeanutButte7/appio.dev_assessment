import { createGlobalStyle } from '@xstyled/emotion';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: dark;
    transition: background-color 0.3s ease;
    font-family: Inter, sans-serif;
  }
`;
