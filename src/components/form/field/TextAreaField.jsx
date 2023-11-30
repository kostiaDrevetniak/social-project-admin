import React, { forwardRef } from "react";
import "../style/style.css";
import FieldLabel from "../FieldLabel";

const TextAreaField = forwardRef(({ label, rows, cols, ...props }, ref) => {
  return (
    <FieldLabel label={label}>
      <textarea
        rows={rows}
        cols={cols}
        required="required"
        className="no-resize form-control"
        ref={ref}
        {...props}
      />
    </FieldLabel>
  );
});

export default TextAreaField;
