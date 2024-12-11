import styled from '@emotion/styled';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  children: React.ReactNode;
  categoryList?: { id: number; name: string }[];
}

/** 공통 section 레이아웃
 * @description 홈화면 및 마이페이지에서 사용
 */
export default function SectionLayout({ children, heading, categoryList, ...props }: IProps) {
  return (
    <Section {...props}>
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
const Section = styled.section`
  padding: 12px 16px;

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
