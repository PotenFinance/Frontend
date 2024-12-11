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
    path: '/mypage',
    icon: mypageIcon,
  },
];
