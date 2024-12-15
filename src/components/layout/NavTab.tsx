import { NAV_MENU } from '@constants/index';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavTab() {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <Nav>
      {NAV_MENU.map(menu => {
        const Icon = menu.icon;

        const isActive =
          menu.path === '/' ? pathname === menu.path : pathname?.startsWith(menu.path);

        return (
          <Link key={menu.name} href={menu.path} style={{ width: '100%', height: '100%' }}>
            <Tab menuname={menu.name} active={isActive}>
              <Icon
                width={25}
                height={25}
                fill={
                  menu.path === '/'
                    ? 'none'
                    : isActive
                    ? theme.color.base.white
                    : theme.color.base.black
                }
                stroke={
                  menu.path === '/' && isActive
                    ? theme.color.base.white
                    : menu.path === '/' && !isActive
                    ? theme.color.base.black
                    : undefined
                }
              />
              <TabName active={isActive}>{menu.name}</TabName>
            </Tab>
          </Link>
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

const Tab = styled.div<{ active: boolean; menuname: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, active }) => (active ? theme.color.primary._1 : 'transparent')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${({ menuname }) => (menuname !== '마이페이지' ? '16px' : 0)};
  border-top-left-radius: ${({ menuname }) => (menuname !== '홈' ? '16px' : 0)};
`;

const TabName = styled.span<{ active: boolean }>`
  margin-top: 3px;
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
  font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
  color: ${({ theme, active }) => (active ? theme.color.base.white : theme.color.base.black)};
`;
