import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const ButtonGroup = ({ children, size, className = '', direction = 'horizontal', ...props }) => {
  // 构建按钮组类名
  const groupClassName = [
    'sui-button-group',
    direction === 'vertical' ? 'sui-button-group-vertical' : '',
    className
  ].filter(Boolean).join(' ');

  // 为子按钮添加尺寸属性
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { size });
    }
    return child;
  });

  return (
    <div className={groupClassName} {...props}>
      {childrenWithProps}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  className: PropTypes.string,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

ButtonGroup.defaultProps = {
  size: 'middle',
  className: '',
  direction: 'horizontal',
};

export default ButtonGroup;