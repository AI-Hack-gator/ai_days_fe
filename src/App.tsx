// /App.tsx
import React from 'react';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import logo from './logo.svg';
import { UserSession } from './types';
import Home from './components/Home';

function App() {    
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
