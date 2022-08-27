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
      <Heading as="p" mb={16} size={'3xl'}>
        404 Error
      </Heading>
      <Text mb={10} fontWeight={'hairline'} fontSize={'2xl'}>
        Opps.The page you're looking for doesn't exist.
      </Text>
      <Button onClick={handleClick} colorScheme="green" p={6} fontSize="xl">
        Back to Home
      </Button>
    </Box>
  );
}
