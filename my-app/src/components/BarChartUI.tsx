import { BarChart } from '@mui/x-charts';

interface BarChartUIProps {
    name?: string;
    score?: string;

 }

export default function BasicBars(props: BarChartUIProps) {
  return (
    <BarChart
      xAxis={[{ data: [] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={300}
    />
  );
}
