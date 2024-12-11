import { css } from '@emotion/react';

export const global = css`
  /* global styles */
  html,
  body {
    max-width: 100vw;
  }

  body {
    font-family: 'Pretendard JP', Arial, Helvetica, sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans;
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

  /* css reset */
  ul {
    list-style: none;
  }

  /* web fonts */
  /* 페이퍼로지 600 */
  @font-face {
    // 페이퍼로지 SemiBold
    font-family: 'Paperlogy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2')
      format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  // 페이퍼로지 Bold
  @font-face {
    font-family: 'Paperlogy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  // 에스코어드림 Bold
  @font-face {
    font-family: 'S-CoreDream';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff')
      format('woff');
    font-weight: 600;
    font-style: normal;
  }
`;
