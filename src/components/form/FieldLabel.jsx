import React from "react";

const FieldLabel = ({ label, children }) => {
  return (
    <div className="form-group my-2">
      <label className="control-label">{label}</label>
      {children}
    </div>
  );
};

export default FieldLabel;
