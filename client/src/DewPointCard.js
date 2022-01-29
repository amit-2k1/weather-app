import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

export default function DewPointCard({ dewPoint, fromKtoC }) {
  return (
    <>
      <Heading as="h5" mb={2} p={1} size="md">
        Dew Point
      </Heading>
      <Heading
        as="p"
        mt={6}
        size={'3xl'}
        fontWeight={'semibold'}
        textAlign={'center'}
      >
        {fromKtoC(dewPoint)}
        <Text as="sup">o</Text>C
      </Heading>
    </>
  );
}
