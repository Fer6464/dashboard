import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';
import { type StudioResponse, type StudioListResponse } from '../types/DashboardTypes';

type StudioMetric = 'appearance_count' | 'average_score';

interface StudioBarChartProps {
  data: StudioListResponse | undefined;
  metric?: StudioMetric;      // which numeric field to plot on the y-axis
  title?: string;
  height?: number;
}

function normalizeToArray(data: StudioListResponse | undefined): StudioResponse[] {
  if (!data) return [];
  return Array.isArray(data) ? data : Object.values(data);
}

export default function StudioBarChart({
  data,
  metric = 'appearance_count',
  title,
  height = 300,
}: StudioBarChartProps) {
  const studios = normalizeToArray(data);

  if (studios.length === 0) {
    return <p>No studio data to display.</p>;
  }

  const labels = studios.map((s) => s.name);        // x: studio name (string)
  const values = studios.map((s) => s[metric]);       // y: selected metric (number)

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600, color: '#fff' }}>
        {title}
      </Typography>

      <BarChart
        xAxis={[
          {
            data: labels,
            scaleType: 'band',
            tickLabelStyle: {
              angle: -30,
              textAnchor: 'end',
              fill: '#fff',       // studio names under the bars
            },
          },
        ]}
        series={[{ data: values, label: title ?? metric }]}
        height={height}
        margin={{ bottom: 70 }}   // extra room so rotated labels aren't clipped
        borderRadius={8}
        grid={{ horizontal: true }}
        colors={['#7C8CFF']}
        slotProps={{
          legend: {
            sx: { fill: '#fff' },
          },
        }}
        sx={{
          '& .MuiBarElement-root': {
            transition: 'opacity 0.2s ease',
          },
          '& .MuiBarElement-root:hover': {
            opacity: 0.8,
          },
          '& .MuiChartsAxis-line, & .MuiChartsAxis-tick': {
            stroke: 'rgba(255,255,255,0.2)',
          },
          '& .MuiChartsAxis-tickLabel': {
            fill: '#fff',
          },
          '& .MuiBarLabel-root': {
            fill: '#fff',
          },
          '& .MuiChartsLegend-label': {
            color: '#fff',
          },
          '& .MuiChartsGrid-line': {
            stroke: 'rgba(255,255,255,0.08)',
          },
        }}
      />
    </Box>
  )
}