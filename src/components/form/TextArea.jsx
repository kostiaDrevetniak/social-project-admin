import React, { forwardRef } from "react";
import "./style/style.css";

const TextArea = forwardRef(({ lable, rows, cols, ...props }, ref) => {
  return (
    <div className="form-group my-2">
      <label className="control-label">{lable}</label>
      <textarea
        rows={rows}
        cols={cols}
        required="required"
        className="no-resize form-control"
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default TextArea;
