// components/Home.tsx
import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { ChatGPTMessage, InputInfo, Row, UserSession } from '../types';
import MessageInput from './MessageInput';
import { ChatProvider } from '../contexts/ChatContext';

const Home: React.FC = () => {
  const [messages, setMessages] = React.useState<ChatGPTMessage[]>([]);
  const [rows, setRows] = React.useState<Row[]>([]);
  const [userSession, setUserSession] = React.useState<UserSession>({
    is_customer: true,
  });
  const [inputInfo, setInputInfo] = React.useState<InputInfo>({
    text: '',
    loading: false,
  });

  return (
    <ChatProvider>
      <Box>
        <Button colorScheme="teal">
          Hiiii
        </Button>
        <MessageInput />
      </Box>
    </ChatProvider>
  );
};

export default Home;
