import { css } from '@emotion/react';

export const global = css`
  html,
  body {
    max-width: 100vw;
  }

  body {
    font-family: 'Pretendard JP', 'Paperlogy', 'S-CoreDream', Arial, Helvetica, sans-serif,
      -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans;
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

  p {
    white-space: pre-wrap;
  }

  // css reset
  ul {
    list-style: none;
  }
  button {
    background: none;
    border: none;
    font: inherit;
  }

  // Web fonts
  @font-face {
    // 페이퍼로지 600
    font-family: 'Paperlogy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2')
      format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  // 페이퍼로지 700
  @font-face {
    font-family: 'Paperlogy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  // 에스코어드림
  @font-face {
    font-family: 'S-CoreDream';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff')
      format('woff');
    font-weight: 600;
    font-style: normal;
  }
`;
