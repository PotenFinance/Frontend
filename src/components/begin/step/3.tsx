import SearchIcon from '@assets/icons/Search';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import BackHeader from '../BackHeader';
import SpotifySmallLogo from '@assets/icons/logo/small/Spotify';

function BeginStep3() {
  const router = useRouter();
  const { color } = useTheme();

  return (
    <>
      <BackHeader handleBack={() => router.push('/begin/step/2')} />
      <Container>
        {/* 컴포넌트 분리 ServiceSearch */}
        <Search>
          <Input />
          <button>
            <SearchIcon width={44} height={44} color={color.secondary} />
          </button>
        </Search>
        <List>
          {/* 컴포넌트 분리 SearchedServiceItem */}
          <Item>
            <SpotifySmallLogo width={40} height={40} color={color.brand.spotify} />
            <div>
              <p>스포티파이</p>
              <span>음악</span>
            </div>
          </Item>
        </List>
      </Container>
    </>
  );
}

export default BeginStep3;

const Container = styled.div`
  padding: 20px 16px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.color.secondary};
  box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.1);
  font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_1.fontSize};
  line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 0.3px solid ${({ theme }) => theme.color.base.black};
  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    p {
      font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_1.fontSize};
      line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
    }
    span {
      color: ${({ theme }) => theme.color.base.gray.base};
      font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_2.fontSize};
      line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
    }
  }
`;
