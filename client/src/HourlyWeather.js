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
    <Box h={['80%', '90%']} w={['85vw', '100%']} p={2}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Legend verticalAlign="top" height={40} />
          <YAxis
            dataKey="temperature"
            domain={['auto', 'auto']}
            unit={'C'}
            interval="preserveStartEnd"
          >
            <Label
              value="Temperature"
              angle={-90}
              dx={-20}
              position="leftInside"
            />
          </YAxis>
          <XAxis dataKey="time" interval="preserveStart">
            <Label value="Time" offset={-5} position="insideBottom" />
          </XAxis>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temperature"
            dot={false}
            activeDot={true}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
