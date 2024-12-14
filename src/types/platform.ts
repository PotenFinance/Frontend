interface IPlatform {
  platformId: number;
  platformName: string;
  platformType: string;
}

interface IPlan {
  platformId: number;
  planId: number;
  planName: string;
  planCost: number;
  maxMembers: number;
  isYearlyPlan: boolean;
}

interface ISignupPlatform {
  platformId: number;
  platformName: string; //TODO 추가
  platformType: string; //TODO 추가
  planId: number;
  isGroup: boolean;
  groupMembers: string; //TODO 추가
  isYearlyPay: boolean;
  billingMonth: string;
  billingDay: string;
}
