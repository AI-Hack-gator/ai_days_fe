// contexts/ChatContext.tsx
import React from 'react';
import { ChatGPTMessage, InputInfo, Row, UserSession } from '../types';

export type ChatContextType = {
  messages: ChatGPTMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatGPTMessage[]>>;
  rows: Row[];
  setRows: React.Dispatch<React.SetStateAction<Row[]>>;
  userSession: UserSession;
  setUserSession: React.Dispatch<React.SetStateAction<UserSession>>;
  inputInfo: InputInfo;
  setInputInfo: React.Dispatch<React.SetStateAction<InputInfo>>;
};

const defaultContextValue = {
  messages: [],
  setMessages: () => {},
  rows: [],
  setRows: () => {},
  userSession: { is_customer: false },
  setUserSession: () => {},
  inputInfo: { text: '', loading: false },
  setInputInfo: () => {},
};

export const ChatContext = React.createContext<ChatContextType>(defaultContextValue);

export const ChatProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [messages, setMessages] = React.useState<ChatGPTMessage[]>(defaultContextValue.messages);
  const [rows, setRows] = React.useState<Row[]>(defaultContextValue.rows);
  const [userSession, setUserSession] = React.useState<UserSession>(defaultContextValue.userSession);
  const [inputInfo, setInputInfo] = React.useState<InputInfo>(defaultContextValue.inputInfo);

  return (
    <ChatContext.Provider
      value={{ messages, setMessages, rows, setRows, userSession, setUserSession, inputInfo, setInputInfo }}
    >
      {children}
    </ChatContext.Provider>
  );
};
