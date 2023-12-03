import React, { forwardRef } from "react";
import FieldLabel from "../FieldLabel";
import { Controller } from "react-hook-form";

const SelectField = forwardRef(({ label, data, control, name}) => {
  return data.length !==0 && (
    <FieldLabel label={label}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name, ref } }) => {
          value = (value) ? value : "";

          const handleSelectChange = (selectedOption) => {
            onChange(selectedOption);
          };
          return (
            <select
              ref={ref}
              onChange={handleSelectChange}
              value={value}
              defaultValue={value}
              name={name}
              className="form-control"
            >
              <option value={""}>Оберіть...</option>
              {data.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          );
        }}
      />
    </FieldLabel>
  );
});

export default SelectField;
