import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  interface Theme extends IColor, ITypography {
    [key: string]: any;
  }
}

/**
 * 테마 색상 인터페이스
 */
interface IColor {
  color: {
    primary: {
      _1: string;
      _2: string;
    };
    secondary: string;
    /**
     * 테마별 색상
     */
    theme: {
      positive: string; // 사용자 행동 - 긍정
      negavite: string; // 사용자 행동 - 부정
      neutral: string; // 사용자 행동 - 유지
      save: string; // 사용자 행동 - SAVE
      ott: string; // 카테고리 - OTT
      music: string; // 카테고리 - 음악
      work: string; // 카테고리 - 작업
      game: string; // 카테고리 - 게임
      daily: string; // 카테고리 - 일상
      etc: string; // 카테고리 - 기타
    };
    /**
     * 구독 서비스별 색상
     */
    brand: {
      netflix: string;
      disneyplus: string;
      spotify: string;
      adobe: string;
      discord: string;
      coupang: string;
      youtube: string;
      watcha: string;
      kurly: string;
      naver: string;
      baemin: string;
      yogiyo: string;
      wavve: string;
      melon: string;
      applemusic: string;
      kakao: string;
      tving: string;
    };
    base: {
      black: string;
      white: string;
      gray: {
        base: string;
        _5: string;
        _c: string;
        _e: string;
      };
    };
  };
}

type TypographyType =
  | 'heading_1'
  | 'heading_2'
  | 'sub_1'
  | 'title_1'
  | 'title_2'
  | 'title_3'
  | 'title_4'
  | 'body_1'
  | 'display_1'
  | 'display_2'
  | 'display_3'
  | 'label_stamp';

export type TypographySize = {
  default: string;
  small?: string;
  large?: string;
};

interface ITypography {
  typography: {
    [key in TypographyType]: {
      fontFamily: string;
      fontWeight:
        | number
        | {
            [key: string]: number;
          };
      fontSize: string | TypographySize;
      lineHeight: string | TypographySize;
    };
  };
}

const typography = {
  heading_1: {
    fontFamily: 'Paperlogy',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '28px',
  },
  heading_2: {
    fontFamily: 'Paperlogy',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '16px',
  },
  sub_1: {
    fontFamily: 'Pretendard JP',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '16px',
  },
  title_1: {
    fontFamily: 'Pretendard JP',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
  },
  title_2: {
    fontFamily: 'Pretendard JP',
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '16px',
  },
  title_3: {
    fontFamily: 'Pretendard JP',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',
  },
  title_4: {
    fontFamily: 'Pretendard JP',
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '13px',
  },
  body_1: {
    fontFamily: 'Pretendard JP',
    fontWeight: {
      default: 300,
      bold: 500,
    },
    fontSize: '16px',
    lineHeight: '26px',
  },
  display_1: {
    fontFamily: 'Pretendard JP',
    fontWeight: {
      default: 800,
      small: 600,
    },
    fontSize: {
      default: '32px',
      small: '16px',
    },
    lineHeight: {
      default: '42px',
      small: '20px',
    },
  },
  display_2: {
    fontFamily: 'Paperlogy',
    fontWeight: 700,
    fontSize: {
      default: '20px',
      small: '18px',
      large: '32px',
    },
    lineHeight: { default: '28px', small: '24px', large: '52px' },
  },
  display_3: {
    fontFamily: 'S-Core Dream',
    fontWeight: 600,
    fontSize: {
      default: '24px',
      small: '14px',
    },
    lineHeight: {
      default: '36px',
      small: '16px',
    },
  },
  label_stamp: {
    fontFamily: 'Paperlogy',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '12px',
  },
};

export const lightTheme: Theme = {
  color: {
    primary: {
      _1: '#271E80',
      _2: '#19144A',
    },
    secondary: '#F4D63E',
    theme: {
      positive: '#00C48C',
      negavite: '#FF0000',
      neutral: '#3B3E3D',
      save: '#489AF8',
      ott: '#90131E',
      music: '#F44336',
      work: '#F49649',
      game: '#EEBC6A',
      daily: '#30393C',
      etc: '#2D4D72',
    },
    brand: {
      netflix: '#E50914',
      disneyplus: '#165E6C',
      spotify: '#1ED760',
      adobe: '#E3392E',
      discord: '#5865F2',
      coupang: '#E84921',
      youtube: '#FF0000',
      watcha: '#FF0558',
      kurly: '#522472',
      naver: '#03C75A',
      baemin: '#2AC1BC',
      yogiyo: '#FA0050',
      wavve: '#022CA4',
      melon: '#00CD3C',
      applemusic: '#000000',
      kakao: '#FFCD00',
      tving: '#FF143D',
    },
    base: {
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        base: '#949494',
        _5: '#555555',
        _c: '#CCCCCC',
        _e: '#EEEEEE',
      },
    },
  },
  typography,
};
