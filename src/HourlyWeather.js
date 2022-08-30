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
  CartesianGrid,
} from 'recharts';

export default function HourlyWeather({ data }) {
  return (
    <Box h={['85%', '95%']} w={['85vw', '100%']} p={2}>
      <ResponsiveContainer>
        <LineChart width={'100%'} height={'100%'} data={data}>
          <Legend verticalAlign="top" height={40} />
          
          <XAxis dataKey="time">
            <Label value="Time" offset={-5} position="insideBottom" />
          </XAxis>

          <YAxis
            domain={[dataMin => (Math.floor(dataMin - 2)), dataMax => (Math.ceil(dataMax + 2))]}
            dataKey="temperature"
            unit={'°C'}>
            <Label
              value="Temperature"
              angle={-90}
              dx={-25}
              position="leftInside"
            />
          </YAxis>

          <Tooltip dataKey="temperature" />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke='orange'
            dot={false}
            activeDot={true}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
