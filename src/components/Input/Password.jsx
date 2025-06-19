import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Input from './index';
import Icon from '../Icon';

const Password = ({
  value,
  defaultValue,
  onChange,
  onPressEnter,
  placeholder = '请输入密码',
  disabled = false,
  size = 'middle',
  error = false,
  className,
  style,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false);

  const handleToggleVisible = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  return (
    <Input
      type={visible ? 'text' : 'password'}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onPressEnter={onPressEnter}
      placeholder={placeholder}
      disabled={disabled}
      size={size}
      error={error}
      className={className}
      style={style}
      suffix={
        <Icon
          name={visible ? 'Eye' : 'EyeInvisible'}
          onClick={disabled ? undefined : handleToggleVisible}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        />
      }
      {...restProps}
    />
  );
};

Password.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  error: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Password; 