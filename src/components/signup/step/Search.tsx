import SearchIcon from '@assets/icons/Search';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import BackHeader from '../BackHeader';
import { useServiceStore } from 'stores/useServiceStore';
import { useQuery } from '@tanstack/react-query';
import { getSearchPlatformsApi } from 'apis/platforms';
import { useState } from 'react';
import { BRAND_LOGO } from '@constants/logo';

interface IProps {
  handleClose: () => void;
}

const testData = [
  {
    platformId: 'M004',
    platformName: '스포티파이',
    platformType: '음악',
  },
  {
    platformId: 'O001',
    platformName: '넷플릭스',
    platformType: 'OTT',
  },
];

function SignupSearch({ handleClose }: IProps) {
  const { color } = useTheme();

  const [keyword, setKeyword] = useState('');

  const { addService } = useServiceStore();

  const { data } = useQuery<GetPlatformsRes>({
    queryKey: ['searchPlatforms', keyword],
    queryFn: () => getSearchPlatformsApi(keyword),
  });

  const handleClickItem = (service: IPlatform) => {
    addService(service);
    handleClose();
  };

  return (
    <>
      <BackHeader handleBack={handleClose} />
      <Container>
        {/* 컴포넌트 분리 ServiceSearch */}
        <Search>
          <Input value={keyword} onChange={e => setKeyword(e.target.value)} />
          <SearchButton>
            <SearchIcon width={36} height={36} color={color.secondary} />
          </SearchButton>
        </Search>
        <List>
          {/* 컴포넌트 분리 SearchedServiceItem */}
          {testData.map(v => (
            <Item key={v.platformId} onClick={() => handleClickItem(v)}>
              {BRAND_LOGO({ width: 40, height: 40 })['small'][v.platformId]}
              <div>
                <p>{v.platformName}</p>
                <span>{v.platformType}</span>
              </div>
            </Item>
          ))}
        </List>
      </Container>
    </>
  );
}

export default SignupSearch;

const Container = styled.div`
  padding: 20px 16px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SearchButton = styled.button`
  display: flex;
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
  gap: 8px;
  border-bottom: 0.3px solid ${({ theme }) => theme.color.base.black};
  cursor: pointer;
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
