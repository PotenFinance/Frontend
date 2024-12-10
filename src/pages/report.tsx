import Tabs from '@components/common/Tabs';
import MonthReportChart from '@components/report/MonthReportChart';
import MonthReportList from '@components/report/MonthReportList';
import PlatformReportChart from '@components/report/PlatformReportChart';
import PlatformReportList from '@components/report/PlatformReportList';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

function ReportPage() {
  const router = useRouter();
  const { type } = router.query;

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
          <MonthReportChart />
          <MonthReportList />
        </div>
      )}
    </Container>
  );
}

export default ReportPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
