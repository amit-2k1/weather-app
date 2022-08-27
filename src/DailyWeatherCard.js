import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import SVGIcon from './SVGIcon';
import dayjs from 'dayjs';

export default function DailyWeatherCard({
  timestamp,
  temperature,
  icon,
  description,
}) {
  return (
    <Box minW='150' mx={2} my={4}>
      <VStack w='100%' h='100%' p={4} bg="white" borderRadius={'xl'}>
        <SVGIcon
          width={40}
          height={30}
          iconName={icon}
          description={description}
        />
        <Text fontSize="md" fontWeight={'semibold'}>
          {dayjs.unix(timestamp).format('D, MMM')}
        </Text>
        <Text fontSize="md" fontWeight={'semibold'}>
          {temperature}°C
        </Text>
      </VStack>
    </Box>
  );
}
