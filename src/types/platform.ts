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
  isYearlyPlan: 'Y' | 'N';
}

interface ISignupPlatform {
  platformId: string;
  platformName: string; //TODO 추가
  platformType: string; //TODO 추가
  planId: string;
  isGroup: 'Y' | 'N';
  groupMembers: string; //TODO 추가
  isYearlyPay: 'Y' | 'N';
  billingMonth: string;
  billingDay: string;
}
