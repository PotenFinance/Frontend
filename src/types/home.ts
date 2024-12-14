interface IHomeData {
  /** 유저 이름 */
  userName: string;
  /** 유저가 설정한 예산 */
  userBudget: number;
  /** 총 구독 비용 */
  totalSubscriptionCost: number;
  /** 총 구독 서비스 개수 */
  totalSubscriptions: number;
  /** 남은 예산 */
  remainingBudget: number;
  /** 조회 기준 구독 년도 */
  subscriptionYear: number;
  /** 조회 기준 구독 월 */
  subscriptionMonth: number;
  /** 구독 중인 서비스 상세 */
  subscriptionDetails: ISubscriptionDetails[];
  /* 연간 구독 비용 */
  annualSubscriptionCost: IAnnualSubscriptionCost;
}

/** 구독 정보 상세 */
interface ISubscriptionDetails {
  platformId: string;
  /** 구독 플랫폼명 */
  platformName: string;
  /** 플랫폼 종류 */
  platformType: string;
  /** 실 지불금액(월 구독 금액) */
  actualCost: number;
  /** 구독 갱신 잔여일 */
  renewalDaysLeft: number;
  /** 구독플랜명 */
  planName: string;
  isYearlyPay: string;
  /** 개인구독/그룹구독 여부 */
  isGroup: string;
  /** 실제 이용중인 인원 */
  activeUsers: string;
  activeMembers: string;
}

/** 연간 구독 지출비용 */
interface IAnnualSubscriptionCost {
  /** 조회 기준 년도 */
  year: number;
  /** 당월 지출 비용 */
  currentMonthCost: number;
  /** 전월 지출 비용 */
  lastMonthCost: number;
  /** 2개월 전 지출 비용 */
  twoMonthsBeforeCost: number;
  /** 3개월 전 지출 비용 */
  threeMonthsBeforeCost: number;
  /** 누적 지출 비용 */
  totalCost: number;
  /** 증감 비율 */
  costChange: number;
  /** 비용 증감율 */
  costChangeAmount: number;
  /** 예산 초과 금액 */
  budgetOverflow: number;
}

/** 당월 구독 내역 개요 */
type TOverviewData = Pick<
  IHomeData,
  | 'userName'
  | 'totalSubscriptionCost'
  | 'totalSubscriptions'
  | 'subscriptionDetails'
  | 'remainingBudget'
>;

/** 나의 구독 서비스 상세 */
type TSubscriptionDetail = Pick<
  ISubscriptionDetails,
  'platformId' | 'platformName' | 'planName' | 'actualCost' | 'renewalDaysLeft'
>;

/** 연간 구독 비용 */
type TAnnualSubsSpending = Pick<
  IAnnualSubscriptionCost,
  | 'totalCost'
  | 'threeMonthsBeforeCost'
  | 'twoMonthsBeforeCost'
  | 'lastMonthCost'
  | 'costChange'
  | 'currentMonthCost'
  | 'costChangeAmount'
> & { userBudget: IHomeData['userBudget'] };

/** 예산 초과 현황 */
type TBudgetStatus = Pick<IHomeData, 'userBudget'> & {
  budgetOverflow: IAnnualSubscriptionCost['budgetOverflow'];
};
