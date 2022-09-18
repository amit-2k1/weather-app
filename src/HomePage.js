import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Header from './Header';
import LocationInput from './LocationInput';

export default function HomePage({ onLocationChange }) {
  return (
    <Box 
      height='100vh'
      width='100vw'
      className="HomePage" 
      bgImage="url('bg.jpg')"
      bgPosition="center"
      sbgRepeat="no-repeat"
    >
      <Flex
        height={'100%'}
        align={'center'}
        justify={'center'}
        direction={'column'}
      >
        <Header />
        <Flex
          height={'100%'}
          align={'center'}
          justify={'center'}
          direction={'column'}
        >
          <Heading as="h4" mb={'10'} align={'center'}>
            Get the accurate <br /> Weather Data!
          </Heading>
          <Text mb={5} fontSize='lg' align={'center'}>
            Whatever your plans, wherever you
            <br /> are, stay one step ahead with the
            <br /> Weather App
          </Text>
          <LocationInput onSubmit={onLocationChange} 
          _placeholder={{ opacity: 0.6, color: 'white'}} />
        </Flex>
      </Flex>
    </Box>
  );
}
