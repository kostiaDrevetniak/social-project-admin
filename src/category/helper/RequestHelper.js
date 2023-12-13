const url = "http://localhost:8080/api/category";

export const getCategories = async () => {
  const categories = await fetch(`${url}/all`, {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  }).then((response) => response.json());
  return categories;
};

export const deleteCategory = async (id) => {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
};

export const createCategory = async (data) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const editCategory = async (data, id) => {
  return await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const getCategory = async (id) => {
  const company = await fetch(`${url}/${id}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
  return company;
};
