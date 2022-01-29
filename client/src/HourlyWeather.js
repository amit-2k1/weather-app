import { Box } from '@chakra-ui/react';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Label,
} from 'recharts';

export default function HourlyWeather({ data }) {
  return (
    <Box h={['30vh']} w="100%" p={2}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <YAxis dataKey="temperature" interval="preserveStartEnd">
            <Label value="Temperature" angle={-90} position="leftInside" />
          </YAxis>
          <XAxis dataKey="time" interval="preserveStart">
            <Label value="Time" offset={-5} position="insideBottom" />
          </XAxis>
          <Legend verticalAlign="top" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temperature"
            dot={false}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
