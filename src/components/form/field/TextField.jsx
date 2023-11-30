import React, { forwardRef } from "react";
import FieldLabel from "../FieldLabel";

const TextField = forwardRef(({ label, ...props }, ref) => {
  return (
    <FieldLabel label={label}>
      <input type="text" ref={ref} {...props} className="form-control" />
    </FieldLabel>
  );
});
export default TextField;
