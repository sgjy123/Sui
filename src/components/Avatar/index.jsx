import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './style.less';

const Avatar = ({
  src,
  alt,
  size = 'default',
  shape = 'circle',
  icon,
  children,
  style,
  className,
  ...rest
}) => {
  const sizeMap = {
    small: 24,
    default: 32,
    large: 40,
  };

  const sizeValue = typeof size === 'number' ? size : sizeMap[size];

  const getInitials = (text) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  };

  const getStyle = () => {
    const baseStyle = {
      width: sizeValue,
      height: sizeValue,
      lineHeight: `${sizeValue}px`,
      fontSize: sizeValue * 0.4,
      borderRadius: shape === 'circle' ? '50%' : '4px',
      ...style,
    };

    if (src) {
      return {
        ...baseStyle,
        background: 'transparent',
      };
    }

    return baseStyle;
  };

  const renderContent = () => {
    if (src) {
      return <img src={src} alt={alt} />;
    }
    if (icon) {
      return <Icon name={icon} />;
    }
    if (children) {
      return typeof children === 'string' ? getInitials(children) : children;
    }
    return null;
  };

  return (
    <div
      className={`sui-avatar ${className || ''}`}
      style={getStyle()}
      {...rest}
    >
      {renderContent()}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'default', 'large']), PropTypes.number]),
  shape: PropTypes.oneOf(['circle', 'square']),
  icon: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Avatar; 