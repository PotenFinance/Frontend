interface IReport {
  total_cost: number;
  platform_id: string[];
}

interface IMonthReport {
  budget: 200000;
  monthly_report: {
    [key: number]: IReport;
  };
}
