import React from "react";
import Radio, { RadioGroupContext } from "./index.jsx";

const RadioGroup = React.forwardRef(({
  value,
  defaultValue,
  options = [],
  onChange,
  disabled = false,
  name,
  optionType = 'default', // default | button
  buttonStyle = 'outline', // outline | solid
  size = 'middle',
  block = false,
  children,
  ...rest
}, ref) => {
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = React.useState(defaultValue);
  const groupValue = isControlled ? value : innerValue;

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInnerValue(newValue);
    }
    onChange?.(e);
  };

  // 渲染options
  const renderOptions = () => {
    return options.map(option => {
      if (typeof option === 'string' || typeof option === 'number') {
        return (
          <Radio
            key={option}
            value={option}
            disabled={disabled}
            name={name}
            optionType={optionType}
          >
            {option}
          </Radio>
        );
      }
      return (
        <Radio
          key={option.value}
          value={option.value}
          disabled={disabled || option.disabled}
          name={name}
          style={option.style}
          className={option.className}
          optionType={optionType}
          title={option.title}
          id={option.id}
          required={option.required}
        >
          {option.label}
        </Radio>
      );
    });
  };

  return (
    <RadioGroupContext.Provider value={{
      value: groupValue,
      onChange: handleChange,
      disabled,
      name,
      optionType,
      buttonStyle,
      size,
    }}>
      <div
        ref={ref}
        className={`sui-radio-group sui-radio-group-${optionType} sui-radio-group-${buttonStyle}${block ? ' sui-radio-group-block' : ''} sui-radio-group-${size}`}
        role="radiogroup"
        {...rest}
      >
        {options.length > 0 ? renderOptions() : children}
      </div>
    </RadioGroupContext.Provider>
  );
});

export default RadioGroup; 