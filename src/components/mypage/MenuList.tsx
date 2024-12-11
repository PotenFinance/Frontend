import ArrowIcon from '@assets/icons/arrow/ArrowBack';
import styled from '@emotion/styled';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
  menuNames: string[];
}

export default function MenuList({ menuNames, ...props }: IProps) {
  return (
    <ul {...props}>
      {menuNames.map(name => (
        <Item key={name} onClick={() => {}}>
          <span>{name}</span>
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </Item>
      ))}
    </ul>
  );
}

const Item = styled.li`
  height: 40px;
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
