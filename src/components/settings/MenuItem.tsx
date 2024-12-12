import styled from '@emotion/styled';
import ArrowIcon from '@assets/icons/arrow/ArrowBack';

interface IProps extends React.HTMLAttributes<HTMLLIElement> {
  isArrowVisible?: boolean;
  onMenuClick?: () => void;
}

export default function MenuItem({
  isArrowVisible = true,
  children,
  onMenuClick,
  ...props
}: IProps) {
  return (
    <Item onClick={onMenuClick} {...props}>
      <span>{children}</span>
      {isArrowVisible && <ArrowIcon style={{ transform: 'rotate(180deg)' }} />}
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  &:hover {
    cursor: pointer;
  }

  & + li {
    border-top: solid 0.3px ${({ theme }) => theme.color.base.gray.base};
  }
`;
