import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Error({ navigate }) {
  const handleClick = () => {
    navigate('/');
  };
  return (
    <Box
      h={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Heading as="p" mb={16} size={'4xl'} letterSpacing='2px'>
        404
      </Heading>
      <Text mb={10} fontWeight={'hairline'} fontSize={'2xl'}>
        Opps.The place you're looking for doesn't exist.
      </Text>
      <Button as='a' onClick={handleClick} colorScheme="green" p={6} fontSize="xl">
        Go back to home
      </Button>
    </Box>
  );
}
