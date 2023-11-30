import React from "react";

const Filter = ({ label, data, change }) => {
  return (
    <div className="d-flex">
      <label htmlFor="Select" className="form-label me-2 h5">{label}:</label>
      <select id="Select" defaultValue={""} onChange={change} className="form-control w-25">
        <option value="">Всі</option>
        {data.map((item, index) => (
          <option value={item.id} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
