import React from "react";

const Company = ({ company, children }) => {
  return (
    <tr>
    <td>{company.id}</td>
    <td>{company.name}</td>
    <td>
      {children}
    </td>
  </tr>
  );
};

export default Company;
