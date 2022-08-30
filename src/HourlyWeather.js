import { Box } from '@chakra-ui/react';
import React from 'react';
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Label,
  AreaChart,
  Area,
} from 'recharts';

export default function HourlyWeather({ data }) {
  return (
    <Box h={'300px'} w={'90%'} p={2}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <Legend verticalAlign="top" height={40} />

          <defs>
            <linearGradient id="ColorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="orange" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="orange" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <XAxis dataKey="time">
            <Label value="Time" dy={10} position="insideBottom" />
          </XAxis>

          <YAxis
            dataKey="temperature"
            domain={[dataMin => (Math.floor(dataMin - 2)), dataMax => (Math.ceil(dataMax + 2))]}
            unit={'°C'}>
            <Label
              value="Temperature"
              angle={-90}
              dx={-25}
              position="leftInside"
            />
          </YAxis>

          <Tooltip dataKey="temperature" />
          <Area
            type="monotone"
            dataKey="temperature"
            stroke='orange'
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#ColorTemp)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
