// components/MessageInput.tsx
import React, { useContext } from "react";
import { Textarea, Box, Button } from "@chakra-ui/react";
import { ChatContext, ChatContextType } from "../contexts/ChatContext";
import { uiGenFetch } from "../utils/apiUtils";

const MessageInput: React.FC = () => {
  const { messages, setMessages, rows, setRows, userSession, inputInfo, setInputInfo } =
    useContext<ChatContextType>(ChatContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputInfo((prev) => ({ ...prev, text: e.target.value }));
  };

  const handleSubmit = async () => {
    setInputInfo((prev) => ({ ...prev, loading: true }));
    const newMessages = [
      ...messages,
      { role: "user", content: inputInfo.text },
    ];
    const res = await uiGenFetch(messages, userSession);

    setRows((prev) => [...prev, {
      ui_gen_output: res,
      chat_gpt_message_index: newMessages.length - 1,
    }]);

    setMessages(res.messages);

    setInputInfo((prev) => ({ ...prev, loading: false, text: "" }));
  };

  console.log("rows", rows);
  console.log("messages", messages);

  return (
    <Box p={2} position="absolute" bottom="0" w="100%" zIndex="1">
      <Textarea
        placeholder="Type your message here"
        isDisabled={inputInfo.loading}
        color="white"
        value={inputInfo.text}
        onChange={handleChange}
        bg="brandPrimary.600"
        borderRadius="md"
      />
      <Button
        zIndex={100}
        isLoading={inputInfo.loading}
        position="absolute"
        right="30px"
        bottom="30px"
        colorScheme="brandSecondary"
        onClick={handleSubmit}
        mt={2}
      >
        Submit
      </Button>
    </Box>
  );
};

export default MessageInput;
