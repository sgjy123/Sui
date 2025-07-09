import React, { useState, useRef } from 'react';
import Icon from '../Icon';
import './style.less';

const clamp = (val, min, max) => {
  if (min !== undefined && val < min) return min;
  if (max !== undefined && val > max) return max;
  return val;
};

const InputNumber = React.forwardRef(({
  value,
  defaultValue = 0,
  min,
  max,
  step = 1,
  disabled = false,
  size = 'middle', // large | middle | small
  onChange,
  readOnly = false,
  precision,
  ...rest
}, ref) => {
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(defaultValue);
  const inputRef = useRef();
  const mergedValue = isControlled ? value : innerValue;

  // 格式化小数位
  const format = v => {
    if (typeof precision === 'number') {
      return parseFloat(Number(v).toFixed(precision));
    }
    return v;
  };

  const handleChange = (val) => {
    let newValue = val === '' ? '' : Number(val);
    if (val !== '' && isNaN(newValue)) return;
    if (val !== '') newValue = clamp(newValue, min, max);
    if (!isControlled) setInnerValue(newValue);
    onChange && onChange(newValue);
  };

  const handleInput = e => {
    handleChange(e.target.value);
  };

  const handleBlur = () => {
    if (mergedValue === '') handleChange(min !== undefined ? min : 0);
  };

  const stepAdd = () => {
    if (disabled || readOnly) return;
    let newValue = mergedValue === '' ? 0 : Number(mergedValue) + Number(step);
    newValue = format(clamp(newValue, min, max));
    handleChange(newValue);
  };

  const stepReduce = () => {
    if (disabled || readOnly) return;
    let newValue = mergedValue === '' ? 0 : Number(mergedValue) - Number(step);
    newValue = format(clamp(newValue, min, max));
    handleChange(newValue);
  };

  return (
    <span className={`sui-input-number sui-input-number-${size} ${disabled ? 'sui-input-number-disabled' : ''}`}
      {...rest}
      ref={ref}
    >
      <span
        className="sui-input-number-handler sui-input-number-handler-down"
        onClick={stepReduce}
        disabled={disabled || readOnly || (min !== undefined && mergedValue <= min)}
        tabIndex={-1}
      >
        <Icon name="Minus" size={12} />
      </span>
      <input
        ref={inputRef}
        type="text"
        className="sui-input-number-input"
        value={mergedValue}
        onChange={handleInput}
        onBlur={handleBlur}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete="off"
      />
      <span
        className="sui-input-number-handler sui-input-number-handler-up"
        onClick={stepAdd}
        disabled={disabled || readOnly || (max !== undefined && mergedValue >= max)}
        tabIndex={-1}
      >
        <Icon name="Plus" size={12} />
      </span>
    </span>
  );
});

export default InputNumber; 