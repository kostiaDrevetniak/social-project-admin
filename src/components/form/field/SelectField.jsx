import React, { forwardRef } from "react";
import FieldLabel from "../FieldLabel";

const SelectField = forwardRef(({ label, data, ...props }, ref) => {
  return (
    <FieldLabel label={label}>
      <select ref={ref} {...props} defaultValue={""} className="form-control">
        {data.map((item, index) => (
          <option value={item.id} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </FieldLabel>
  );
});

export default SelectField;
