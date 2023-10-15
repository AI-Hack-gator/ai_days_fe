// components/NavBar.tsx
import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

const NavBar: React.FC = () => {
  return (
    <Box bg="brandPrimary.600" h="60px" w="100%" position="absolute" top="0" zIndex="1">
      <Flex pl={3} py={3} gap={3} h="100%" alignContent="center" alignItems="center">
        <Image h="45px"src="https://i.pinimg.com/originals/54/46/88/54468886c66d95dc9630eef043ba7f2e.png" alt="AI Days 2021 Logo" />
        <Heading color="white" size="lg">CHAT</Heading>
      </Flex>
      {/* Additional content or style adjustments for the NavBar */}
    </Box>
  );
};

export default NavBar;
