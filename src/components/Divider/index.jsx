import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const Divider = ({
  type = 'horizontal',
  orientation = 'center',
  orientationMargin = null,
  dashed = false,
  plain = false,
  children,
  className = '',
  style = {},
  ...props
}) => {
  // 构建分割线类名
  const dividerClassName = [
    'sui-divider',
    `sui-divider-${type}`,
    children ? 'sui-divider-with-text' : '',
    children ? `sui-divider-with-text-${orientation}` : '',
    dashed ? 'sui-divider-dashed' : '',
    plain ? 'sui-divider-plain' : '',
    className
  ].filter(Boolean).join(' ');

  // 处理orientationMargin
  const textStyle = {};
  if (orientation === 'left' && orientationMargin) {
    textStyle.marginLeft = orientationMargin;
  } else if (orientation === 'right' && orientationMargin) {
    textStyle.marginRight = orientationMargin;
  }

  return (
    <div className={dividerClassName} style={style} role="separator" {...props}>
      {children && (
        <span className="sui-divider-inner-text" style={textStyle}>
          {children}
        </span>
      )}
    </div>
  );
};

Divider.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  orientation: PropTypes.oneOf(['left', 'center', 'right']),
  orientationMargin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dashed: PropTypes.bool,
  plain: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

Divider.defaultProps = {
  type: 'horizontal',
  orientation: 'center',
  dashed: false,
  plain: false,
};

export default Divider;