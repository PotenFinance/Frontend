import { PlanOptionItem } from '../styled';
import Checkbox from '@components/common/Checkbox';
import { usePlanStore } from 'stores/usePlanStore';
import PlanOptionLayout from './PlanOptionLayout';
import { isFulfilledPlanOption } from '@utils/platform';

interface IProps {
  options?: IPlan[];
  plan?: ISignupPlatform;
  platformId: string;
}

function PlanOption({ options, plan, platformId }: IProps) {
  const { updatePlanId } = usePlanStore();

  return (
    <PlanOptionLayout success={isFulfilledPlanOption(plan)} title="플랜">
      {options?.map(v => (
        <PlanOptionItem key={v.planId}>
          <div>
            <p>{v.planName}</p>
            <span>{(v.planFee || 0).toLocaleString()}원 / 1개월</span>
          </div>
          <Checkbox
            checked={plan?.planId === v.planId}
            onClick={() => updatePlanId({ platformId, planId: v.planId })}
          />
        </PlanOptionItem>
      ))}
    </PlanOptionLayout>
  );
}

export default PlanOption;
