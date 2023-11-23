import React, { forwardRef } from "react";

const TextField = forwardRef(({ label, ...props }, ref) => {
  return (
    <div>
      <lable>{label}</lable>
      <input type="text" ref={ref} {...props} />
    </div>
  );
});
export default TextField;
