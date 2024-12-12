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

interface GetPlatformsRes {
  data: IPlatform[];
}

interface GetPlatformPlanRes {
  data: IPlan[];
}
