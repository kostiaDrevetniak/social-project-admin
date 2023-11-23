import React, { forwardRef } from "react";

const CurencyField = forwardRef(({ label, ...props }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" step="0.01" min="0" ref={ref} {...props} />
    </div>
  );
});

export default CurencyField;
