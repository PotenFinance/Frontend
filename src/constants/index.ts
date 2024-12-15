import homeIcon from '@assets/icons/home.svg';
import reportIcon from '@assets/icons/report.svg';
import communityIcon from '@assets/icons/community.svg';
import mypageIcon from '@assets/icons/mypage.svg';

/** 하단 탭 네비게이션 메뉴 인터페이스*/
interface INavMenu {
  /** 탭 이름 */
  name: string;
  /** 탭 클릭시 이동 경로 */
  path: string;
  /** 아이콘 SVG 컴포넌트 */
  icon: React.SVGElementType;
}

export type TMenu = {
  /** 메뉴명 */
  name: string;
  /** 이동 경로 */
  path: string;
};

/** 마이페이지 설정 메뉴 인터페이스 */
interface ISettings {
  /** 개인 / 설정 */
  personal: TMenu[];
  /** 나의 구독 정보 */
  subscription: TMenu[];
  /** 커뮤니티 정보 */
  community: TMenu[];
}

/** 하단 탭 네비게이션 메뉴 */
export const NAV_MENU: INavMenu[] = [
  {
    name: '홈',
    path: '/',
    icon: homeIcon,
  },
  {
    name: '소비리포트',
    path: '/report',
    icon: reportIcon,
  },
  {
    name: '커뮤니티',
    path: '/community',
    icon: communityIcon,
  },
  {
    name: '마이페이지',
    path: '/settings',
    icon: mypageIcon,
  },
];

/** 마이페이지 설정 메뉴 */
export const SETTINGS: ISettings = {
  personal: [
    { name: '개인정보 설정', path: '/profile' },
    { name: '알림 설정', path: '/notification' },
  ],
  subscription: [
    { name: '월 예산 설정', path: '/budget' },
    { name: '구독 서비스 정보 수정', path: '/subscription' },
  ],
  community: [
    { name: '커뮤니티 프로필 수정', path: '#' },
    {
      name: '게시글 관리',
      path: '#',
    },
    {
      name: '댓글 관리',
      path: '#',
    },
  ],
};

/** 내정보 수정 페이지 메뉴 */
export const PROFILE_MENU: TMenu[] = [
  { name: '로그아웃', path: '/signout' },
  { name: '계정탈퇴', path: '#' },
];

/** 문자열 정규식
 * @description 한글, 영문만 입력가능, 최소 1개 글자 이상
 */
export const characterRegex = /^[가-힣a-zA-Z]+$/;

/** 플랫폼 영문명
 * @description ServiceCard 컴포넌트 동적 컬러 렌더링에 사용
 * */
export const PLATFORM_ENG_NAMES = [
  {
    id: 'E001',
    name: 'kakao',
  },
  {
    id: 'M001',
    name: 'melon',
  },
  {
    id: 'M002',
    name: 'applemusic',
  },
  {
    id: 'M003',
    name: 'youtube',
  },
  {
    id: 'M004',
    name: 'spotify',
  },
  {
    id: 'O001',
    name: 'netflix',
  },
  {
    id: 'O002',
    name: 'disneyplus',
  },
  {
    // youtube music id
    // youtube와 theme color 동일
    id: 'O003',
    name: 'youtube',
  },
  {
    id: 'O004',
    name: 'tving',
  },
  {
    id: 'O005',
    name: 'wavve',
  },
  {
    id: 'O006',
    name: 'watch',
  },
  {
    id: 'S001',
    name: 'coupang',
  },
  {
    id: 'S002',
    name: 'kurly',
  },
  {
    id: 'S003',
    name: 'naver',
  },
  {
    id: 'S004',
    name: 'baemin',
  },
  {
    id: 'S005',
    name: 'yogiyo',
  },
];
