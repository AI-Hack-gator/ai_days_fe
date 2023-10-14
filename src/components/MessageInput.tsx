// components/MessageInput.tsx
import React, { useContext } from 'react';
import { Textarea } from '@chakra-ui/react';
import { ChatContext, ChatContextType } from '../contexts/ChatContext';

const MessageInput: React.FC = () => {
  const { inputInfo, setInputInfo } = useContext<ChatContextType>(ChatContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputInfo((prev) => ({ ...prev, text: e.target.value }));
  };

  console.log(inputInfo.text)

  return <Textarea placeholder="Type your message here" value={inputInfo.text} onChange={handleChange} />;
};

export default MessageInput;
