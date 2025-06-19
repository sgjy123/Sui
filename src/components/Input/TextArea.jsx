import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import './style.less';

const TextArea = ({
  value,
  defaultValue,
  onChange,
  onPressEnter,
  placeholder,
  disabled = false,
  readOnly = false,
  size = 'middle',
  allowClear = false,
  maxLength,
  showCount = false,
  autoSize = false,
  className,
  style,
  formatter,
  addonBefore,
  addonAfter,
  disablePaste = false,
  disableCopy = false,
  disableCut = false,
  ...restProps
}) => {
  const isControlled = value !== undefined;
  const [textValue, setTextValue] = useState(defaultValue || '');
  const [focused, setFocused] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (isControlled) setTextValue(value);
  }, [value, isControlled]);

  // 格式化内容
  const getDisplayValue = (val) => (formatter ? formatter(val) : val);

  // 自适应高度
  useEffect(() => {
    if (autoSize && textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [textValue, autoSize]);

  const handleChange = useCallback((e) => {
    let newValue = e.target.value;
    if (maxLength) newValue = newValue.slice(0, maxLength);
    setTextValue(newValue);
    onChange?.(e);
  }, [onChange, maxLength]);

  const handleClear = useCallback((e) => {
    e.stopPropagation();
    setTextValue('');
    onChange?.({ target: { value: '' } });
    if (textAreaRef.current) textAreaRef.current.focus();
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

  const textAreaClassName = classNames(
    'sui-textarea',
    {
      'sui-textarea-lg': size === 'large',
      'sui-textarea-sm': size === 'small',
      'sui-textarea-disabled': disabled,
      'sui-textarea-focused': focused,
      'sui-textarea-readonly': readOnly,
      'sui-textarea-has-addon': addonBefore || addonAfter,
    },
    className
  );

  const renderClearIcon = () => {
    if (allowClear && textValue && !disabled && !readOnly) {
      return (
        <span className="sui-textarea-clear-icon" onClick={handleClear}>
          <Icon name="CloseOne" theme="filled" size={14} />
        </span>
      );
    }
    return null;
  };

  const renderCount = () => {
    if (showCount) {
      const val = isControlled ? value || '' : textValue;
      return (
        <span className="sui-textarea-count">{val.length}{maxLength ? `/${maxLength}` : ''}</span>
      );
    }
    return null;
  };

  const textAreaNode = (
    <>
      <textarea
        ref={textAreaRef}
        value={getDisplayValue(isControlled ? value : textValue)}
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
        className="sui-textarea-inner"
        {...restProps}
      />
      {renderClearIcon()}
      {renderCount()}
    </>
  );

  return (
    <div className={textAreaClassName} style={style}>
      {addonBefore && <span className="sui-textarea-addon sui-textarea-addon-before">{addonBefore}</span>}
      {textAreaNode}
      {addonAfter && <span className="sui-textarea-addon sui-textarea-addon-after">{addonAfter}</span>}
    </div>
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  allowClear: PropTypes.bool,
  maxLength: PropTypes.number,
  showCount: PropTypes.bool,
  autoSize: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  formatter: PropTypes.func,
  addonBefore: PropTypes.node,
  addonAfter: PropTypes.node,
  disablePaste: PropTypes.bool,
  disableCopy: PropTypes.bool,
  disableCut: PropTypes.bool,
};

export default TextArea; 