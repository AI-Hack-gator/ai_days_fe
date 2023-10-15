// components/Home.tsx
import React from 'react';
import { Flex } from '@chakra-ui/react';
import MessageInput from './MessageInput';
import NavBar from './NavBar';
import PageContent from './PageContent';
import { ChatProvider } from '../contexts/ChatContext';

const Home: React.FC = () => {
  return (
    <ChatProvider>
      <Flex h="100vh" direction="column" position="relative">
        <NavBar />
        <Flex direction="column" h="100%" overflowY="auto" pt="60px" pb="100px">
          <PageContent />
        </Flex>
        <MessageInput />
      </Flex>
    </ChatProvider>
  );
};

export default Home;
