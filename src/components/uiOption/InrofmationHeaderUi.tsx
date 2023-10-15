// components/uiOption/InformationHeaderUi.tsx

import React from 'react';
import { Box, Text, Button, Flex, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Information, Row } from '../../types';

interface InformationHeaderUiProps {
  row: Row;
}

const InformationHeaderUi: React.FC<InformationHeaderUiProps> = ({ row }) => {
  const productItem = row.ui_gen_output.product_items[0] as Information;

  return (
    <LinkBox 
      backgroundImage={`url(${productItem.image_url})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      width="700px"  // 5 parts
      height="300px" // 3 parts
      position="relative"  // To position the button absolutely within this container
    >
      <Flex 
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        p={5}
        backgroundColor="#ffffff55"
        h="100%"
        w="100%"
      >
        <Text  fontSize="2xl" fontWeight="bold">{productItem.title}</Text>
        <Text noOfLines={5}>{productItem.description}</Text>
      </Flex>
      {/* Display only the first link and position it to the bottom-right */}
      {productItem.links.length > 0 && (
        <Button 
          as={LinkOverlay} 
          href={productItem.links[0]} 
          size="md" 
          position="absolute" 
          colorScheme='brandSecondary'
          bottom={5} 
          right={5}
          isExternal
        >
          Learn More
        </Button>
      )}
    </LinkBox>
  );
};

export default InformationHeaderUi;