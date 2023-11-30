import React, { forwardRef } from "react";
import FieldLabel from "../FieldLabel";

const PasswordField = forwardRef(({ label, ...props }, ref) => {
  return (
    <FieldLabel label={label}>
      <input type="password" ref={ref} {...props} className="form-control" />
    </FieldLabel>
  );
});

export default PasswordField;
