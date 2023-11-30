export const getAllCategories = async () => {
  let categories = [];
  await fetch("http://localhost:8080/api/category/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((category) => {
        const tempCategory = {
          value: category.id,
          label: category.name,
        };
        categories.push(tempCategory);
      });
    });
  return categories;
};

export const getCompanyNames = async () => {
  let companies;
  await fetch("http://localhost:8080/api/company/all")
    .then((response) => response.json())
    .then((data) => (companies = data));
  return companies;
};
