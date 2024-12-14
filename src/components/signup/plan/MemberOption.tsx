import Checkbox from '@components/common/Checkbox';
import { PlanOptionItem } from '../styled';
import styled from '@emotion/styled';
import { usePlanStore } from 'stores/usePlanStore';
import PlanOptionLayout from './PlanOptionLayout';
import { isFulfilledMemberOption } from '@utils/platform';
import { replaceNonNumeric } from '@utils/regex';

interface IProps {
  plan?: ISignupPlatform;
  platformId: string;
}

const options: { planName: string; isGroup: TBoolean }[] = [
  { planName: '혼자서 결제하고 있어요.', isGroup: 'N' },
  { planName: '같이 결제하고 있어요.', isGroup: 'N' },
];

function MemberOption({ plan, platformId }: IProps) {
  const { updateIsGroup, updateGroupMembers } = usePlanStore();

  return (
    <PlanOptionLayout success={isFulfilledMemberOption(plan)} title="개인 / 그룹">
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
              onChange={e =>
                updateGroupMembers({ platformId, groupMembers: replaceNonNumeric(e.target.value) })
              }
            />
            명
          </div>
        </GroupMembersItem>
      )}
    </PlanOptionLayout>
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
