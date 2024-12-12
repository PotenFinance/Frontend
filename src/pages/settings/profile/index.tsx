import SectionLayout from '@components/common/SectionLayout';
import MyPageLayout from '@components/layout/MypageLayout';
import EditProfileImageIcon from '@assets/icons/edit-profile-image.svg';
import styled from '@emotion/styled';
import { InputBox, MenuItem } from '@components/settings';
import { PROFILE_MENU } from '@constants/index';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();

  return (
    <MyPageLayout
      pageName="내 정보"
      buttonName="수정"
      onButtonClick={() => router.push(`${router.pathname}/edit`)}
      onBackButtonClick={() => router.push('/settings')}
    >
      <SectionLayout style={{ padding: 0 }}>
        <ProfileImageContainer>
          <EditProfileImageIcon width={96} height={96} />
        </ProfileImageContainer>
        <InputBox label="이름" />
      </SectionLayout>
      <SectionLayout>
        <ul>
          {PROFILE_MENU.map(menu => (
            <MenuItem key={menu.name} onMenuClick={() => router.push(`${menu.path}`)}>
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
