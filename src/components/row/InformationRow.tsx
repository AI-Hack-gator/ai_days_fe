// components/row/InformationRow.tsx

import React from 'react';
import InformationSpanUi from '../uiOption/InformationSpanUi';
import { DisplayType, Row } from '../../types';
import InformationHeaderUi from '../uiOption/InrofmationHeaderUi';

interface InformationRowProps {
  row: Row;
}

const InformationRow: React.FC<InformationRowProps> = ({ row }) => {
  switch (row.ui_gen_output.display_type) {
    case DisplayType.CARD:
      return <InformationHeaderUi row={row} />;
    case DisplayType.TABLE:
      return <InformationSpanUi row={row} />;
    default:
      return null;
  }
};

export default InformationRow;
