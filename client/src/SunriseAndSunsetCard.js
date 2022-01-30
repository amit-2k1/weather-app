import { Heading, VStack, Image, Text, HStack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import SunRiseIcon from './weather-svg/sunrise.svg';
import SunSetIcon from './weather-svg/sunset.svg';

export default function SunriseAndSunsetCard({ sunrise, sunset }) {
  const getTimeFromSeconds = timestamp => {
    return dayjs.unix(timestamp).format('hh:mm A');
  };

  return (
    <>
      <Heading as="h5" mb={2} p={1} size="md">
        Sunrise & Sunset
      </Heading>
      <VStack>
        <HStack spacing={[10, 20, 4]}>
          <Image src={SunRiseIcon} w="60px" h="60px" alt="Sunrise Image" />
          <Text fontWeight={'semibold'}>{getTimeFromSeconds(sunrise)}</Text>
        </HStack>
        <HStack spacing={[10, 20, 4]}>
          <Image src={SunSetIcon} w="60px" h="60px" alt="Sunset Image" />
          <Text fontWeight={'semibold'}>{getTimeFromSeconds(sunset)}</Text>
        </HStack>
      </VStack>
    </>
  );
}
