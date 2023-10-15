import React, { useContext, useMemo, useRef, useEffect } from 'react';
import DeviceRow from './row/DeviceRow';
import PlanRow from './row/PlanRow';
import { Flex, VStack, Box, Skeleton, Image, Text, Center } from '@chakra-ui/react';
import { ProductType, Row } from '../types';
import { ChatContext, ChatContextType } from '../contexts/ChatContext';
import InformationRow from './row/InformationRow';

const PageContent: React.FC = ({}) => {
  const { rows, inputInfo } = useContext<ChatContextType>(ChatContext);
  const bottomRef = useRef<HTMLDivElement>(null);

  const renderedRows = useMemo(() => {
    return rows.map((row, index) => {
      switch (row.ui_gen_output.product_type) {
        case ProductType.DEVICE:
          return <DeviceRow key={index} row={row} />;
        case ProductType.PLAN:
          return <PlanRow key={index} row={row} />;
        case ProductType.INFORMATION:
          return <InformationRow key={index} row={row} />;
        default:
          return null;
      }
    });
  }, [rows]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [rows, inputInfo.loading]);

  if (rows.length === 0) {
    return (
      <Center h="100vh">
        <VStack opacity="0.7" spacing={5}>
          <Image w="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Verizon_2015_logo_-vector.svg/2560px-Verizon_2015_logo_-vector.svg.png" alt="Verizon" /> {/* Update the path as per your asset location */}
          <Text fontSize="2xl">Welcome to VCHAT</Text>
        </VStack>
      </Center>
    );
  }

  return (
    <VStack>
      {renderedRows}
      {inputInfo.loading && (
        <Skeleton w="90%" h="300px">
        </Skeleton>
      )}
      <Box ref={bottomRef} />
    </VStack>
  );
};

export default PageContent;