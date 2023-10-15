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
      <Flex direction="column" h="100vh" position="relative">
        <NavBar />
        <PageContent />
        <MessageInput />
      </Flex>
    </ChatProvider>
  );
};

export default Home;
