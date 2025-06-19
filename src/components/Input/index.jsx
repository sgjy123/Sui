import React, { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Password from './Password';
import TextArea from './TextArea';
import './style.less';

const Input = ({
  value,
  defaultValue,
  onChange,
  onPressEnter,
  placeholder,
  disabled = false,
  readOnly = false,
  size = 'middle',
  prefix,
  suffix,
  allowClear = false,
  type = 'text',
  error = false,
  className,
  style,
  maxLength,
  showCount = false,
  addonBefore,
  addonAfter,
  loading = false,
  formatter,
  disablePaste = false,
  disableCopy = false,
  disableCut = false,
  ...restProps
}) => {
  const isControlled = value !== undefined;
  const [inputValue, setInputValue] = useState(defaultValue || '');
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  // 受控/非受控切换
  useEffect(() => {
    if (isControlled) setInputValue(value);
  }, [value, isControlled]);

  // 格式化内容
  const getDisplayValue = (val) => (formatter ? formatter(val) : val);

  const handleChange = useCallback((e) => {
    let newValue = e.target.value;
    if (maxLength) newValue = newValue.slice(0, maxLength);
    setInputValue(newValue);
    onChange?.(e);
  }, [onChange, maxLength]);

  const handleClear = useCallback((e) => {
    e.stopPropagation();
    setInputValue('');
    onChange?.({ target: { value: '' } });
    if (inputRef.current) inputRef.current.focus();
  }, [onChange]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      onPressEnter?.(e);
    }
  }, [onPressEnter]);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  // 禁用粘贴/复制/剪切
  const handlePaste = disablePaste ? (e) => e.preventDefault() : undefined;
  const handleCopy = disableCopy ? (e) => e.preventDefault() : undefined;
  const handleCut = disableCut ? (e) => e.preventDefault() : undefined;

  const inputClassName = classNames(
    'sui-input',
    {
      'sui-input-lg': size === 'large',
      'sui-input-sm': size === 'small',
      'sui-input-disabled': disabled,
      'sui-input-error': error,
      'sui-input-focused': focused,
      'sui-input-prefix': prefix,
      'sui-input-suffix': suffix || allowClear || loading,
      'sui-input-readonly': readOnly,
      'sui-input-has-addon': addonBefore || addonAfter,
    },
    className
  );

  const renderClearIcon = () => {
    if (allowClear && inputValue && !disabled && !readOnly) {
      return (
        <span className="sui-input-clear-icon" onClick={handleClear}>
          <Icon name="CloseOne" theme="filled" size={14} />
        </span>
      );
    }
    return null;
  };

  const renderSuffix = () => {
    return (
      <>
        {loading && <span className="sui-input-loading"><Icon name="Loading" theme="filled" size={14} /></span>}
        {suffix && <span className="sui-input-suffix-icon">{suffix}</span>}
      </>
    );
  };

  const renderCount = () => {
    if (showCount) {
      const val = isControlled ? value || '' : inputValue;
      return (
        <span className="sui-input-count">{val.length}{maxLength ? `/${maxLength}` : ''}</span>
      );
    }
    return null;
  };

  const inputNode = (
    <>
      {prefix && <span className="sui-input-prefix-icon">{prefix}</span>}
      <input
        ref={inputRef}
        type={type}
        value={getDisplayValue(isControlled ? value : inputValue)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        onPaste={handlePaste}
        onCopy={handleCopy}
        onCut={handleCut}
        {...restProps}
      />
      {renderClearIcon()}
      {renderSuffix()}
      {renderCount()}
    </>
  );

  return (
    <div className={inputClassName} style={style}>
      {addonBefore && <span className="sui-input-addon sui-input-addon-before">{addonBefore}</span>}
      {inputNode}
      {addonAfter && <span className="sui-input-addon sui-input-addon-after">{addonAfter}</span>}
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  allowClear: PropTypes.bool,
  type: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  maxLength: PropTypes.number,
  showCount: PropTypes.bool,
  addonBefore: PropTypes.node,
  addonAfter: PropTypes.node,
  loading: PropTypes.bool,
  formatter: PropTypes.func,
  disablePaste: PropTypes.bool,
  disableCopy: PropTypes.bool,
  disableCut: PropTypes.bool,
};

Input.Password = Password;
Input.TextArea = TextArea;
export default Input; 