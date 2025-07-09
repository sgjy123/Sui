import React from "react";
import "./style.less";

const RadioGroupContext = React.createContext(null);

const Radio = React.forwardRef(({ checked, defaultChecked, disabled, onChange, value, name, children, optionType = 'default', className = '', ...rest }, ref) => {
  const radioGroup = React.useContext(RadioGroupContext);
  const [innerChecked, setInnerChecked] = React.useState(defaultChecked || false);
  
  // 如果在 RadioGroup 中，使用 group 的值
  const isInGroup = radioGroup !== null;
  const mergedChecked = isInGroup ? radioGroup.value === value : (checked !== undefined ? checked : innerChecked);
  const mergedDisabled = isInGroup ? radioGroup.disabled || disabled : disabled;
  const mergedName = isInGroup ? radioGroup.name : name;
  const mergedOptionType = isInGroup ? radioGroup.optionType : optionType;

  const handleChange = (e) => {
    if (mergedDisabled) return;
    
    if (!isInGroup && checked === undefined) {
      setInnerChecked(e.target.checked);
    }

    const changeEvent = {
      target: {
        ...e.target,
        value,
        checked: e.target.checked,
      },
      nativeEvent: e,
    };

    if (isInGroup) {
      radioGroup.onChange?.(changeEvent);
    } else {
      onChange?.(changeEvent);
    }
  };

  const radioClass = [
    'sui-radio',
    mergedOptionType === 'button' ? 'sui-radio-button' : '',
    mergedDisabled ? 'sui-radio-disabled' : '',
    mergedChecked ? 'sui-radio-checked' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={radioClass} {...rest}>
      <input
        ref={ref}
        type="radio"
        checked={mergedChecked}
        disabled={mergedDisabled}
        onChange={handleChange}
        value={value}
        name={mergedName}
        className="sui-radio-input"
      />
      <span className="sui-radio-inner" />
      {children && <span className="sui-radio-label">{children}</span>}
    </label>
  );
});

import RadioGroup from './RadioGroup';
import RadioButton from './RadioButton';

Radio.Group = RadioGroup;
Radio.Button = RadioButton;

export { RadioGroupContext };
export default Radio; 