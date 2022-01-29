import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function WeatherCards({
  attr1Name,
  attr1,
  attr2Name,
  attr2,
  unit1,
  unit2,
}) {
  return (
    <HStack h="16%" m={4} fontSize={'3xl'} fontWeight={'semibold'}>
      <Box w="50%" h="100%" p={2} mr={'1%'} bg={'white'} borderRadius={'xl'}>
        <Text fontSize="md" mb={2} textAlign={'left'}>
          {attr1Name}
        </Text>
        <Text textAlign="center">{`${attr1}${unit1 ? unit1 : ''}`}</Text>
      </Box>
      <Box w="50%" h="100%" p={2} bg={'white'} borderRadius={'xl'}>
        <Text fontSize="md" mb={2} textAlign={'left'}>
          {attr2Name}
        </Text>
        <Box display={'flex'} alignItems={'baseline'}>
          <Text>{attr2}</Text>
          <Text fontSize={'md'}>{unit2 ? unit2 : ''}</Text>
        </Box>
      </Box>
    </HStack>
  );
}
