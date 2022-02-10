import * as React from 'react';
import S from './index.less';

interface ILabelCellProps {
  children: React.ReactNode;
  label: string;
}

const LabelCell: React.FunctionComponent<ILabelCellProps> = ({
  label,
  children,
}) => {
  return (
    <div className={S.labelCellContainer}>
      <span className={S.text}>{label}：</span>
      {children}
    </div>
  );
};

export default LabelCell;
