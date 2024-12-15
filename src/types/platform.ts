interface IPlatform {
  platformId: string;
  platformName: string;
  platformType: string;
}

interface IPlan {
  platformId: string;
  planId: string;
  planName: string;
  planFee: string | null;
  maxMembers: string | null;
  isYearlyPlan: TBoolean;
}

interface ISignupPlatform {
  platformId: string;
  platformName: string; //TODO 추가
  platformType: string; //TODO 추가
  planId: string;
  isGroup: TBoolean;
  groupMembers: string; //TODO 추가
  isYearlyPay: TBoolean;
  billingMonth: string;
  billingDay: string;
}
