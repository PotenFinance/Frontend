import styled from '@emotion/styled';
import ImagePlaceholder from '@assets/icons/profile-placeholder.svg';
import SectionLayout from '@components/common/SectionLayout';
import { SETTINGS } from '@constants/index';
import { TypographySize } from '@styles/theme';
import NotificationIcon from '@assets/icons/Notification';
import { MenuSection } from '@components/settings';
import { useUserStore } from 'stores/useUserStore';

/** 마이페이지 */
export default function MyPage() {
  const { user } = useUserStore();

  return (
    <>
      <SectionLayout heading={``}>
        <ProfileHeader>
          <div>
            <ImagePlaceholder width={80} height={80} />
            <Username>{user?.properties.nickname || '김포텐'}</Username>
          </div>
          <NotificationIcon width={25} height={32} hasNewMessages={false} />
        </ProfileHeader>
      </SectionLayout>
      <MenuSection heading="개인 / 설정" items={SETTINGS.personal} />
      <MenuSection heading="나의 구독 정보" items={SETTINGS.subscription} />
      <MenuSection heading="커뮤니티 정보" items={SETTINGS.community} />
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
