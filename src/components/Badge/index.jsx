import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const Badge = ({
  count,
  dot = false,
  text,
  color,
  offset,
  status,
  children,
  style,
  className,
  ...rest
}) => {
  const getStyle = () => {
    const baseStyle = {
      ...style,
    };

    if (offset) {
      baseStyle.right = -offset[0];
      baseStyle.marginTop = offset[1];
    }

    if (color) {
      baseStyle.backgroundColor = color;
    }

    return baseStyle;
  };

  const renderCount = () => {
    if (dot) {
      return <span className="sui-badge-dot" style={getStyle()} />;
    }

    if (status) {
      return (
        <span className={`sui-badge-status sui-badge-status-${status}`}>
          <span className="sui-badge-status-dot" style={{ backgroundColor: color }} />
          {text && <span className="sui-badge-status-text">{text}</span>}
        </span>
      );
    }

    if (count === 0 && !text) {
      return null;
    }

    return (
      <span className="sui-badge-count" style={getStyle()}>
        {text || (count > 99 ? '99+' : count)}
      </span>
    );
  };

  if (!children) {
    return renderCount();
  }

  return (
    <span className={`sui-badge ${className || ''}`} {...rest}>
      {children}
      {renderCount()}
    </span>
  );
};

Badge.propTypes = {
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dot: PropTypes.bool,
  text: PropTypes.node,
  color: PropTypes.string,
  offset: PropTypes.arrayOf(PropTypes.number),
  status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Badge; 