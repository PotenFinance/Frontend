import styled from '@emotion/styled';
import { PlanOptionContainer, PlanOptionList, PlanOptionTitle } from '../styled';
import Status from '@components/common/Status';
import { IPlan, usePlanStore } from 'stores/usePlanStore';
import { useState } from 'react';

interface IProps {
  plan: IPlan;
  platformId: number;
}

const selectOptions = [
  { planName: '매달', isYearlyPay: false },
  { planName: '매년', isYearlyPay: true },
];

function BuillingOption({ plan, platformId }: IProps) {
  const [openSelect, setOpenSelect] = useState(false);

  const { updateIsYearlyPay, updateBillingMonth, updateBillingDay } = usePlanStore();

  const handleClickOption = (isYearlyPay: boolean) => {
    updateIsYearlyPay({ platformId, isYearlyPay });
    setOpenSelect(false);
  };

  return (
    <PlanOptionContainer>
      <PlanOptionTitle>
        <Status
          status={
            (plan.isYearlyPay ? plan.billingMonth && plan.billingDay : plan.billingDay)
              ? 'success'
              : 'error'
          }
        />
        <span>결제일</span>
      </PlanOptionTitle>
      <PlanOptionList>
        <BuillingItem>
          <Select>
            <Input
              placeholder="매달"
              readOnly
              value={plan.isYearlyPay ? '매년' : '매달'}
              onClick={() => setOpenSelect(!openSelect)}
            />
            {openSelect && (
              <ul>
                {selectOptions.map(v => (
                  <li key={v.planName} onClick={() => handleClickOption(v.isYearlyPay)}>
                    {v.planName}
                  </li>
                ))}
              </ul>
            )}
          </Select>
          마다&nbsp;
          {plan.isYearlyPay && (
            <>
              <Input
                placeholder="1"
                value={plan.billingMonth}
                onChange={e => updateBillingMonth({ platformId, billingMonth: e.target.value })}
              />
              월&nbsp;
            </>
          )}
          <Input
            placeholder="1"
            value={plan.billingDay}
            onChange={e => updateBillingDay({ platformId, billingDay: e.target.value })}
          />
          일에 결제하고 있어요.
        </BuillingItem>
      </PlanOptionList>
    </PlanOptionContainer>
  );
}

export default BuillingOption;

const BuillingItem = styled.li`
  padding: 8px 16px;
  display: flex;
  /* gap: 1em; */
  font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_1.fontSize};
  line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
`;

const Select = styled.div`
  position: relative;
  ul {
    position: absolute;
    top: calc(100% + 4px);
  }
`;

const Input = styled.input`
  width: 2em;
  text-decoration: underline;
`;
