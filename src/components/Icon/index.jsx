import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '@icon-park/react';

const Icon = ({ name, theme, size, fill, className, ...props }) => {
  // 根据 name 动态导入图标
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon ${name} not found in @icon-park/react`);
    return null;
  }

  return (
    <IconComponent
      theme={theme}
      size={size}
      fill={fill}
      className={`icon ${className}`}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['outline', 'filled']).isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
  fill: '#000000',
  className: '',
  theme: 'outline'
};

export default Icon;
