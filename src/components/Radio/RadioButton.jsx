import React from "react";
import Radio from "./index.jsx";

const RadioButton = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <Radio
      ref={ref}
      {...props}
      className={`sui-radio-button ${className}`.trim()}
      optionType="button"
    />
  );
});

export default RadioButton; 