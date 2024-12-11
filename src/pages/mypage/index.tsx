import styled from '@emotion/styled';
import ImagePlaceholder from '@assets/icons/profile-placeholder.svg';
import SectionLayout from '@components/common/SectionLayout';
import { MenuList } from '@components/mypage';
import { MYPAGE_MENU } from '@constants/index';
import { TypographySize } from '@styles/theme';
import NotificationIcon from '@assets/icons/Notification';

export default function MyPage() {
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
        <MenuList menuNames={MYPAGE_MENU.PERSONAL_SETTINGS} style={{ marginTop: '12px' }} />
      </SectionLayout>
      <SectionLayout heading={`나의 구독 정보`} style={{ paddingBottom: 0 }}>
        <MenuList menuNames={MYPAGE_MENU.SUBSCRIPTION} style={{ marginTop: '12px' }} />
      </SectionLayout>
      <SectionLayout heading={`커뮤니티 정보`}>
        <MenuList menuNames={MYPAGE_MENU.COMMUNITY} style={{ marginTop: '12px' }} />
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
