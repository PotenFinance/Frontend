import Button from '@components/common/Button';
import MyPageLayout from '@components/layout/MypageLayout';
import { InputBox } from '@components/settings';
import { characterRegex } from '@constants/index';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { updateUserInfo } from 'apis/profile';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ProfileEdit() {
  const theme = useTheme();
  const router = useRouter();

  const [username, setUsername] = useState(''); // TODO: 회원정보 가져와서 회원이름 기본값으로 넣어주기
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isError) {
      setIsError(false);
    }
    setUsername(e.target.value);
  };

  const mutation = useMutation({
    mutationFn: (userInfo: IEditProfileData) => updateUserInfo(userInfo),
    onSuccess: res => {
      if (res.success) {
        alert('이름 수정이 완료되었습니다.');
        setUsername('');
        router.push('/settings/profile');
      } else {
        alert(`수정 중 오류가 발생하였어요. 잠시 뒤 시도해주세요.`);
      }
    },
    onError: err => {
      console.log(`내정보 수정 오류 발생: ${err}`);
      alert('수정 중 오류가 발생하였어요. 잠시 뒤 시도해주세요.');
      return;
    },
  });

  const validateFormData = (formData: IEditProfileData) => {
    const { userId, newUserName } = formData;

    // TODO: 추후 userId 검증
    // if (isNaN(+userId)) {
    //   return false;
    // }

    // 한글, 영문 아닌 경우
    if (!characterRegex.test(newUserName)) {
      setIsError(true);
      alert(`올바른 값을 입력해주세요(숫자/특수기호 입력 불가)`);
      setUsername('');
      return;
    }

    // 최대 5글자 이상의 경우
    if (newUserName.length > 8) {
      setIsError(true);
      alert(`최대 입력 글자 수를 초과하였습니다 (최대 8글자)`);
      setUsername('');
      return;
    }

    return true;
  };

  const handleSubmit = ({
    e,
    formData,
  }: {
    e: React.FormEvent<HTMLFormElement>;
    formData: IEditProfileData;
  }) => {
    e.preventDefault();
    const isValid = validateFormData(formData);

    if (isValid) {
      mutation.mutate(formData); // TODO: userId store에서 가져와서 넣기
    }
  };

  return (
    <MyPageLayout
      pageName="내 정보 수정하기"
      onBackButtonClick={() => router.push('/settings/profile')}
    >
      {/* TODO: userId store에서 가져오기 */}
      <Form onSubmit={e => handleSubmit({ e, formData: { userId: 1234, newUserName: username } })}>
        <InputBox inputValue={username} onInputChange={handleChange} isError={isError} />
        <Button
          bgColor={!username ? theme.color.base.gray._c : theme.color.primary._2}
          textColor={theme.color.base.white}
          text="수정하기"
          style={{ position: 'absolute', bottom: '68px' }}
          disabled={!username}
          type="submit"
        />
      </Form>
    </MyPageLayout>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;
  padding: 0 24px;
`;
