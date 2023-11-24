import React, { forwardRef } from "react";

const CurrencyField = forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="form-group my-2">
      <label className="control-label">{label}</label>
      <input
        type="number"
        step="0.01"
        min="0"
        ref={ref}
        {...props}
        className="form-control"
      />
    </div>
  );
});

export default CurrencyField;
