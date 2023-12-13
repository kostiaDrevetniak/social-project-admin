import React from "react";

const Category = ({ category, children }) => {
  return (
    <tr className="text-center">
      <td>{category.id}</td>
      <td>{category.name}</td>
      <td>{children}</td>
    </tr>
  );
};

export default Category;
