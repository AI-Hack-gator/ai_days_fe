import React from 'react';
import { DisplayType, Row } from '../../types';
import CardUi from '../uiOption/CardUi';
import TableUi from '../uiOption/TableUi';

interface DeviceRowProps {
  row: Row;
}

const DeviceRow: React.FC<DeviceRowProps> = ({ row }) => {
  console.log("Inside DeviceRow")
  switch (row.ui_gen_output.display_type) {
    case DisplayType.CARD:
      console.log("Inside DeviceRow CARD")
      return <CardUi row={row} />;
    case DisplayType.TABLE:
      return <TableUi row={row} />;
    default:
      return null;
  }
};

export default DeviceRow;
