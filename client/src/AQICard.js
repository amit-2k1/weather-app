import React from 'react';
import { Heading } from '@chakra-ui/react';

export default function AQICard({ value, color, name }) {
  return (
    <>
      <Heading as="h5" mb={2} p={1} size="md">
        AQI
      </Heading>
      <Heading as="p" size={'3xl'} fontWeight={'semibold'} textAlign={'center'}>
        {value}
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
