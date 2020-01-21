import React from 'react';

export interface DividerProps {
  className?: string;
  rootPrefixCls?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Divider: React.FC<DividerProps> = ({
  className,
  rootPrefixCls,
  style,
}) => (
  <div className={`${rootPrefixCls}`}>
    <div
      className={`${className} ${rootPrefixCls}-item-divider`}
      style={style}
    />
  </div>
);

Divider.defaultProps = {
  disabled: true,
  className: '',
  style: {},
  rootPrefixCls: 'tr-comp',
};

Divider.isDone = 'hello world';

export default Divider;
