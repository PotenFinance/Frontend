import { css } from '@emotion/react';

export const global = css`
  html,
  body {
    max-width: 100vw;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  // css reset
  ul {
    list-style: none;
  }
`;
