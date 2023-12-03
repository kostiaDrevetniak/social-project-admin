import React, { forwardRef } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import FieldLabel from "../FieldLabel";

const CategoryField = forwardRef(({ label, categories, control }) => {
  return (
    <FieldLabel label={label}>
      <Controller
        name="categories"
        control={control}
        render={({ field: { onChange, value, name, ref } }) => {
          value = (value) ? value : [];
          const currentSelection = categories.filter((c) => value.filter((e) => e.value === c.value).length > 0);

          const handleSelectChange = (selectedOption) => {
            onChange(selectedOption);
          };

          return (
            <Select
              inputRef={ref}
              value={currentSelection}
              name={name}
              isMulti
              options={categories}
              onChange={handleSelectChange}
            />
          );
        }}
      />
    </FieldLabel>
  );
});

export default CategoryField;
