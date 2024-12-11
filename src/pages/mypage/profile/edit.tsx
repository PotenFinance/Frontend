import Button from '@components/common/Button';
import MyPageLayout from '@components/layout/MypageLayout';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

export default function ProfileEdit() {
  const theme = useTheme();
  const [username, setUsername] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

  return (
    <MyPageLayout pageName="내 정보 수정하기">
      <Form>
        <InnerWrapper>
          <Label htmlFor="">이름</Label>
          <Input type="text" value={username} onChange={handleChange} />
        </InnerWrapper>
        <Button
          bgColor={!username ? theme.color.base.gray._c : theme.color.primary._2}
          textColor={theme.color.base.white}
          text="수정하기"
          style={{ position: 'absolute', bottom: '68px' }}
          disabled={!username}
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
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.title_3.fontFamily};
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
`;

const Input = styled.input`
  margin-top: 16px;
  border-bottom: solid 1px ${({ theme }) => theme.color.base.gray.base};
  padding: 8px 4px;
`;
