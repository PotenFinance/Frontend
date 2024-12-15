export const isFulfilledPlanOption = (plan?: ISignupPlatform): boolean => !!plan?.planId;

export const isFulfilledMemberOption = (plan?: ISignupPlatform): boolean =>
  plan?.isGroup == 'Y' ? !!plan.groupMembers : true;

export const isFulfilledBuillingOption = (plan?: ISignupPlatform): boolean =>
  plan?.isYearlyPay == 'Y' ? !!(plan.billingMonth && plan.billingDay) : !!plan?.billingDay;

export const isFulfilledPlan = (plan: ISignupPlatform): boolean =>
  isFulfilledPlanOption(plan) && isFulfilledMemberOption(plan) && isFulfilledBuillingOption(plan);
