import React, { useContext } from 'react';
import './style.less';

const CheckboxGroupContext = React.createContext(null);

const Checkbox = React.forwardRef(({
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  onChange,
  value,
  name,
  children,
  className = '',
  ...rest
}, ref) => {
  const group = useContext(CheckboxGroupContext);
  const isControlled = checked !== undefined;
  const [innerChecked, setInnerChecked] = React.useState(!!defaultChecked);
  const mergedChecked = group ? group.value.includes(value) : (isControlled ? checked : innerChecked);
  const mergedDisabled = group ? group.disabled || disabled : disabled;
  const mergedName = group ? group.name : name;

  const handleChange = (e) => {
    if (mergedDisabled) return;
    if (!group && !isControlled) setInnerChecked(e.target.checked);
    if (group) {
      group.onChange && group.onChange(value, e.target.checked, e);
    } else {
      onChange && onChange({
        target: {
          checked: e.target.checked,
          value,
        },
        nativeEvent: e,
      });
    }
  };

  const cls = [
    'sui-checkbox',
    mergedChecked ? 'sui-checkbox-checked' : '',
    mergedDisabled ? 'sui-checkbox-disabled' : '',
    indeterminate ? 'sui-checkbox-indeterminate' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={cls} {...rest}>
      <input
        ref={ref}
        type="checkbox"
        className="sui-checkbox-input"
        checked={mergedChecked}
        disabled={mergedDisabled}
        name={mergedName}
        value={value}
        onChange={handleChange}
      />
      <span className="sui-checkbox-inner" />
      {children && <span className="sui-checkbox-label">{children}</span>}
    </label>
  );
});

import CheckboxGroup from './CheckboxGroup';
Checkbox.Group = CheckboxGroup;
export { CheckboxGroupContext };
export default Checkbox; 