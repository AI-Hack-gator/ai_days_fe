import React, { useContext, useMemo, useRef, useEffect } from 'react';
import DeviceRow from './row/DeviceRow';
import PlanRow from './row/PlanRow';
import { Flex, VStack, Box, Skeleton } from '@chakra-ui/react';
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
