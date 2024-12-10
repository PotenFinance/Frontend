import { NAV_MENU } from '@constants/index';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';

export default function NavTab() {
  const [activeTabPathName, setActiveTabPathName] = useState('/');

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveTabPathName(e.currentTarget.pathname);
  };

  return (
    <Nav>
      {NAV_MENU.map(menu => {
        const Icon = menu.icon;

        return (
          <Tab
            key={menu.name}
            href={menu.path}
            menuname={menu.name}
            onClick={handleTabClick}
            className={`${activeTabPathName === menu.path ? 'active' : null}`}
          >
            <Icon className={`tab-icon ${menu.path.slice(1)}`} width={25} height={25} />
            <span className={`tab-name`}>{menu.name}</span>
          </Tab>
        );
      })}
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  min-width: 390px;
  max-width: 600px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.base.white};
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.1);
`;

const Tab = styled(Link)<{ menuname: string }>`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${({ menuname }) => (menuname !== '마이페이지' ? '16px' : 0)};
  border-top-left-radius: ${({ menuname }) => (menuname !== '홈' ? '16px' : 0)};

  // 비활성화상태 탭 이름
  & .tab-name {
    margin-top: 3px;
    font-size: ${({ theme }) => theme.typography.title_3.fontSize};
    font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
    color: ${({ theme }) => theme.color.base.black};
  }

  // 활성화 탭
  &.active {
    background-color: ${({ theme }) => theme.color.primary._1};

    // 활성화 탭 아이콘
    & .tab-icon {
      // 홈
      & g {
        stroke: ${({ theme }) => theme.color.base.white};
      }

      // 소비리포트
      &.report g path {
        fill: ${({ theme }) => theme.color.base.white};
      }

      // 커뮤니티
      &.community {
        path {
          fill: ${({ theme }) => theme.color.base.white};
        }
      }

      // 마이페이지
      &.mypage {
        g path {
          fill: ${({ theme }) => theme.color.base.white};
        }
      }
    }

    // 활성화상태 탭 이름
    & .tab-name {
      color: ${({ theme }) => theme.color.base.white};
    }
  }
`;
