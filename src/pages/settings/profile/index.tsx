import SectionLayout from '@components/common/SectionLayout';
import MyPageLayout from '@components/layout/MypageLayout';
import EditProfileImageIcon from '@assets/icons/edit-profile-image.svg';
import styled from '@emotion/styled';
import { MenuItem } from '@components/settings';
import { PROFILE_MENU } from '@constants/index';
import { useRouter } from 'next/router';
import Divider from '@components/common/Divider';
import { useTheme } from '@emotion/react';

export default function Profile() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <MyPageLayout
      pageName="내 정보"
      buttonName="수정"
      onButtonClick={() => router.push(`${router.pathname}/edit`)}
      onBackButtonClick={() => router.push('/settings')}
    >
      <SectionLayout>
        <ProfileImageContainer>
          <EditProfileImageIcon width={96} height={96} />
        </ProfileImageContainer>
      </SectionLayout>
      <UsernameBox>
        <Label>이름</Label>
        <UserName>김포텐</UserName>
      </UsernameBox>
      <Divider />
      <SectionLayout>
        <ul>
          {PROFILE_MENU.map(menu => (
            <MenuItem
              key={menu.name}
              isArrowVisible={false}
              onMenuClick={() => router.push(`${menu.path}`)}
              style={{
                padding: '0 8px',
                borderTop: 0,
                borderBottom: `solid 0.3px ${theme.color.base.gray.base}`,
              }}
            >
              {menu.name}
            </MenuItem>
          ))}
        </ul>
      </SectionLayout>
    </MyPageLayout>
  );
}

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0;
`;

const UsernameBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
`;

const Label = styled.span`
  font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
  color: ${({ theme }) => theme.color.base.gray.base};
`;

const UserName = styled.span`
  font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
  color: ${({ theme }) => theme.color.base.black};
`;
