import React, { forwardRef } from "react";

const TextField = forwardRef(({ lable, ...props }, ref) => {
  return (
    <div>
      <lable>{lable}</lable>
      <input
        type="text"
        ref={ref}
        {...props}
      />
    </div>
  );
}
)
export default TextField;
