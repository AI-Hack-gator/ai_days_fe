import React from 'react';
import { Row } from '../../types';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

interface TableUiProps {
  row: Row;
}

const TableUi: React.FC<TableUiProps> = ({ row }) => {
  return (
    <Table variant="simple">
      <Thead>
        {/* Add your table header */}
      </Thead>
      <Tbody>
        {/* Render the table rows based on the row data */}
      </Tbody>
    </Table>
  );
};

export default TableUi;
