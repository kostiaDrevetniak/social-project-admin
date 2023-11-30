import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

const CategorySelector = ({ label, categories, control }) => {
  return (
    <div className="form-group my-2">
      <label className="control-label">{label}</label>
      <Controller
        name="categories"
        control={control}
        render={({ field: { onChange, value, name, ref } }) => {
          const currentSelection = categories.find((c) => c.value === value);

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
    </div>
  );
};

export default CategorySelector;
