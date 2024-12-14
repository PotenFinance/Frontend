import Tabs from '@components/common/Tabs';
import MonthReportChart from '@components/report/MonthReportChart';
import MonthReportList from '@components/report/MonthReportList';
import PlatformReportChart from '@components/report/PlatformReportChart';
import PlatformReportList from '@components/report/PlatformReportList';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { getYear } from '@utils/date';
import { getReportApi } from 'apis/report';
import { useRouter } from 'next/router';

const testData = {
  budget: 300000,
  monthly_report: {
    1: {
      total_cost: 89000,
      platform_id: ['O001', 'S001'],
    },
    2: {
      total_cost: 130000,
      platform_id: ['O001'],
    },
    3: {
      total_cost: 130000,
      platform_id: ['O001'],
    },
    4: {
      total_cost: 130000,
      platform_id: ['O001'],
    },
    5: {
      total_cost: 130000,
      platform_id: ['O001'],
    },
    6: {
      total_cost: 130000,
      platform_id: ['O001'],
    },
    7: {
      total_cost: 130000,
      platform_id: ['O001'],
    },
    8: {
      total_cost: 130000,
      platform_id: ['O001'],
    },
    9: {
      total_cost: 130000,
      platform_id: ['O001'],
    },
    10: {
      total_cost: 130000,
      platform_id: ['O001'],
    },
    11: {
      total_cost: 300000,
      platform_id: ['O001'],
    },
    12: {
      total_cost: 200000,
      platform_id: ['O001'],
    },
  },
};

function ReportPage() {
  const router = useRouter();
  const { type = 'month' } = router.query;

  const { data } = useQuery<IGetReportRes>({
    queryKey: ['report'],
    queryFn: () => getReportApi(getYear()),
  });

  const handleChangeTab = (type: string) => {
    router.push(`/report?type=${type}`);
  };

  return (
    <Container>
      <Tabs
        tabList={[
          { id: 'platform', txt: '플랫폼별' },
          { id: 'month', txt: '월별' },
        ]}
        currentTab={type as string}
        handleChangeTab={handleChangeTab}
      />
      {type === 'platform' && (
        <div>
          <PlatformReportChart />
          <PlatformReportList />
        </div>
      )}
      {type === 'month' && (
        <div>
          <MonthReportChart data={testData.monthly_report} budget={testData.budget} />
          <MonthReportList data={testData.monthly_report} />
        </div>
      )}
    </Container>
  );
}

export default ReportPage;

const Container = styled.div`
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
`;
