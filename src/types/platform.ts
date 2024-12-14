interface IPlatform {
  platformId: string;
  platformName: string;
  platformType: string;
}

interface IPlan {
  platformId: string;
  planId: string;
  planName: string;
  planCost: string;
  maxMembers: string;
  isYearlyPlan: boolean;
}

interface ISignupPlatform {
  platformId: string;
  platformName: string; //TODO 추가
  platformType: string; //TODO 추가
  planId: string;
  isGroup: boolean;
  groupMembers: string; //TODO 추가
  isYearlyPay: boolean;
  billingMonth: string;
  billingDay: string;
}

interface GetPlatformsRes extends IRes {
  data: IPlatform[];
}

interface GetPlatformPlanRes extends IRes {
  data: IPlan[];
}
