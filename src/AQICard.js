import React from 'react';
import { Heading } from '@chakra-ui/react';

export default function AQICard({ value, color, name }) {
  return (
    <>
      <Heading as="h5" mb={2} p={1} size="md">
        AQI Index
      </Heading>
      <Heading as="p" size={'2xl'} fontWeight={'semibold'} textAlign={'center'}>
        {value}/5
      </Heading>
      <Heading
        as="p"
        mt={4}
        fontWeight={'semibold'}
        textAlign={'center'}
        color={color}
      >
        {name}
      </Heading>
    </>
  );
}
