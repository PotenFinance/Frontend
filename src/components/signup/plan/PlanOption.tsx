import Status from '@components/common/Status';
import { PlanOptionContainer, PlanOptionItem, PlanOptionList, PlanOptionTitle } from '../styled';
import Checkbox from '@components/common/Checkbox';
import { IPlan, usePlanStore } from 'stores/usePlanStore';

interface IProps {
  plan: IPlan;
  platformId: number;
}

const options = [
  {
    platformId: 101,
    planId: 1001,
    planName: '스탠다드 (연간 / 1명)',
    planCost: 50000,
    maxMembers: 1,
    isYearlyPlan: true,
  },
  {
    platformId: 101,
    planId: 1002,
    planName: '스탠다드 (연간 / 2명)',
    planCost: 80000,
    maxMembers: 1,
    isYearlyPlan: true,
  },
  {
    platformId: 101,
    planId: 1003,
    planName: '스탠다드 (연간 / 3명)',
    planCost: 100000,
    maxMembers: 3,
    isYearlyPlan: true,
  },
  {
    platformId: 101,
    planId: 1004,
    planName: '스탠다드 (월간)',
    planCost: 90000,
    maxMembers: 1,
    isYearlyPlan: true,
  },
];

function PlanOption({ plan, platformId }: IProps) {
  const { updatePlanId } = usePlanStore();

  return (
    <PlanOptionContainer>
      <PlanOptionTitle>
        <Status status={plan.planId ? 'success' : 'error'} />
        <span>플랜</span>
      </PlanOptionTitle>
      <PlanOptionList>
        {options.map(v => (
          <PlanOptionItem key={v.planId}>
            <div>
              <p>{v.planName}</p>
              <span>{v.planCost.toLocaleString()}원 / 1개월</span>
            </div>
            <Checkbox
              checked={plan.planId === v.planId}
              onClick={() => updatePlanId({ platformId, planId: v.planId })}
            />
          </PlanOptionItem>
        ))}
      </PlanOptionList>
    </PlanOptionContainer>
  );
}

export default PlanOption;
