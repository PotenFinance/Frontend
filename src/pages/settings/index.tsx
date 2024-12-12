import styled from '@emotion/styled';
import ImagePlaceholder from '@assets/icons/profile-placeholder.svg';
import SectionLayout from '@components/common/SectionLayout';
import { SETTINGS } from '@constants/index';
import { TypographySize } from '@styles/theme';
import NotificationIcon from '@assets/icons/Notification';
import MenuItem from '@components/mypage/MenuItem';
import { useRouter } from 'next/router';

export default function MyPage() {
  const router = useRouter();

  return (
    <>
      <SectionLayout heading={``}>
        <ProfileHeader>
          <div>
            <ImagePlaceholder width={80} height={80} />
            <Username>김포텐</Username>
          </div>
          <NotificationIcon width={25} height={32} hasNewMessages={false} />
        </ProfileHeader>
      </SectionLayout>
      <SectionLayout heading={`개인 / 설정`} style={{ paddingBottom: 0 }}>
        <ul>
          {SETTINGS.personal.map(menu => (
            <MenuItem
              key={menu.name}
              onMenuClick={() => router.push(`${router.pathname}/${menu.path}`)}
            >
              {menu.name}
            </MenuItem>
          ))}
        </ul>
      </SectionLayout>
      <SectionLayout heading={`나의 구독 정보`} style={{ paddingBottom: 0 }}>
        <ul>
          {SETTINGS.subscription.map(menu => (
            <MenuItem
              key={menu.name}
              onMenuClick={() => router.push(`${router.pathname}/${menu.path}`)}
            >
              {menu.name}
            </MenuItem>
          ))}
        </ul>
      </SectionLayout>
      <SectionLayout heading={`커뮤니티 정보`}>
        <ul>
          {SETTINGS.community.map(menu => (
            <MenuItem
              key={menu.name}
              onMenuClick={() => router.push(`${router.pathname}/${menu.path}`)}
            >
              {menu.name}
            </MenuItem>
          ))}
        </ul>
      </SectionLayout>
    </>
  );
}

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    align-items: flex-end;
  }
`;
const Username = styled.p`
  font-family: ${({ theme }) => theme.typography.display_2.fontFamily};
  font-size: ${({ theme }) => (theme.typography.display_2.fontSize as TypographySize).default};
  font-weight: ${({ theme }) => theme.typography.display_2.fontWeight};
  margin-left: 7px;
`;
