import ArrowIcon from '@assets/icons/arrow/ArrowBack';
import styled from '@emotion/styled';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
  menuNames: string[];
  isArrowVisible?: boolean;
  listHeight?: number;
}

export default function MenuList({
  menuNames,
  isArrowVisible = true,
  listHeight = 40,
  ...props
}: IProps) {
  return (
    <ul {...props}>
      {menuNames.map(name => (
        <Item key={name} onClick={() => {}} listHeight={listHeight}>
          <span>{name}</span>
          {isArrowVisible && <ArrowIcon style={{ transform: 'rotate(180deg)' }} />}
        </Item>
      ))}
    </ul>
  );
}

const Item = styled.li<{ listHeight: number }>`
  height: ${({ listHeight }) => `${listHeight}px`};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  & + li {
    border-top: solid 0.3px ${({ theme }) => theme.color.base.gray.base};
  }
`;
