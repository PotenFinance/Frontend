import styled from '@emotion/styled';
import { PlanOptionContainer, PlanOptionList, PlanOptionTitle } from '../styled';
import Status from '@components/common/Status';
import { IPlan } from 'stores/usePlanStore';

interface IProps {
  plan: IPlan;
  platformId: number;
}

function BuillingOption({ plan, platformId }: IProps) {
  return (
    <PlanOptionContainer>
      <PlanOptionTitle>
        <Status status="error" />
        <span>결제일</span>
      </PlanOptionTitle>
      <PlanOptionList>
        <BuillingItem>
          <input placeholder="매달" />
          마다 <input placeholder="1일" />에 결제하고 있어요.
        </BuillingItem>
      </PlanOptionList>
    </PlanOptionContainer>
  );
}

export default BuillingOption;

const BuillingItem = styled.li`
  padding: 8px 16px;
  font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_1.fontSize};
  line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
  input {
    width: 2em;
    text-decoration: underline;
  }
`;
