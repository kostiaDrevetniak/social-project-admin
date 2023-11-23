import React, { forwardRef } from "react";

const DateTimeField = forwardRef(({ label, ...props }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input type="datetime-local" ref={ref} {...props} />
    </div>
  );
});

export default DateTimeField;
