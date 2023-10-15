import React from 'react';
import { DisplayType, Row } from '../../types';
import CardUi from '../uiOption/CardUi';
import TableUi from '../uiOption/TableUi';

interface PlanRowProps {
  row: Row;
}

const PlanRow: React.FC<PlanRowProps> = ({ row }) => {
  switch (row.ui_gen_output.display_type) {
    case DisplayType.CARD:
      return <CardUi row={row} />;
    case DisplayType.TABLE:
      return <TableUi row={row} />;
    default:
      return null;
  }
};

export default PlanRow;
