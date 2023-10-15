// components/MessageInput.tsx
import React, { useContext } from "react";
import { Textarea, Box, Button, Flex } from "@chakra-ui/react";
import { ChatContext, ChatContextType } from "../contexts/ChatContext";
import { uiGenFetch } from "../utils/apiUtils";
import { ChatGPTMessage } from "../types";

const MessageInput: React.FC = () => {
  const { messages, setMessages, rows, setRows, userSession, inputInfo, setInputInfo } =
    useContext<ChatContextType>(ChatContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputInfo((prev) => ({ ...prev, text: e.target.value }));
  };

  const handleSubmit = async (prompt: string) => {
    setInputInfo((prev) => ({ ...prev, loading: true }));
    const newMessages = [
      ...messages,
      { role: "user", content: prompt },
    ] as ChatGPTMessage[];
    const res = await uiGenFetch(newMessages, userSession);

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
    <Box position="absolute" p={2} bottom="0" w="100%" zIndex="1">
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
        onClick={() => handleSubmit(inputInfo.text)}
        mt={2}
      >
        Submit
      </Button>
      <Flex
        position="absolute"
        left="10px"
        top="-50px"
        gap={4}
      >
        <Button
          zIndex={100}
          isLoading={inputInfo.loading}
          width="400px"
          variant="outline"
          whiteSpace="pre-wrap"
          overflow="hidden"
          textOverflow="ellipsis"
          textAlign="start"
          justifyContent="flex-start"
          colorScheme="brandSecondary"
          onClick={() => handleSubmit("Show me the best plans verizon offers.")}
          mt={2}
        >
          Show me the best plans verizon offers.
        </Button>
        <Button
          zIndex={100}
          isLoading={inputInfo.loading}
          width="400px"
          variant="outline"
          whiteSpace="pre-wrap"
          overflow="hidden"
          textOverflow="ellipsis"
          textAlign="start"
          justifyContent="flex-start"
          colorScheme="brandSecondary"
          onClick={() => handleSubmit("Does verizon support Gainesville Florida?")}
          mt={2}
        >
          Does verizon support Gainesville Florida?
        </Button>
      </Flex>
    </Box>
  );
};

export default MessageInput;
