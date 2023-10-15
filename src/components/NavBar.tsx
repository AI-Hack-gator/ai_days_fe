// components/NavBar.tsx
import React, { useContext } from 'react';
import { Box, Flex, Heading, Image, Link, Button, Spacer } from '@chakra-ui/react';
import { ChatContext, ChatContextType } from '../contexts/ChatContext';
import { ProductType, Row } from '../types'; // Assuming you have a types file with this enum and type

const NavBar: React.FC = () => {
  const { rows, userSession } = useContext<ChatContextType>(ChatContext);

  const hasDevice = rows.some(row => row.ui_gen_output.product_type === ProductType.DEVICE);
  const hasPlan = rows.some(row => row.ui_gen_output.product_type === ProductType.PLAN);
  
  const informationLinks = rows
    .filter(row => row.ui_gen_output.product_type === ProductType.INFORMATION)
    .map((row: any) => ({
      link: row.ui_gen_output.product_items[0].links[0],
      title: row.ui_gen_output.product_items[0].title.split(' ').reduce((a: string, b: string) => a.length > b.length ? a : b)
    }));

  console.log("userSession", userSession)

  return (
    <Box bg="brandPrimary.600" h="60px" w="100%" position="absolute" top="0" zIndex="1">
      <Flex pl={3} py={3} gap={3} h="100%" alignContent="center" alignItems="center">
        <Link href="https://www.verizon.com/" isExternal>
          <Flex>
            <Image h="45px" src="https://i.pinimg.com/originals/54/46/88/54468886c66d95dc9630eef043ba7f2e.png" alt="AI Days 2021 Logo" />
            <Heading color="white" size="lg">CHAT</Heading>
          </Flex>
        </Link>
        
        {hasPlan && (
          <Link href="https://www.verizon.com/plans/" isExternal color="white" ml={3}>
            Plans
          </Link>
        )}

        {hasDevice && (
          <Link href="https://www.verizon.com/smartphones/" isExternal color="white" ml={3}>
            Devices
          </Link>
        )}

        {informationLinks.map((info, index) => (
          <Link key={index} href={info.link} isExternal color="white" ml={3}>
            {info.title}
          </Link>
        ))}

        <Spacer />
        
        {userSession.is_customer ? (
          <Link fontWeight="bold" href="https://secure.verizon.com/signin" isExternal color='brandSecondary.500' mr={3}>
            Sign Out
          </Link>
        ) : (
          // sign in should external link to https://secure.verizon.com/signin
          <Link  fontWeight="bold" href="https://secure.verizon.com/signin" isExternal color='brandSecondary.500' mr={3}>
            Sign In
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default NavBar;