import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import dayjs from 'dayjs';

import LocationInput from './LocationInput';
import WeatherCards from './WeatherCards';
import SVGIcon from './SVGIcon';

export default function TodayWeather({ current, location, fromKtoC }) {
  return (
    <>
      <VStack m={4} p={3} borderRadius={'xl'} bg={'teal.200'}>
        <Heading as="h3" mb={2} size="md" textAlign={'center'}>
          {location}
        </Heading>

        <SVGIcon
          width={200}
          height={200}
          iconName={current.weather[0].icon}
          description={current.weather.description}
        />

        <Text mb={6}>{'Today, ' + dayjs().format('DD MMMM')}</Text>
        <Heading as="p" size="3xl" fontWeight={'medium'}>
          {fromKtoC(current.temp)}
          <Text as="sup"> o</Text>C
        </Heading>
        <Text fontSize={'xl'} fontWeight={'bold'}>
          {current.weather[0].main}
        </Text>
      </VStack>

      <WeatherCards
        attr1Name={'UV Index'}
        attr1={current.uvi}
        attr2Name={'Wind'}
        attr2={current.wind_speed}
        unit2={'km/h'}
      />
      <WeatherCards
        attr1Name={'Humidity'}
        attr1={current.humidity}
        unit1={'%'}
        attr2Name={'Visibility'}
        attr2={current.visibility}
        unit2={'km'}
      />
    </>
  );
}
