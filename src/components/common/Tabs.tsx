import styled from '@emotion/styled';

interface IProps {
  tabList: { id: string; txt: string }[];
  currentTab: string;
  handleChangeTab: (value: string) => void;
}

function Tabs({ tabList, currentTab, handleChangeTab }: IProps) {
  return (
    <List>
      {tabList.map(v => (
        <Item key={v.id} active={currentTab === v.id} onClick={() => handleChangeTab(v.id)}>
          {v.txt}
        </Item>
      ))}
    </List>
  );
}

export default Tabs;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li<{ active?: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ active }) => (active ? '1px 0px 2px 0px rgba(0, 0, 0, 0.10)' : 'none')};
  border-bottom: ${({ active }) => (active ? 'none' : '1.5px solid #EDEDED')};
  font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
  font-size: ${({ theme }) => theme.typography.heading_1.fontSize};
  line-height: ${({ theme }) => theme.typography.heading_1.lineHeight};
  cursor: pointer;
`;
