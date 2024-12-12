import Checkbox from '@components/common/Checkbox';
import { PlanOptionContainer, PlanOptionItem, PlanOptionList, PlanOptionTitle } from '../styled';
import styled from '@emotion/styled';
import { IPlan, usePlanStore } from 'stores/usePlanStore';
import Status from '@components/common/Status';

interface IProps {
  plan?: IPlan;
  platformId: number;
}

const options = [
  { planName: '혼자서 결제하고 있어요.', isGroup: false },
  { planName: '같이 결제하고 있어요.', isGroup: true },
];

function MemberOption({ plan, platformId }: IProps) {
  const { updateIsGroup, updateGroupMembers } = usePlanStore();

  return (
    <PlanOptionContainer>
      <PlanOptionTitle>
        <Status status={(plan?.isGroup ? plan.groupMembers : true) ? 'success' : 'error'} />
        <span>개인 / 그룹</span>
      </PlanOptionTitle>
      <PlanOptionList>
        {options.map(v => (
          <PlanOptionItem key={v.planName}>
            <div>
              <p>{v.planName}</p>
            </div>
            <Checkbox
              checked={plan?.isGroup === v.isGroup}
              onClick={() => updateIsGroup({ platformId, isGroup: v.isGroup })}
            />
          </PlanOptionItem>
        ))}
        {plan?.isGroup && (
          <GroupMembersItem>
            <p>그룹원이 몇 명(본인 포함)인가요?</p>
            <div>
              <input
                placeholder="0"
                value={plan.groupMembers}
                onChange={e => updateGroupMembers({ platformId, groupMembers: e.target.value })}
              />
              명
            </div>
          </GroupMembersItem>
        )}
      </PlanOptionList>
    </PlanOptionContainer>
  );
}

export default MemberOption;

const GroupMembersItem = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    font-family: ${({ theme }) => theme.typography.title_3.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_3.fontSize};
    line-height: ${({ theme }) => theme.typography.title_3.lineHeight};
  }
  div {
    font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_2.fontSize};
    line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
    input {
      width: 2em;
      text-decoration: underline;
    }
  }
`;
