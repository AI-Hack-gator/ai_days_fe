// /App.tsx
import React from 'react';
import { Box, Button, ChakraProvider, extendTheme, theme } from '@chakra-ui/react';
import logo from './logo.svg';
import { UserSession } from './types';
import Home from './components/Home';

function App() { 
  const customTheme = extendTheme({
    ...theme,
    colors: {
      brandPrimary: {
        50: '#3A3A3A', // Lightest shade, can be used for hover or focus states, taken as a lighter gray from the image.
        500: '#2D2D2D', // Primary shade, taken from the main color of the image.
        600: '#1C1C1C', // Darker shade, taken from the darkest gray in the image.
      },
      brandSecondary: {
        500: '#E74C3C', // A shade of red for contrast and as an accent color.
        600: '#C0392B', // A darker shade of red for hover or focus states.
      },
    },
  });
     
  return (
    <ChakraProvider  theme={customTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
