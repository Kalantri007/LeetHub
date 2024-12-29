import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <HStack align='center'>
      <Text fontSize={'12px'}>

          Report Bug
        </Text>{' '}
        | Made with <span style={{ color: '#e25555' }}>&#9829;</span> by{' '}
        <Text
          as='a'
          color='blue.500'
          href='https://github.com/Kalantri007/'
          target='_blank'
          fontWeight={'semibold'}
          display='inline-block'
        >
          @Kalantri007
        </Text>
      </Text>
    </HStack>
  );
};
