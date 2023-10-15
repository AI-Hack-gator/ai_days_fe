import React, { useMemo } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  VStack,
  Box,
  Image,
} from '@chakra-ui/react';
import { Row, Device, Plan, ProductType } from '../../types';

interface TableUiProps {
  row: Row;
}

const TableUi: React.FC<TableUiProps> = ({ row }) => {
  const productItems = row.ui_gen_output.product_items as (Device | Plan)[];
  console.log("show table")

  const renderTableRows = (item: Device | Plan) => {
    return Object.entries(item).map(([key, value]) => {
      if (key !== 'product' && key !== 'image' && (key in productItems[0])) {
        return (
          <Tr key={key}>
            <Td fontWeight="bold">{key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.replace(/_/g, ' ').slice(1)}</Td>
            {productItems.map((productItem: Device | Plan) => (
              <Td key={productItem.product}>{productItem[key as keyof (Device | Plan)] || 'N/A'}</Td>
            ))}
          </Tr>
        );
      }
      return null;
    });
  }
  
  const productItemsRendered = useMemo(() => {
    let image = <></>
    if (productItems[0] && 'image' in productItems[0]) {
      image = <Image width="100px" src={productItems[0].image} alt={productItems[0].product} borderRadius="lg" />
    }
    return productItems.map((productItem: Device | Plan) => {
      return (
        <Th fontWeight="bold">
          <Heading size="md">{productItem.product}</Heading>
          {image}
        </Th>
      );
    });
  }, [productItems]);

  return (
    <VStack w="100%" spacing={4}>
        <Heading color="black" size="lg">{row.ui_gen_output.product_type}</Heading>
        <Box w="100%" overflowX="auto">
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th></Th>
                {productItemsRendered}
              </Tr>
            </Thead>
            <Tbody>
              {productItems[0] && renderTableRows(productItems[0])}
            </Tbody>
          </Table>
        </Box>
      </VStack>
  );
};

export default TableUi;