import SectionLayout from '@components/common/SectionLayout';
import MyPageLayout from '@components/layout/MypageLayout';
import EditProfileImageIcon from '@assets/icons/edit-profile-image.svg';
import styled from '@emotion/styled';
import InputBox from '@components/mypage/InputBox';
import { MenuList } from '@components/mypage';

export default function Profile() {
  return (
    <MyPageLayout pageName="내 정보" buttonName="수정">
      <SectionLayout style={{ padding: 0 }}>
        <ProfileImageContainer>
          <EditProfileImageIcon width={96} height={96} />
        </ProfileImageContainer>
        <InputBox label="이름" />
      </SectionLayout>
      <SectionLayout>
        <MenuList menuNames={['로그아웃', '계정탈퇴']} isArrowVisible={false} />
      </SectionLayout>
    </MyPageLayout>
  );
}

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0;
`;
