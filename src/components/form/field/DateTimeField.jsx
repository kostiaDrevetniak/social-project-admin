import React, { forwardRef } from "react";
import FieldLabel from "../FieldLabel";

const DateTimeField = forwardRef(({ label, ...props }, ref) => {
  return (
    <FieldLabel label={label}>
      <input
        type="datetime-local"
        ref={ref}
        {...props}
        className="form-control"
      />
    </FieldLabel>
  );
});

export default DateTimeField;
