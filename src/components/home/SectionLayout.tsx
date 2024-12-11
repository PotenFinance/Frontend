import styled from '@emotion/styled';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  children: React.ReactNode;
  categoryList?: { id: number; name: string }[];
  /** 맨첫번째 섹션인지 여부 */
  isFirst?: boolean;
}

/** 홈화면 공통 section 레이아웃 */
export default function SectionLayout({
  children,
  heading,
  categoryList,
  isFirst,
  ...props
}: IProps) {
  return (
    <Section isFirst={isFirst} {...props}>
      <HeadingWrapper>
        <Heading>{heading}</Heading>
        {categoryList && (
          <CategoryFilterList>
            {categoryList?.map(category => (
              <CategoryFilterTab key={category.id}>
                <button>{category.name}</button>
              </CategoryFilterTab>
            ))}
          </CategoryFilterList>
        )}
      </HeadingWrapper>
      {children}
    </Section>
  );
}
const Section = styled.section<{ isFirst?: boolean }>`
  padding: ${({ isFirst }) => (isFirst ? '28px 18px' : '21px 18px')};

  & + section {
    margin-top: 4px;
    border-top: solid 4px #dbdbdb;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
`;

const Heading = styled.h3`
  font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading_1.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
`;

const CategoryFilterList = styled.ul`
  display: flex;

  & li + li {
    margin-left: 7px;
  }
`;

const CategoryFilterTab = styled.li`
  border: solid 1px red;
  & button {
    background-color: '#EBEBEB';
    padding: 11px 13px;
  }
`;
