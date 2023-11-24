import React, { forwardRef } from "react";

const TextField = forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="form-group my-2">
      <label className="control-label">{label}</label>
      <input type="text" ref={ref} {...props} className="form-control" />
    </div>
  );
});
export default TextField;
