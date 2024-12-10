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

  p {
    white-space: pre-wrap;
    word-break: keep-all;
  }

  /* css reset */
  // 접근성을 고려한 텍스트 감춤 클래스
  .a11y-hidden {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0); /* IE 6,7 */
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }

  // css reset
  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
  }

  /* Web fonts */
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
