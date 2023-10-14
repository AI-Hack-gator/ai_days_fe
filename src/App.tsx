import React from 'react';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import logo from './logo.svg';
import { UserSession } from './types';

function App() {
  const userSession: UserSession = {
    is_customer: false,
  };
    
  return (
    <ChakraProvider>
      <Box>
        <Button colorScheme="teal">Click {userSession.is_customer ? "customer" : "visitor"} </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
