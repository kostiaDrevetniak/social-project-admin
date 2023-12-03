export const getAllCategories = async () => {
  let categories = [];
  await fetch("http://localhost:8080/api/category/all", {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  })
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
  const companies = await fetch("http://localhost:8080/api/company/names", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
  return companies;
};
