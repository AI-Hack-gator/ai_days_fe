// components/uiOption/InformationSpanUi.tsx

import React from 'react';
import { Box, Text, Image, Flex, VStack, Button, LinkOverlay } from '@chakra-ui/react';
import { Information, Row } from '../../types';

interface InformationSpanUiProps {
  row: Row;
}

const InformationSpanUi: React.FC<InformationSpanUiProps> = ({ row }) => {
  const productItem = row.ui_gen_output.product_items[0] as Information;

  return (
    <Flex w="60%" direction="row" align="center" justify="space-between" p={5}>
      <Image 
        src={productItem.image_url}
        alt="Product Image"
        mr={5}
        flex={1}
        borderRadius={5}
        w="1"
      />

      <VStack flex={2} align="start" height="100%">
        <Text fontSize="2xl" fontWeight="bold">
          {productItem.title}
        </Text>

        <Text noOfLines={5} fontSize="xl">
          {productItem.description}
        </Text>

        {productItem.links && (
          // add a link to productItem.links[0]
          <Button as={LinkOverlay} href={productItem.links[0]} isExternal  colorScheme='brandSecondary' >
            Learn More
          </Button>
        )}
      </VStack>
    </Flex>
  );
};

export default InformationSpanUi;