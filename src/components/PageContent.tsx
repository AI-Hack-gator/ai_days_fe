// components/PageContent.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';

const PageContent: React.FC = () => {
  return (
    <Box flex="1" overflowY="auto" pt="60px" pb="100px" height="1000px">
      {/* Padding to account for the NavBar and MessageInput */}
    </Box>
  );
};

export default PageContent;
