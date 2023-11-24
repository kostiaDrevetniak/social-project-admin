import React, { forwardRef } from "react";

const DateTimeField = forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="form-group my-2">
      <label className="control-label">{label}</label>
      <input
        type="datetime-local"
        ref={ref}
        {...props}
        className="form-control"
      />
    </div>
  );
});

export default DateTimeField;
