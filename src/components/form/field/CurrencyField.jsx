import React, { forwardRef } from "react";
import FieldLabel from "../FieldLabel";

const CurrencyField = forwardRef(({ label, ...props }, ref) => {
  return (
    <FieldLabel label={label}>
      <input
        type="number"
        step="0.01"
        min="0"
        ref={ref}
        {...props}
        className="form-control"
      />
    </FieldLabel>
  );
});

export default CurrencyField;
