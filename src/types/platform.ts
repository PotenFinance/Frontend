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
  planId: number;
  isGroup: boolean;
  isYearlyPay: boolean;
  billingMonth: number;
  billingDay: number;
}

interface GetPlatformsRes {
  data: IPlatform[];
}

interface GetPlatformPlanRes {
  data: IPlan[];
}
