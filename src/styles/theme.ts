import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  interface Theme extends IColor {
    [key: string]: any;
  }
}

/**
 * 테마 색상 인터페이스
 */
interface IColor {
  color: {
    [key: string]: IOrdinalNumbers;
  };
}

/**
 * 차수 인터페이스
 */
interface IOrdinalNumbers {
  /**
   * 1
   */
  primary?: string;
  /**
   * 2
   */
  secondary?: string;
  /**
   * 3
   */
  tertiary?: string;
  /**
   * 4
   */
  quaternary?: string;
  /**
   * 5
   */
  quinary?: string;
  /**
   * 6
   */
  senary?: string;
  /**
   * 7
   */
  septenary?: string;
  /**
   * 8
   */
  octonary?: string;
  /**
   * 9
   */
  nonary?: string;
  /**
   * 10
   */
  denary?: string;
}

export const lightTheme: Theme = {
  color: {
    blue: {
      primary: '#271E80',
      secondary: '#19144A',
      tertiary: '#5865F2', // 브랜드 - 디스코드
    },
    yellow: {
      primary: '#F4D63E',
    },
    green: {
      primary: '#00C48C', // 사용자 행동 - 긍정
      secondary: '#165E6C',
      tertiary: '#1ED760', // 브랜드 - 스포티파이
    },
    red: {
      primary: '#FF0000', // 사용자 행동 - 부정
      secondary: '#E50914', // 브랜드 - 넷플릭스
      tertiary: '#E3392E', // 브랜드 - 어도비
    },
    gray: {
      primary: '#3B3E3D', // 사용자 행동 - 유지
    },
    black: {
      primary: '#000000',
    },
    white: {
      primary: '#FFFFFF',
    },
  },
};
