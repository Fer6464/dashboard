import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';
import { type GenreResponse, type GenreListResponse } from '../types/DashboardTypes';

type GenreMetric = 'appearance_count' | 'average_score';

interface GenreBarChartProps {
  data: GenreListResponse | undefined;
  metric?: GenreMetric;       // which numeric field to plot on the y-axis
  title?: string;
  height?: number;
}

function normalizeToArray(data: GenreListResponse | undefined): GenreResponse[] {
  if (!data) return [];
  return Array.isArray(data) ? data : Object.values(data);
}

export default function GenreBarChart({
  data,
  metric = 'appearance_count',
  title,
  height = 300,
}: GenreBarChartProps) {
  const genres = normalizeToArray(data);

  if (genres.length === 0) {
    return <p>No genre data to display.</p>;
  }

  const labels = genres.map((g) => g.genre);       // x: genre name (string)
  const values = genres.map((g) => g[metric]);      // y: selected metric (number)

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
              fill: '#fff',       // genre names under the bars
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
  );
}
