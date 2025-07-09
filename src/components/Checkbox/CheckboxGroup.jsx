import React from 'react';
import { CheckboxGroupContext } from './index.jsx';
import Checkbox from './index.jsx';

const CheckboxGroup = React.forwardRef(({
  value,
  defaultValue = [],
  options = [],
  onChange,
  disabled = false,
  name,
  children,
  ...rest
}, ref) => {
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = React.useState(defaultValue);
  const groupValue = isControlled ? value : innerValue;

  const handleChange = (optionValue, checked, e) => {
    let newValue;
    if (checked) {
      newValue = [...groupValue, optionValue];
    } else {
      newValue = groupValue.filter(v => v !== optionValue);
    }
    if (!isControlled) setInnerValue(newValue);
    onChange && onChange(newValue, e);
  };

  const renderOptions = () => options.map(option => {
    if (typeof option === 'string' || typeof option === 'number') {
      return <Checkbox key={option} value={option}>{option}</Checkbox>;
    }
    return <Checkbox key={option.value} value={option.value} disabled={disabled || option.disabled}>{option.label}</Checkbox>;
  });

  return (
    <CheckboxGroupContext.Provider value={{
      value: groupValue,
      onChange: handleChange,
      disabled,
      name,
    }}>
      <div ref={ref} className="sui-checkbox-group" {...rest}>
        {options.length ? renderOptions() : children}
      </div>
    </CheckboxGroupContext.Provider>
  );
});

export default CheckboxGroup; 