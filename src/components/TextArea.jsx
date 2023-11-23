import React, { forwardRef } from "react";
import "./style/style.css";

const TextArea = forwardRef(({ lable, rows, cols, ...props }, ref) => {
  return (
    <div>
      <lable>{lable}</lable>
      <textarea
        rows={rows}
        cols={cols}
        required="required"
        className="no-resize"
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default TextArea;
